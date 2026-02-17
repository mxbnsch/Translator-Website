import { notFound } from "next/navigation";
import Link from "next/link";
import { books, getBookBySlug, formatPrice } from "@/lib/books";
import CheckoutButton from "@/components/CheckoutButton";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return books.map((book) => ({ slug: book.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const book = getBookBySlug(slug);
  if (!book) return { title: "Book Not Found" };

  return {
    title: `${book.title} — BilingualBooks`,
    description: book.description,
  };
}

export default async function BookDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const book = getBookBySlug(slug);

  if (!book) {
    notFound();
  }

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 py-3 lg:px-8">
          <nav className="flex text-sm text-slate-500">
            <Link href="/" className="hover:text-slate-700">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/books" className="hover:text-slate-700">
              Books
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900">{book.title}</span>
          </nav>
        </div>
      </div>

      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Book cover */}
            <div>
              <div
                className={`flex aspect-[3/4] items-center justify-center rounded-2xl bg-gradient-to-br ${book.coverColor} shadow-2xl`}
              >
                <div className="text-center text-white px-8">
                  <div className="text-8xl font-serif font-bold opacity-90">
                    {book.title.charAt(0)}
                  </div>
                  <div className="mt-4 text-2xl font-bold">{book.title}</div>
                  <div className="mt-2 text-lg opacity-80">{book.author}</div>
                  <div className="mt-4 text-sm opacity-70">
                    {book.sourceLanguage} — {book.targetLanguage}
                  </div>
                </div>
              </div>
            </div>

            {/* Book details */}
            <div>
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                  {book.level}
                </span>
                <span className="text-sm text-slate-500">
                  {book.sourceLanguage} &rarr; {book.targetLanguage}
                </span>
              </div>

              <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
                {book.title}
              </h1>
              <p className="mt-2 text-lg text-slate-500">by {book.author}</p>

              <p className="mt-6 text-base leading-7 text-slate-600">
                {book.longDescription}
              </p>

              {/* Details grid */}
              <div className="mt-8 grid grid-cols-2 gap-4 rounded-xl border border-slate-200 bg-slate-50 p-6">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Languages
                  </div>
                  <div className="mt-1 text-sm font-medium text-slate-900">
                    {book.sourceLanguage} & {book.targetLanguage}
                  </div>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Level
                  </div>
                  <div className="mt-1 text-sm font-medium text-slate-900">
                    {book.level}
                  </div>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Pages
                  </div>
                  <div className="mt-1 text-sm font-medium text-slate-900">
                    ~{book.pages}
                  </div>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Formats
                  </div>
                  <div className="mt-1 text-sm font-medium text-slate-900">
                    {book.formats.map((f) => f.toUpperCase()).join(" & ")}
                  </div>
                </div>
              </div>

              {/* Sample text */}
              <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Sample
                </div>
                <div className="mt-3 space-y-2">
                  {book.sample.split("\n").map((line, i) => (
                    <p
                      key={i}
                      className={`font-serif text-sm italic leading-relaxed ${
                        i === 0 ? "text-slate-800" : "text-emerald-700"
                      }`}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>

              {/* Price and buy buttons */}
              <div className="mt-8">
                <div className="mb-4 text-3xl font-bold text-slate-900">
                  {formatPrice(book.price)}
                </div>
                <div className="space-y-3">
                  {book.formats.map((format) => (
                    <CheckoutButton
                      key={format}
                      bookSlug={book.slug}
                      format={format}
                      price={formatPrice(book.price)}
                    />
                  ))}
                </div>
                <p className="mt-4 text-center text-xs text-slate-400">
                  Secure payment via Stripe. Instant download after purchase.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
