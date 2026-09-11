import type { Metadata } from 'next';
import { ArrowUpRight, Instagram } from 'lucide-react';
import { InstagramFeed } from '../../components/instagram-feed';
import { PageShell } from '../../components/page-shell';
import { campaign } from '../../lib/campaign';
import { getInstagramPosts } from '../../lib/instagram';

export const metadata: Metadata = {
  title: 'Instagram e redes sociais | João da 5 Irmãos',
  description: 'Veja as publicações mais recentes do Instagram oficial de João da 5 Irmãos e acompanhe suas ações em Curitiba.',
};

export default async function InstagramPage() {
  const posts = await getInstagramPosts();
  return <PageShell eyebrow="Instagram e redes sociais" title="Acompanhe @joaoda5irmaos" intro="Publicações recentes, agendas, ações nos bairros e novidades da campanha.">
    <section className="wrap section"><InstagramFeed posts={posts} /><a className="button section-cta" href={campaign.instagram} target="_blank" rel="noopener noreferrer"><Instagram size={19} /> Abrir Instagram <ArrowUpRight size={18} /></a></section>
  </PageShell>;
}
