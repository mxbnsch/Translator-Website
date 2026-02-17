import { NextRequest, NextResponse } from "next/server";
import {
  validateDownloadToken,
  incrementDownloadUses,
} from "@/lib/downloads";
import { getBookBySlug } from "@/lib/books";

interface RouteContext {
  params: Promise<{ token: string }>;
}

export async function GET(req: NextRequest, context: RouteContext) {
  const { token } = await context.params;
  const download = validateDownloadToken(token);

  if (!download) {
    return new NextResponse(
      `<!DOCTYPE html>
      <html>
        <head><title>Download Expired</title></head>
        <body style="font-family: system-ui; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; background: #f8fafc;">
          <div style="text-align: center; max-width: 400px; padding: 2rem;">
            <h1 style="color: #0f172a; font-size: 1.5rem;">Download Link Expired</h1>
            <p style="color: #64748b; margin-top: 1rem;">This download link has expired or has been used too many times. If you believe this is an error, please contact support.</p>
            <a href="/" style="display: inline-block; margin-top: 1.5rem; padding: 0.75rem 1.5rem; background: #059669; color: white; border-radius: 9999px; text-decoration: none; font-weight: 600;">Back to Home</a>
          </div>
        </body>
      </html>`,
      {
        status: 410,
        headers: { "Content-Type": "text/html" },
      }
    );
  }

  const book = getBookBySlug(download.bookSlug);
  if (!book) {
    return NextResponse.json({ error: "Book not found" }, { status: 404 });
  }

  incrementDownloadUses(token);

  const fileUrl = book.files?.[download.format];
  if (!fileUrl) {
    return NextResponse.json(
      { error: "File not available for this format" },
      { status: 404 }
    );
  }

  const fileResponse = await fetch(fileUrl);
  if (!fileResponse.ok) {
    return NextResponse.json(
      { error: "Failed to retrieve file" },
      { status: 500 }
    );
  }

  const fileBuffer = await fileResponse.arrayBuffer();

  const contentType =
    download.format === "epub"
      ? "application/epub+zip"
      : "application/pdf";

  const fileName = `${book.title.replace(/[^a-zA-Z0-9]/g, "_")}_${book.sourceLanguage}_${book.targetLanguage}.${download.format}`;

  return new NextResponse(fileBuffer, {
    headers: {
      "Content-Type": contentType,
      "Content-Disposition": `attachment; filename="${fileName}"`,
    },
  });
}
