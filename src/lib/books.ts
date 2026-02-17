export interface Book {
  slug: string;
  title: string;
  author: string;
  description: string;
  longDescription: string;
  sourceLanguage: string;
  targetLanguage: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  pages: number;
  price: number; // in cents
  stripePriceId: string;
  coverColor: string; // tailwind gradient classes
  formats: ("epub" | "pdf")[];
  featured: boolean;
  sample: string; // short bilingual sample text
  files?: {
    epub?: string;
    pdf?: string;
  };
}

export const books: Book[] = [
  {
    slug: "le-petit-prince-french-english",
    title: "Le Petit Prince",
    author: "Antoine de Saint-Exupéry",
    description:
      "The beloved classic about a young prince who travels from planet to planet, presented in French and English side by side.",
    longDescription:
      "Experience Antoine de Saint-Exupéry's timeless masterpiece in both French and English. This bilingual edition presents the original French text alongside a faithful English translation, paragraph by paragraph. Perfect for French learners who want to immerse themselves in authentic literature while having the English translation readily available for reference. The simple yet profound language makes it ideal for intermediate learners.",
    sourceLanguage: "French",
    targetLanguage: "English",
    level: "Intermediate",
    pages: 96,
    price: 899,
    stripePriceId: "price_lepetitprince",
    coverColor: "from-amber-400 to-orange-500",
    formats: ["epub"],
    featured: true,
    sample:
      '"Lorsque j\'avais six ans j\'ai vu, une fois, une magnifique image."\n"When I was six years old I saw, once, a magnificent picture."',
    files: {
      epub: "https://cnkwezeonydp8wqr.public.blob.vercel-storage.com/adventuresoftomsoyer_15-290_bilingual.epub",
    },
  },
];

export function getBookBySlug(slug: string): Book | undefined {
  return books.find((book) => book.slug === slug);
}

export function getFeaturedBooks(): Book[] {
  return books.filter((book) => book.featured);
}

export function formatPrice(priceInCents: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(priceInCents / 100);
}
