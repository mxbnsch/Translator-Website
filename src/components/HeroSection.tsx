import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-white">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-emerald-100 opacity-50 blur-3xl" />
        <div className="absolute top-20 -left-20 h-60 w-60 rounded-full bg-teal-100 opacity-50 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700">
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
              />
            </svg>
            Bilingual Reading for Language Learners
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
            Learn languages by{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              reading books
            </span>{" "}
            you love
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600 sm:text-xl">
            Our bilingual books present great literature in two languages side by
            side. Read the original text and its translation together — build
            vocabulary, absorb grammar, and enjoy the story.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/books"
              className="rounded-full bg-emerald-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-emerald-200 transition-all hover:bg-emerald-700 hover:shadow-xl hover:shadow-emerald-200"
            >
              Browse Our Books
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-slate-300 bg-white px-8 py-3.5 text-base font-semibold text-slate-700 transition-all hover:border-slate-400 hover:bg-slate-50"
            >
              How It Works
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-slate-200 pt-10">
            <div>
              <div className="text-3xl font-bold text-slate-900">6+</div>
              <div className="mt-1 text-sm text-slate-600">Languages</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900">PDF & EPUB</div>
              <div className="mt-1 text-sm text-slate-600">Formats</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900">Instant</div>
              <div className="mt-1 text-sm text-slate-600">Download</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
