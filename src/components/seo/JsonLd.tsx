export function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Pranajaya Tech",
    alternateName: ["PJTech", "PranajayaTech Software House"],
    url: "https://www.pranajayatech.online",
    description:
      "Pranajaya Tech adalah Software House & SaaS Agency asal Sumedang, Jawa Barat, Indonesia. Spesialisasi aplikasi web custom (Next.js), sistem POS, sistem rekam medis elektronik (RME Juara 1 ASN), dan otomatisasi AI otonom.",
    logo: "https://www.pranajayatech.online/favicon.ico",
    founder: {
      "@type": "Person",
      name: "Pranata Pramudya",
      jobTitle: "Founder & Lead System Architect",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sumedang",
      addressRegion: "Jawa Barat",
      addressCountry: "ID",
    },
    sameAs: [
      "https://www.tiktok.com/@pranajayatech",
      "https://www.youtube.com/@pranajayatech",
      "https://www.instagram.com/@pranajayatech",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      telephone: "+62-857-2325-6427",
      email: "hello@pranajayatech.online",
      availableLanguage: ["Indonesian", "English"],
    },
    priceRange: "$$",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Pranajaya Tech",
    url: "https://www.pranajayatech.online",
    description: "Software House & Custom SaaS Engineering Agency Indonesia.",
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
