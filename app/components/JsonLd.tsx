export default function JsonLd() {
  const person = {
    '@context': 'https://navaneeth-dev-alpha.vercel.app', '@type': 'Person',
    name: 'Navaneeth Reddy Pinnapureddy', alternateName: 'Navaneeth Reddy',
    url: 'https://navaneeth-dev-alpha.vercel.app', jobTitle: 'Principal Architect',
    email: 'Navaneethr.work9@gmail.com', telephone: '+1-314-793-5365',
    address: { '@type': 'PostalAddress', addressLocality: 'Minneapolis', addressRegion: 'MN', addressCountry: 'US' },
    sameAs: ['https://www.linkedin.com/in/navaneeth-reddy-pinnapureddy/', 'https://github.com/NavaneethReddi'],
    knowsAbout: ['React.js','Next.js','TypeScript','Node.js','Spring Boot','AWS','GraphQL','Tailwind CSS'],
    worksFor: { '@type': 'Organization', name: 'Discover Financial Services' },
    alumniOf: [{ '@type': 'EducationalOrganization', name: 'Cumberland University' }, { '@type': 'EducationalOrganization', name: 'Silicon Valley University' }],
  }
  const website = { '@context': 'https://navaneeth-dev-alpha.vercel.app', '@type': 'WebSite', name: 'Navaneeth Reddy — Portfolio', url: 'https://navaneeth-dev-alpha.vercel.app' }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
    </>
  )
}
