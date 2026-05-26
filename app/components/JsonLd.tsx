const SITE = 'https://navaneeth-dev-alpha.vercel.app'

function safeJson(obj: object): string {
  return JSON.stringify(obj).replace(/</g, '\\u003c')
}

export default function JsonLd() {
  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE}/#person`,
    name: 'Navaneeth Reddy Pinnapureddy',
    alternateName: 'Navaneeth Reddy',
    url: SITE,
    jobTitle: 'Principal Architect',
    description:
      'Senior Full-Stack Developer & Principal Architect with 12+ years designing scalable, high-performance web applications for Fortune 500 financial institutions.',
    email: 'Navaneethr.work9@gmail.com',
    telephone: '+1-314-793-5365',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Minneapolis',
      addressRegion: 'MN',
      addressCountry: 'US',
    },
    sameAs: [
      'https://www.linkedin.com/in/navaneeth-reddy-pinnapureddy/',
      'https://github.com/NavaneethReddi',
    ],
    knowsAbout: [
      'React.js', 'Next.js', 'TypeScript', 'Node.js', 'Spring Boot',
      'AWS', 'GraphQL', 'Tailwind CSS', 'Microservices Architecture',
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
      name: 'Principal Architect',
      occupationLocation: { '@type': 'City', name: 'Minneapolis' },
      skills: 'React, Next.js, TypeScript, Node.js, Spring Boot, AWS, GraphQL',
    },
  }

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE}/#website`,
    name: 'Navaneeth Reddy — Portfolio',
    url: SITE,
    author: { '@id': `${SITE}/#person` },
    description:
      'Portfolio of Navaneeth Reddy Pinnapureddy, Principal Architect and Full-Stack Developer.',
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
