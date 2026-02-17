import BookCard from "@/components/BookCard";
import { books } from "@/lib/books";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Catalog — BilingualBooks",
  description:
    "Browse our collection of bilingual books in French, Spanish, German, Italian, Portuguese, Japanese, and more.",
};

export default function BooksPage() {
  const languages = [...new Set(books.map((b) => b.sourceLanguage))];

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Book Catalog
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Choose from our growing collection of bilingual books. Every book
            comes in both EPUB and PDF formats.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {languages.map((lang) => (
              <span
                key={lang}
                className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-700"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Books grid */}
      <section className="bg-white py-12 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {books.map((book) => (
              <BookCard key={book.slug} book={book} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
