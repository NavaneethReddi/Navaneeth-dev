import { NextResponse } from 'next/server';

export async function GET() {
  // List your main routes here
  const pages = [
    '',
    'about',
    'experience',
    'skills',
    'contact',
    'testimonials',
    'technews',
  ];
  const baseUrl = 'https://navaneeth-dev-alpha.vercel.app/'; // TODO: Set your real domain
  const urls = pages.map(
    (page) => `<url><loc>${baseUrl}/${page}</loc></url>`
  ).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls}
    </urlset>`;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
