import type { Metadata } from 'next'

/** Production site URL — used for sitemap, canonical URLs, and structured data */
export const SITE_URL = 'https://navaneeth-dev-alpha.vercel.app'

export const siteConfig = {
  name: 'Navaneeth Reddy',
  fullName: 'Navaneeth Reddy Pinnapureddy',
  title: 'Principal Architect',
  description:
    'Senior Full-Stack Developer & Principal Architect with 12+ years designing scalable, high-performance web applications for Fortune 500 financial institutions.',
  url: process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || SITE_URL,
  locale: 'en_US',
  email: 'Navaneethr.work9@gmail.com',
  location: 'Minneapolis, MN',
  linkedIn: 'https://www.linkedin.com/in/navaneeth-reddy-pinnapureddy/',
  github: 'https://github.com/NavaneethReddi',
  keywords: [
    'Navaneeth Reddy',
    'Navaneeth Reddy Pinnapureddy',
    'Principal Architect',
    'Full-Stack Developer',
    'React Developer Minneapolis',
    'Next.js',
    'TypeScript',
    'Enterprise Software Architect',
    'Discover Financial Services',
  ],
} as const

export const publicRoutes = [
  { path: '/', priority: 1, changeFrequency: 'weekly' as const },
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/experience', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/skills', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/testimonials', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
]

export function createPageMetadata({
  title,
  description,
  path,
}: {
  title: string
  description: string
  path: string
}): Metadata {
  const pageTitle = path === '/' ? title : `${title} | ${siteConfig.name}`

  return {
    title: pageTitle,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: pageTitle,
      description,
      url: path,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description,
    },
  }
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.fullName, url: siteConfig.url }],
  creator: siteConfig.fullName,
  applicationName: `${siteConfig.name} Portfolio`,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: '/',
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.description,
  },
  verification: {
    // Add tokens from Google Search Console when ready:
    // google: 'your-google-verification-code',
  },
}
