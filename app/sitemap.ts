import type { MetadataRoute } from 'next';
import { neighborhoods } from '../lib/actions';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://joaoda5irmaos.com.br';
  const routes = ['', '/quem-e-joao', '/bairros', '/acoes', '/instagram', '/contato', '/privacidade'];
  return [
    ...routes.map((route) => ({ url: `${baseUrl}${route}`, lastModified: new Date(), changeFrequency: route === '' ? 'weekly' as const : 'monthly' as const, priority: route === '' ? 1 : .8 })),
    ...neighborhoods.map(({ slug }) => ({ url: `${baseUrl}/bairros/${slug}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: .7 })),
  ];
}
