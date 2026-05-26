import type { Metadata, Viewport } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from './providers/ThemeProvider'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })
const BASE = 'https://navaneeth-dev-alpha.vercel.app'

export const viewport: Viewport = {
  themeColor: '#06b6d4',
  colorScheme: 'light dark',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: 'Navaneeth Reddy | Principal Architect & Full-Stack Developer',
    template: '%s | Navaneeth Reddy',
  },
  description:
    'Senior Full-Stack Developer and Principal Architect with 12+ years building scalable React, Next.js, and Node.js applications for Fortune 500 companies. Minneapolis, MN.',
  keywords: [
    'Navaneeth Reddy',
    'Navaneeth Reddy Pinnapureddy',
    'Principal Architect Minneapolis',
    'Full Stack Developer Minneapolis',
    'React Developer Minneapolis',
    'Next.js Developer',
    'Senior Software Engineer Minnesota',
    'TypeScript Developer',
    'AWS Developer',
    'Enterprise Architect',
    'Discover Financial Services Developer',
  ],
  authors: [{ name: 'Navaneeth Reddy Pinnapureddy', url: BASE }],
  creator: 'Navaneeth Reddy Pinnapureddy',
  publisher: 'Navaneeth Reddy Pinnapureddy',
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: 'website',
    url: BASE,
    siteName: 'Navaneeth Reddy',
    title: 'Navaneeth Reddy | Principal Architect & Full-Stack Developer',
    description:
      '12+ years enterprise engineering. React, Next.js, TypeScript, Node.js, AWS. Minneapolis, MN.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Navaneeth Reddy — Principal Architect & Full-Stack Developer',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Navaneeth Reddy | Principal Architect & Full-Stack Developer',
    description:
      '12+ years enterprise engineering. React, Next.js, TypeScript, Node.js, AWS. Minneapolis, MN.',
    images: [{ url: '/og-image.png', alt: 'Navaneeth Reddy — Principal Architect' }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  alternates: { canonical: '/' },
  category: 'technology',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var s=localStorage.getItem('theme');if(s==='dark'){document.documentElement.classList.add('dark')}else{document.documentElement.classList.remove('dark');if(!s)localStorage.setItem('theme','light')}}catch(e){}`,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased pt-16`}>
        <ClerkProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  )
}
