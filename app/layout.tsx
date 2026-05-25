import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from './providers/ThemeProvider'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Navaneeth Reddy — Principal Architect',
  description: 'Senior Full-Stack Developer & Principal Architect with 12+ years of enterprise experience.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/*
          Runs synchronously before React hydrates — prevents any flash of dark mode.
          Reads localStorage; if nothing saved yet, defaults to light (no .dark class).
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var stored = localStorage.getItem('theme');
                if (stored === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                  if (!stored) localStorage.setItem('theme', 'light');
                }
              } catch(e) {}
            `,
          }}
        />
        {/* SEO Meta Tags */}
        <meta name="description" content="Senior Full-Stack Developer & Principal Architect with 12+ years of enterprise experience." />
        <meta property="og:title" content="Navaneeth Reddy — Principal Architect" />
        <meta property="og:description" content="Senior Full-Stack Developer & Principal Architect with 12+ years of enterprise experience." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/" />
        <meta property="og:image" content="https://yourdomain.com/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Navaneeth Reddy — Principal Architect" />
        <meta name="twitter:description" content="Senior Full-Stack Developer & Principal Architect with 12+ years of enterprise experience." />
        <meta name="twitter:image" content="https://yourdomain.com/og-image.png" />
        <link rel="canonical" href="https://yourdomain.com/" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      </head>
      {/* pt-16 offsets the fixed nav (h-16 = 64px) so no content hides behind it */}
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased pt-16`}>
        <ClerkProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </ClerkProvider>
        <Analytics />
      </body>
    </html>
  )
}
