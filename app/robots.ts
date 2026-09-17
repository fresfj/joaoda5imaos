import type { MetadataRoute } from 'next';
import { campaign } from '../lib/campaign';

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: '*', allow: '/', disallow: '/api/' }, sitemap: `${campaign.siteUrl}/sitemap.xml` };
}
