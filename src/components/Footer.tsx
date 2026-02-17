import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 text-white font-bold text-sm">
                BB
              </div>
              <span className="text-lg font-bold text-slate-900">
                BilingualBooks
              </span>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Learn languages naturally by reading great literature in two
              languages side by side.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Navigation
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-slate-600 transition-colors hover:text-slate-900"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/books"
                  className="text-sm text-slate-600 transition-colors hover:text-slate-900"
                >
                  Book Catalog
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-slate-600 transition-colors hover:text-slate-900"
                >
                  How It Works
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">Support</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="mailto:support@bilingualbooks.com"
                  className="text-sm text-slate-600 transition-colors hover:text-slate-900"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <span className="text-sm text-slate-600">
                  Secure payments via Stripe
                </span>
              </li>
              <li>
                <span className="text-sm text-slate-600">
                  Instant digital delivery
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-8">
          <p className="text-center text-xs text-slate-500">
            &copy; {new Date().getFullYear()} BilingualBooks. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
