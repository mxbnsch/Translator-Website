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
    formats: ["epub", "pdf"],
    featured: true,
    sample:
      '"Lorsque j\'avais six ans j\'ai vu, une fois, une magnifique image."\n"When I was six years old I saw, once, a magnificent picture."',
  },
  {
    slug: "don-quixote-spanish-english",
    title: "Don Quixote",
    author: "Miguel de Cervantes",
    description:
      "The adventure of the ingenious gentleman Don Quixote of La Mancha, in Spanish and English.",
    longDescription:
      "Dive into the world's first modern novel with this carefully crafted bilingual edition. Cervantes' masterwork follows the adventures of a nobleman who loses his sanity and decides to become a knight-errant. This edition presents selected chapters in both Spanish and English, making the rich, classic Spanish accessible to learners at the intermediate to advanced level.",
    sourceLanguage: "Spanish",
    targetLanguage: "English",
    level: "Advanced",
    pages: 224,
    price: 1299,
    stripePriceId: "price_donquixote",
    coverColor: "from-red-500 to-rose-600",
    formats: ["epub", "pdf"],
    featured: true,
    sample:
      '"En un lugar de la Mancha, de cuyo nombre no quiero acordarme..."\n"In a village of La Mancha, the name of which I have no desire to call to mind..."',
  },
  {
    slug: "grimms-fairy-tales-german-english",
    title: "Grimm's Fairy Tales",
    author: "Brothers Grimm",
    description:
      "A collection of beloved German fairy tales presented bilingually in German and English.",
    longDescription:
      "Rediscover the magic of the Brothers Grimm in their original German alongside English translations. This collection includes favorites like Hansel and Gretel, Rapunzel, and Snow White. The straightforward narrative style of fairy tales makes this an excellent choice for German learners at the beginner to intermediate level. Each story builds vocabulary naturally through repetition and vivid storytelling.",
    sourceLanguage: "German",
    targetLanguage: "English",
    level: "Beginner",
    pages: 156,
    price: 999,
    stripePriceId: "price_grimmstales",
    coverColor: "from-emerald-500 to-teal-600",
    formats: ["epub", "pdf"],
    featured: true,
    sample:
      '"Es war einmal ein kleines Mädchen, das von jedermann geliebt wurde."\n"Once upon a time there was a little girl who was loved by everyone."',
  },
  {
    slug: "pinocchio-italian-english",
    title: "Pinocchio",
    author: "Carlo Collodi",
    description:
      "The original Italian tale of the wooden puppet who dreams of becoming a real boy.",
    longDescription:
      "Read Carlo Collodi's original Italian masterpiece alongside its English translation. Far richer and more complex than the Disney adaptation, the original Pinocchio is a wonderful vehicle for learning Italian. The conversational style and vivid descriptions make it perfect for intermediate learners looking to build their Italian reading skills with an engaging, familiar story.",
    sourceLanguage: "Italian",
    targetLanguage: "English",
    level: "Intermediate",
    pages: 180,
    price: 999,
    stripePriceId: "price_pinocchio",
    coverColor: "from-blue-500 to-indigo-600",
    formats: ["epub", "pdf"],
    featured: false,
    sample:
      '"C\'era una volta... — Un re! — diranno subito i miei piccoli lettori."\n"Once upon a time... — A king! — my little readers will say right away."',
  },
  {
    slug: "alice-wonderland-portuguese-english",
    title: "Alice in Wonderland",
    author: "Lewis Carroll",
    description:
      "Follow Alice down the rabbit hole in this Portuguese-English bilingual edition.",
    longDescription:
      "Lewis Carroll's whimsical classic gets a bilingual treatment in this Portuguese-English edition. Alice's Adventures in Wonderland is full of wordplay, wit, and imagination — making it a delightful way to learn Portuguese. The text is presented paragraph by paragraph, allowing you to follow along in both languages effortlessly. Suitable for intermediate learners who enjoy creative, playful language.",
    sourceLanguage: "Portuguese",
    targetLanguage: "English",
    level: "Intermediate",
    pages: 144,
    price: 899,
    stripePriceId: "price_alice",
    coverColor: "from-purple-500 to-violet-600",
    formats: ["epub", "pdf"],
    featured: false,
    sample:
      '"Alice estava começando a ficar muito cansada de estar sentada ao lado da irmã."\n"Alice was beginning to get very tired of sitting by her sister."',
  },
  {
    slug: "little-stories-japanese-english",
    title: "Little Stories in Japanese",
    author: "Various Authors",
    description:
      "A curated collection of short Japanese stories for beginners, with English translations.",
    longDescription:
      "This carefully curated collection brings together simple, engaging Japanese stories designed specifically for language learners. Each story is presented in Japanese (with furigana reading aids) alongside natural English translations. Topics range from daily life to traditional folk tales, gradually increasing in complexity. Perfect for beginners who want to start reading authentic Japanese content.",
    sourceLanguage: "Japanese",
    targetLanguage: "English",
    level: "Beginner",
    pages: 120,
    price: 1099,
    stripePriceId: "price_japanesestories",
    coverColor: "from-pink-500 to-rose-500",
    formats: ["epub", "pdf"],
    featured: false,
    sample:
      '"むかしむかし、あるところに、おじいさんとおばあさんがいました。"\n"Once upon a time, in a certain place, there lived an old man and an old woman."',
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
