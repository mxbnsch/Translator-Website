import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Bilingual Books Work — BilingualBooks",
  description:
    "Learn how bilingual books help you master a new language through parallel reading, contextual learning, and natural grammar absorption.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            How Bilingual Books Help You Learn
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Bilingual books are one of the oldest and most effective methods for
            language learning. Here&apos;s the science and practice behind why
            they work so well.
          </p>
        </div>
      </section>

      {/* What is a bilingual book */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            What Is a Bilingual Book?
          </h2>
          <div className="mt-6 space-y-4 text-base leading-7 text-slate-600">
            <p>
              A bilingual book (also called a &ldquo;parallel text&rdquo; or
              &ldquo;dual-language book&rdquo;) presents a text in two languages
              simultaneously. The most common format shows the original language
              on the left page and the translation on the right, or alternates
              paragraph by paragraph.
            </p>
            <p>
              Unlike textbooks that teach grammar rules in isolation, bilingual
              books immerse you in authentic, native-level language from the very
              start. You experience the language as it&apos;s actually used —
              with all its idioms, cultural references, and natural flow.
            </p>
            <p>
              Our digital bilingual books use a paragraph-by-paragraph format,
              making it easy to follow along in both languages whether you&apos;re
              reading on a tablet, e-reader, or computer.
            </p>
          </div>
        </div>
      </section>

      {/* The method */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            The Bilingual Reading Method
          </h2>
          <div className="mt-8 space-y-8">
            <div className="flex gap-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700">
                1
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Read the target language first
                </h3>
                <p className="mt-2 text-base leading-7 text-slate-600">
                  Start by reading the paragraph in the language you&apos;re
                  learning. Try to understand as much as possible from context,
                  cognates, and words you already know.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700">
                2
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Check the translation
                </h3>
                <p className="mt-2 text-base leading-7 text-slate-600">
                  Glance at the English translation to fill in the gaps. Notice
                  how phrases are structured differently between the two
                  languages. This builds your intuition for the grammar.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700">
                3
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Re-read the original
                </h3>
                <p className="mt-2 text-base leading-7 text-slate-600">
                  Go back and read the target language paragraph again. With the
                  meaning fresh in your mind, the foreign text will feel more
                  natural and comprehensible.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700">
                4
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Rely less on translation over time
                </h3>
                <p className="mt-2 text-base leading-7 text-slate-600">
                  As you progress through the book, you&apos;ll find yourself
                  needing the translation less and less. That&apos;s the magic
                  of bilingual reading — it naturally scaffolds your learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Science behind it */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            The Science Behind It
          </h2>
          <div className="mt-6 space-y-4 text-base leading-7 text-slate-600">
            <p>
              <strong className="text-slate-900">
                Comprehensible Input (Stephen Krashen):
              </strong>{" "}
              Language acquisition research consistently shows that we learn
              languages best when we receive input that is slightly above our
              current level — what linguist Stephen Krashen calls
              &ldquo;i+1&rdquo;. Bilingual books naturally provide this:
              the foreign text challenges you, while the translation ensures
              comprehension.
            </p>
            <p>
              <strong className="text-slate-900">
                Extensive Reading Research:
              </strong>{" "}
              Studies show that extensive reading in a target language leads to
              significant gains in vocabulary, grammar, reading speed, and even
              writing ability. Bilingual books remove the frustration barrier
              that usually stops learners from reading authentic texts.
            </p>
            <p>
              <strong className="text-slate-900">
                Incidental Vocabulary Acquisition:
              </strong>{" "}
              Research shows that encountering words in meaningful contexts leads
              to better retention than rote memorization. When you see a new word
              in a story and understand it through the translation, you form
              a stronger memory connection.
            </p>
            <p>
              <strong className="text-slate-900">
                Pattern Recognition:
              </strong>{" "}
              By comparing sentence structures across two languages, your brain
              naturally identifies grammar patterns. This implicit learning is
              often more durable and practical than explicit grammar
              instruction.
            </p>
          </div>
        </div>
      </section>

      {/* Who are they for */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Who Are Bilingual Books For?
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="font-semibold text-slate-900">Beginners</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Start with simpler texts like fairy tales. The parallel
                translation means you&apos;re never lost, building confidence
                from day one.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="font-semibold text-slate-900">
                Intermediate Learners
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                The sweet spot for bilingual books. You understand enough to
                follow along, and the translation fills in gaps without slowing
                you down.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="font-semibold text-slate-900">
                Advanced Learners
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Use the translation sparingly to check nuance, idioms, and
                cultural references. A great way to polish your reading skills
                with challenging literature.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="font-semibold text-slate-900">Book Lovers</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Even if you&apos;re not actively studying a language, bilingual
                editions let you experience classic literature in its original
                language.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Start Reading in Two Languages Today
          </h2>
          <p className="mt-4 text-lg text-emerald-100">
            Browse our collection of bilingual books and find the perfect title
            for your language learning journey.
          </p>
          <Link
            href="/books"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3.5 text-base font-semibold text-emerald-700 shadow-lg transition-all hover:bg-emerald-50"
          >
            Browse Books
          </Link>
        </div>
      </section>
    </>
  );
}
