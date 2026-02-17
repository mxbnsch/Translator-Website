import Link from "next/link";
import { stripe } from "@/lib/stripe";
import { getBookBySlug } from "@/lib/books";
import { createDownloadToken } from "@/lib/downloads";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Purchase Successful — BilingualBooks",
};

interface PageProps {
  searchParams: Promise<{ session_id?: string }>;
}

export default async function CheckoutSuccessPage({
  searchParams,
}: PageProps) {
  const { session_id } = await searchParams;

  if (!session_id) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900">
            No session found
          </h1>
          <p className="mt-2 text-slate-600">
            It looks like you arrived here without completing a purchase.
          </p>
          <Link
            href="/books"
            className="mt-6 inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
          >
            Browse Books
          </Link>
        </div>
      </div>
    );
  }

  let session;
  try {
    session = await stripe.checkout.sessions.retrieve(session_id);
  } catch {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900">
            Session not found
          </h1>
          <p className="mt-2 text-slate-600">
            We couldn&apos;t find this checkout session. Please contact support
            if you believe this is an error.
          </p>
          <Link
            href="/books"
            className="mt-6 inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
          >
            Browse Books
          </Link>
        </div>
      </div>
    );
  }

  const bookSlug = session.metadata?.bookSlug;
  const format = session.metadata?.format as "epub" | "pdf" | undefined;
  const email = session.customer_details?.email;
  const book = bookSlug ? getBookBySlug(bookSlug) : null;

  let downloadToken: string | null = null;
  if (
    session.payment_status === "paid" &&
    bookSlug &&
    format &&
    email
  ) {
    downloadToken = createDownloadToken(bookSlug, format, email);
  }

  return (
    <section className="py-20">
      <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
        {/* Success icon */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">
          <svg
            className="h-10 w-10 text-emerald-600"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </div>

        <h1 className="mt-6 text-3xl font-bold text-slate-900">
          Thank you for your purchase!
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          {email && (
            <>
              A confirmation has been sent to{" "}
              <strong className="text-slate-900">{email}</strong>.
            </>
          )}
        </p>

        {book && (
          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-8">
            <div
              className={`mx-auto flex h-32 w-24 items-center justify-center rounded-lg bg-gradient-to-br ${book.coverColor} shadow-lg`}
            >
              <span className="text-3xl font-serif font-bold text-white opacity-90">
                {book.title.charAt(0)}
              </span>
            </div>
            <h2 className="mt-4 text-xl font-bold text-slate-900">
              {book.title}
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              {book.author} &middot; {book.sourceLanguage} &rarr;{" "}
              {book.targetLanguage}
            </p>

            {downloadToken ? (
              <div className="mt-6">
                <a
                  href={`/download/${downloadToken}`}
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-emerald-700"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                  Download {format?.toUpperCase()}
                </a>
                <p className="mt-3 text-xs text-slate-400">
                  This link expires in 24 hours and can be used up to 5 times.
                </p>
              </div>
            ) : (
              <div className="mt-6">
                <p className="text-sm text-amber-600">
                  Your payment is being processed. You&apos;ll receive a download
                  link via email shortly.
                </p>
              </div>
            )}
          </div>
        )}

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/books"
            className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
          >
            Browse More Books
          </Link>
          <Link
            href="/"
            className="text-sm font-semibold text-slate-600 hover:text-slate-900"
          >
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
