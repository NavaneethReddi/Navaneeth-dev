import { siteConfig } from '@/lib/site'

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: siteConfig.fullName,
  jobTitle: siteConfig.title,
  description: siteConfig.description,
  url: siteConfig.url,
  email: `mailto:${siteConfig.email}`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Minneapolis',
    addressRegion: 'MN',
    addressCountry: 'US',
  },
  sameAs: [siteConfig.linkedIn, siteConfig.github],
  knowsAbout: [
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Spring Boot',
    'AWS',
    'Enterprise Architecture',
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: `${siteConfig.name} — Portfolio`,
  url: siteConfig.url,
  description: siteConfig.description,
  inLanguage: 'en-US',
  publisher: {
    '@type': 'Person',
    name: siteConfig.fullName,
  },
}

const professionalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: siteConfig.fullName,
  description: siteConfig.description,
  url: siteConfig.url,
  areaServed: 'Minneapolis, MN',
  serviceType: [
    'Full-Stack Development',
    'Frontend Architecture',
    'Technical Leadership',
  ],
}

export function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
    </>
  )
}
