import HeroSection from "@/components/HeroSection";
import BookCard from "@/components/BookCard";
import { getFeaturedBooks } from "@/lib/books";
import Link from "next/link";

export default function Home() {
  const featuredBooks = getFeaturedBooks();

  return (
    <>
      <HeroSection />

      {/* What Are Bilingual Books? */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              What Are Bilingual Books?
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Bilingual books present text in two languages simultaneously —
              typically with the original language on one side and its
              translation on the other. This parallel format allows you to read
              naturally, comparing the two versions as you go.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Example side-by-side */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
              <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                French (Original)
              </div>
              <p className="font-serif text-lg italic leading-relaxed text-slate-800">
                &ldquo;Lorsque j&apos;avais six ans j&apos;ai vu, une fois, une
                magnifique image dans un livre sur la Forêt Vierge.&rdquo;
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8">
              <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-emerald-600">
                English (Translation)
              </div>
              <p className="font-serif text-lg italic leading-relaxed text-slate-800">
                &ldquo;When I was six years old I saw, once, a magnificent
                picture in a book about the Virgin Forest.&rdquo;
              </p>
            </div>
          </div>

          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-slate-500">
            — From &ldquo;Le Petit Prince&rdquo; by Antoine de Saint-Exupéry
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Why Bilingual Books Work
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Research shows that extensive reading is one of the most effective
              ways to acquire a new language. Bilingual books supercharge this
              approach.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100">
                <svg
                  className="h-6 w-6 text-emerald-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                Learn in Context
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                See words and phrases used naturally in real literature, not
                isolated flashcards. Context helps you remember vocabulary and
                understand nuance.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100">
                <svg
                  className="h-6 w-6 text-amber-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                No Dictionary Needed
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                The translation is right there beside the original. No
                interrupting your flow to look up words — just glance at the
                other side.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                <svg
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                Absorb Grammar Naturally
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                By reading real sentences, you internalize grammar patterns
                naturally — the same way native speakers learn as children.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100">
                <svg
                  className="h-6 w-6 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                Build Reading Stamina
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Start with the parallel translation as support, then gradually
                rely on it less as your skills improve.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-rose-100">
                <svg
                  className="h-6 w-6 text-rose-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                Enjoy Real Literature
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                No boring textbooks. Read beloved classics, fairy tales, and
                engaging stories that keep you motivated.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100">
                <svg
                  className="h-6 w-6 text-teal-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                Read Anywhere
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Download as EPUB for your e-reader or PDF for any device. Read
                on your commute, in bed, or at your desk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Featured Books
              </h2>
              <p className="mt-2 text-lg text-slate-600">
                Start your bilingual reading journey with these popular titles.
              </p>
            </div>
            <Link
              href="/books"
              className="hidden text-sm font-semibold text-emerald-600 hover:text-emerald-700 sm:block"
            >
              View all books &rarr;
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredBooks.map((book) => (
              <BookCard key={book.slug} book={book} />
            ))}
          </div>

          <div className="mt-10 text-center sm:hidden">
            <Link
              href="/books"
              className="text-sm font-semibold text-emerald-600 hover:text-emerald-700"
            >
              View all books &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to start learning through reading?
          </h2>
          <p className="mt-4 text-lg text-emerald-100">
            Choose a book in your target language and start reading today.
            Instant download after purchase.
          </p>
          <Link
            href="/books"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3.5 text-base font-semibold text-emerald-700 shadow-lg transition-all hover:bg-emerald-50"
          >
            Browse All Books
          </Link>
        </div>
      </section>
    </>
  );
}
