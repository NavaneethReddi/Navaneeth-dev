import { MetadataRoute } from 'next'

const BASE_URL = 'https://clerk-nextjs-phi.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: '',          priority: 1.0,  freq: 'monthly'  },
    { path: '/about',    priority: 0.9,  freq: 'monthly'  },
    { path: '/experience', priority: 0.9, freq: 'monthly' },
    { path: '/skills',   priority: 0.8,  freq: 'monthly'  },
    { path: '/contact',  priority: 0.7,  freq: 'monthly'  },
    { path: '/testimonials', priority: 0.6, freq: 'monthly' },
  ]

  return pages.map(({ path, priority, freq }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: freq as MetadataRoute.Sitemap[0]['changeFrequency'],
import type { MetadataRoute } from 'next'
import { publicRoutes, siteConfig } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return publicRoutes.map(({ path, priority, changeFrequency }) => ({
    url: `${siteConfig.url}${path === '/' ? '' : path}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
