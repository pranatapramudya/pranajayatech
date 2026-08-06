import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.pranajayatech.online';

  return [
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          'en': `${baseUrl}/en`,
          'id': `${baseUrl}/id`,
        },
      },
    },
    {
      url: `${baseUrl}/id`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          'en': `${baseUrl}/en`,
          'id': `${baseUrl}/id`,
        },
      },
    },
  ];
}
