import type { Metadata } from 'next'

/** Production site URL — used for sitemap, canonical URLs, and structured data */
export const SITE_URL = 'http://navaneeth-coder.vercel.app/'

export const siteConfig = {
  name: 'Navaneeth Reddy',
  fullName: 'Navaneeth Reddy Pinnapureddy',
  role: 'Full Stack Developer',
  title: 'Principal Architect',
  description:
    'Navaneeth Reddy Pinnapureddy — Full Stack Developer & Principal Architect with 12+ years designing scalable, high-performance web applications for Fortune 500 financial institutions.',
  url: process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || SITE_URL,
  locale: 'en_US',
  email: 'Navaneethr.work9@gmail.com',
  location: 'Minneapolis, MN',
  linkedIn: 'https://www.linkedin.com/in/navaneeth-reddy-pinnapureddy/',
  github: 'https://github.com/NavaneethReddi',
  keywords: [
    'Navaneeth Reddy',
    'Navaneeth Reddy Pinnapureddy',
    'Navaneeth Reddy Full Stack Developer',
    'Full Stack Developer',
    'Principal Architect',
    'React Developer Minneapolis',
    'Next.js Developer',
    'TypeScript',
    'Enterprise Software Architect',
    'Discover Financial Services',
    'Senior Software Engineer Minnesota',
    'Minneapolis Developer',
  ],
} as const

/** Homepage title: full name + role */
export const homeTitle = `${siteConfig.fullName} | ${siteConfig.role}`

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
      siteName: siteConfig.fullName,
      locale: siteConfig.locale,
      type: 'website',
      images: [
          {
            url: `${siteConfig.url}/opengraph-image`,
            width: 1200,
            height: 630,
            alt: `${pageTitle} — ${siteConfig.location}`,
          },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description,
        images: [{ url: `${siteConfig.url}/opengraph-image`, alt: pageTitle }],
    },
  }
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: homeTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.fullName, url: siteConfig.url }],
  creator: siteConfig.fullName,
  applicationName: siteConfig.fullName,
  formatDetection: { email: false, address: false, telephone: false },
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
    siteName: siteConfig.fullName,
    title: homeTitle,
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.url}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.fullName} — ${siteConfig.title}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: homeTitle,
    description: siteConfig.description,
    images: [{ url: `${siteConfig.url}/opengraph-image`, alt: `${siteConfig.fullName} — ${siteConfig.title}` }],
  },
  ...(process.env.GOOGLE_SITE_VERIFICATION && {
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
    },
  }),
}
