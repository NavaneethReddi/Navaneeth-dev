import { siteConfig } from '@/lib/site'

function safeJson(obj: object): string {
  return JSON.stringify(obj).replace(/</g, '\\u003c')
}

export default function JsonLd() {
  const SITE = siteConfig.url

  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE}/#person`,
    name: siteConfig.fullName,
    alternateName: siteConfig.name,
    url: SITE,
    jobTitle: siteConfig.title,
    description: siteConfig.description,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.location.split(',')[0] || 'Minneapolis',
      addressRegion: 'MN',
      addressCountry: 'US',
    },
    sameAs: [siteConfig.linkedIn, siteConfig.github],
    knowsAbout: [
      'React.js',
      'Next.js',
      'TypeScript',
      'Node.js',
      'Spring Boot',
      'AWS',
      'GraphQL',
      'Tailwind CSS',
      'Microservices Architecture',
      'Enterprise Software Architecture',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Discover Financial Services',
      url: 'https://www.discover.com',
    },
    alumniOf: [
      { '@type': 'EducationalOrganization', name: 'Cumberland University' },
      { '@type': 'EducationalOrganization', name: 'Silicon Valley University' },
    ],
    hasOccupation: {
      '@type': 'Occupation',
      name: siteConfig.title,
      occupationLocation: { '@type': 'City', name: siteConfig.location.split(',')[0] || 'Minneapolis' },
      skills: 'React, Next.js, TypeScript, Node.js, Spring Boot, AWS, GraphQL',
    },
  }

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE}/#website`,
    name: `${siteConfig.fullName} — Portfolio`,
    url: SITE,
    author: { '@id': `${SITE}/#person` },
    description: siteConfig.description,
    inLanguage: 'en-US',
  }

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
      { '@type': 'ListItem', position: 2, name: 'About', item: `${SITE}/about` },
      { '@type': 'ListItem', position: 3, name: 'Experience', item: `${SITE}/experience` },
      { '@type': 'ListItem', position: 4, name: 'Skills', item: `${SITE}/skills` },
      { '@type': 'ListItem', position: 5, name: 'Testimonials', item: `${SITE}/testimonials` },
      { '@type': 'ListItem', position: 6, name: 'Contact', item: `${SITE}/contact` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJson(person) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJson(website) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJson(breadcrumb) }} />
    </>
  )
}
