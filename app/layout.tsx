import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from './providers/ThemeProvider'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })
const BASE = 'https://clerk-nextjs-phi.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: { default: 'Navaneeth Reddy | Principal Architect & Full-Stack Developer', template: '%s | Navaneeth Reddy' },
  description: 'Senior Full-Stack Developer and Principal Architect with 12+ years building scalable React, Next.js, and Node.js applications for Fortune 500 companies. Minneapolis, MN.',
  keywords: ['Navaneeth Reddy','Navaneeth Reddy Pinnapureddy','Principal Architect Minneapolis','Full Stack Developer Minneapolis','React Developer Minneapolis','Next.js Developer','Senior Software Engineer Minnesota','TypeScript Developer','AWS Developer'],
  authors: [{ name: 'Navaneeth Reddy Pinnapureddy', url: BASE }],
  openGraph: { type: 'website', url: BASE, siteName: 'Navaneeth Reddy', title: 'Navaneeth Reddy | Principal Architect', description: '12+ years enterprise engineering. React, Next.js, TypeScript, Node.js, AWS.', images: [{ url: '/og-image.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', title: 'Navaneeth Reddy | Principal Architect', images: ['/og-image.png'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' } },
  alternates: { canonical: BASE },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `try{var s=localStorage.getItem('theme');if(s==='dark'){document.documentElement.classList.add('dark')}else{document.documentElement.classList.remove('dark');if(!s)localStorage.setItem('theme','light')}}catch(e){}` }} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased pt-16`}>
        <ClerkProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  )
}
