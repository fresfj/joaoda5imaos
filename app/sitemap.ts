import type { MetadataRoute } from 'next';
import { neighborhoods } from '../lib/actions';
import { campaign } from '../lib/campaign';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = campaign.siteUrl;
  const routes = ['', '/quem-e-joao', '/bairros', '/acoes', '/instagram', '/contato', '/privacidade'];
  return [
    ...routes.map((route) => ({ url: `${baseUrl}${route || '/'}`, changeFrequency: route === '' ? 'weekly' as const : 'monthly' as const, priority: route === '' ? 1 : .8 })),
    ...neighborhoods.map(({ slug }) => ({ url: `${baseUrl}/bairros/${slug}`, changeFrequency: 'monthly' as const, priority: .7 })),
  ];
}
