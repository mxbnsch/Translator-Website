/**
 * In-memory download token store.
 *
 * For production, replace this with a database (Vercel Postgres, Supabase, etc.)
 * This in-memory store will reset on every deployment/restart.
 */

interface DownloadToken {
  token: string;
  bookSlug: string;
  format: "epub" | "pdf";
  email: string;
  createdAt: Date;
  expiresAt: Date;
  uses: number;
  maxUses: number;
}

const tokens = new Map<string, DownloadToken>();

export function createDownloadToken(
  bookSlug: string,
  format: "epub" | "pdf",
  email: string
): string {
  const token = generateToken();
  const now = new Date();
  const expiresAt = new Date(now.getTime() + 24 * 60 * 60 * 1000); // 24 hours

  tokens.set(token, {
    token,
    bookSlug,
    format,
    email,
    createdAt: now,
    expiresAt,
    uses: 0,
    maxUses: 5,
  });

  return token;
}

export function validateDownloadToken(token: string): DownloadToken | null {
  const download = tokens.get(token);

  if (!download) return null;
  if (download.expiresAt < new Date()) return null;
  if (download.uses >= download.maxUses) return null;

  return download;
}

export function incrementDownloadUses(token: string): void {
  const download = tokens.get(token);
  if (download) {
    download.uses += 1;
  }
}

function generateToken(): string {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < 48; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}
