import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { getBookBySlug, formatPrice } from "@/lib/books";

export async function POST(req: NextRequest) {
  try {
    const { bookSlug, format } = await req.json();

    const book = getBookBySlug(bookSlug);
    if (!book) {
      return NextResponse.json({ error: "Book not found" }, { status: 404 });
    }

    if (!book.formats.includes(format)) {
      return NextResponse.json(
        { error: "Format not available" },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `${book.title} (${format.toUpperCase()})`,
              description: `Bilingual edition: ${book.sourceLanguage} — ${book.targetLanguage}. By ${book.author}.`,
            },
            unit_amount: book.price,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL}/books/${book.slug}`,
      metadata: {
        bookSlug: book.slug,
        format,
        bookTitle: book.title,
        price: formatPrice(book.price),
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
