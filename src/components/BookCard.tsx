import Link from "next/link";
import { Book, formatPrice } from "@/lib/books";

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <Link
      href={`/books/${book.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
    >
      {/* Cover art placeholder */}
      <div
        className={`relative flex h-56 items-center justify-center bg-gradient-to-br ${book.coverColor}`}
      >
        <div className="text-center text-white">
          <div className="text-5xl font-serif font-bold opacity-90">
            {book.title.charAt(0)}
          </div>
          <div className="mt-2 text-sm font-medium opacity-80">
            {book.sourceLanguage} — {book.targetLanguage}
          </div>
        </div>
        <div className="absolute top-3 right-3 rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
          {book.level}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold text-slate-900 group-hover:text-emerald-600 transition-colors">
          {book.title}
        </h3>
        <p className="mt-1 text-sm text-slate-500">{book.author}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 line-clamp-3">
          {book.description}
        </p>

        <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
          <div className="flex items-center gap-2">
            {book.formats.map((format) => (
              <span
                key={format}
                className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium uppercase text-slate-600"
              >
                {format}
              </span>
            ))}
          </div>
          <span className="text-lg font-bold text-emerald-600">
            {formatPrice(book.price)}
          </span>
        </div>
      </div>
    </Link>
  );
}
