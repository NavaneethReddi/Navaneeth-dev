export default function JsonLd() {
  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Navaneeth Reddy Pinnapureddy',
    alternateName: 'Navaneeth Reddy',
    url: 'https://clerk-nextjs-phi.vercel.app',
    jobTitle: 'Principal Architect',
    description:
      'Senior Full-Stack Developer and Principal Architect with 12+ years of experience building enterprise web applications.',
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
      'AWS', 'GraphQL', 'Tailwind CSS', 'Microservices', 'Kubernetes',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Discover Financial Services',
      url: 'https://www.discover.com',
    },
    alumniOf: [
      { '@type': 'EducationalOrganization', name: 'Cumberland University' },
      { '@type': 'EducationalOrganization', name: 'Silicon Valley University' },
      { '@type': 'EducationalOrganization', name: 'JNTUH' },
    ],
  }

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Navaneeth Reddy — Portfolio',
    url: 'https://clerk-nextjs-phi.vercel.app',
    author: { '@type': 'Person', name: 'Navaneeth Reddy Pinnapureddy' },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  )
}
