import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { createDownloadToken } from "@/lib/downloads";
import Stripe from "stripe";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json(
      { error: "Missing stripe-signature header" },
      { status: 400 }
    );
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("Webhook signature verification failed:", message);
    return NextResponse.json(
      { error: `Webhook Error: ${message}` },
      { status: 400 }
    );
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const { bookSlug, format } = session.metadata || {};
    const email = session.customer_details?.email || "unknown";

    if (bookSlug && format) {
      const token = createDownloadToken(
        bookSlug,
        format as "epub" | "pdf",
        email
      );
      console.log(
        `Download token created for ${email}: ${bookSlug} (${format}) — token: ${token}`
      );
    }
  }

  return NextResponse.json({ received: true });
}
