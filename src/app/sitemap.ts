import { MetadataRoute } from 'next'
 
const url = process.env.SITE_URL || 'https://jeanlima.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: url,
      lastModified: new Date(),
      alternates: {
        languages: {
          es: `${url}/es`,
          pt: `${url}/pt`,
        },
      },
    }
  ]
}