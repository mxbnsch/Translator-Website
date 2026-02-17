# BilingualBooks

A modern website that describes what bilingual books are, how they help with language learning, and offers bilingual books for purchase as EPUB and PDF downloads.

Built with **Next.js 16**, **Tailwind CSS v4**, and **Stripe** for payments. Designed to be deployed on **Vercel**.

## Features

- Beautiful, responsive landing page explaining bilingual books
- "How It Works" page with the science behind bilingual reading
- Book catalog with filterable listing
- Individual book detail pages with bilingual text samples
- Stripe Checkout integration for secure payments
- Secure, time-limited download links after purchase
- EPUB and PDF format support
- Mobile-friendly design

## Getting Started

### Prerequisites

- Node.js 20+
- A [Stripe](https://stripe.com) account
- [Stripe CLI](https://stripe.com/docs/stripe-cli) (for local webhook testing)

### Setup

1. **Clone and install:**

   ```bash
   npm install
   ```

2. **Configure environment variables:**

   ```bash
   cp .env.local.example .env.local
   ```

   Fill in your Stripe API keys from the [Stripe Dashboard](https://dashboard.stripe.com/apikeys).

3. **Run the development server:**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

4. **Set up Stripe webhooks (local development):**

   ```bash
   stripe listen --forward-to localhost:3000/api/webhooks/stripe
   ```

   Copy the webhook signing secret and add it to `.env.local` as `STRIPE_WEBHOOK_SECRET`.

## Deploying to Vercel

1. Push your code to a Git repository (GitHub, GitLab, Bitbucket).

2. Import the project in [Vercel](https://vercel.com/new).

3. Add environment variables in Vercel's project settings:
   - `STRIPE_SECRET_KEY`
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - `STRIPE_WEBHOOK_SECRET`
   - `NEXT_PUBLIC_URL` (your production domain, e.g., `https://yourdomain.com`)

4. Set up a Stripe webhook endpoint pointing to:
   ```
   https://yourdomain.com/api/webhooks/stripe
   ```
   Listen for the `checkout.session.completed` event.

## Adding Real Books

The book catalog is currently defined in `src/lib/books.ts`. To add real books:

1. Add your book data to the `books` array in `src/lib/books.ts`.
2. Upload your EPUB/PDF files to a storage service (e.g., Vercel Blob, AWS S3).
3. Update `src/app/download/[token]/route.ts` to fetch files from your storage instead of returning placeholder content.

## File Storage (Production)

The download endpoint (`src/app/download/[token]/route.ts`) currently returns placeholder content. For production:

- **Vercel Blob**: `npm install @vercel/blob` — simple blob storage integrated with Vercel.
- **AWS S3**: Use the AWS SDK to fetch files from an S3 bucket.
- **Cloudflare R2**: S3-compatible storage with no egress fees.

Update the download route to fetch from your chosen storage provider.

## Project Structure

```
src/
├── app/
│   ├── page.tsx                    # Landing page
│   ├── layout.tsx                  # Root layout (header + footer)
│   ├── globals.css                 # Global styles
│   ├── about/page.tsx              # How bilingual books work
│   ├── books/
│   │   ├── page.tsx                # Book catalog
│   │   └── [slug]/page.tsx         # Book detail page
│   ├── checkout/success/page.tsx   # Post-purchase page
│   ├── api/
│   │   ├── checkout/route.ts       # Create Stripe Checkout session
│   │   └── webhooks/stripe/route.ts # Stripe webhook handler
│   └── download/[token]/route.ts   # Secure download endpoint
├── components/
│   ├── Header.tsx                  # Site header/navigation
│   ├── Footer.tsx                  # Site footer
│   ├── BookCard.tsx                # Book card for catalog
│   ├── CheckoutButton.tsx          # Buy button with Stripe
│   └── HeroSection.tsx             # Landing page hero
└── lib/
    ├── books.ts                    # Book data and helpers
    ├── stripe.ts                   # Stripe server client
    ├── stripe-client.ts            # Stripe browser client
    └── downloads.ts                # Download token management
```

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
- **Payments**: [Stripe](https://stripe.com)
- **Hosting**: [Vercel](https://vercel.com)
- **Language**: TypeScript
