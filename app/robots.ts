import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: 'https://navaneeth-dev-alpha.vercel.app/sitemap.xml',
    host: 'https://navaneeth-dev-alpha.vercel.app',
  }
}
