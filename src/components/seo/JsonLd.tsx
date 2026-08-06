export function JsonLd() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Pranajaya Tech',
    url: 'https://www.pranajayatech.online',
    description: 'PranajayaTech is a premium Software House & SaaS Agency based in Indonesia, specializing in custom web applications, digital transformation for SMEs, and production-ready SaaS boilerplates.',
    logo: 'https://www.pranajayatech.online/favicon.ico',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: 'hello@pranajayatech.online'
    }
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Pranajaya Tech',
    url: 'https://www.pranajayatech.online',
    description: 'Premium Software House & SaaS Agency based in Indonesia.',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
