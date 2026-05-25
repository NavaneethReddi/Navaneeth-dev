import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: 'https://clerk-nextjs-phi.vercel.app/sitemap.xml',
    host: 'https://clerk-nextjs-phi.vercel.app',
  }
}
