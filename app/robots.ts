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
    sitemap: 'http://navaneeth-coder.vercel.app//sitemap.xml',
    host: 'http://navaneeth-coder.vercel.app',
  }
}
