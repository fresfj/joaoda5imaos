import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { PageShell } from '../../../components/page-shell';
import { ActionGallery } from '../../../components/action-gallery';
import { actionMedia, neighborhoods } from '../../../lib/actions';

type Props = { params: Promise<{ bairro: string }> };

export function generateStaticParams() {
  return neighborhoods.map(({ slug }) => ({ bairro: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { bairro } = await params;
  const neighborhood = neighborhoods.find(({ slug }) => slug === bairro);
  if (!neighborhood) return {};
  return {
    title: `João da 5 Irmãos em ${neighborhood.name} | Curitiba`,
    description: `${neighborhood.description} Conheça o trabalho de João da 5 Irmãos em ${neighborhood.name}, Curitiba.`,
    alternates: { canonical: `/bairros/${neighborhood.slug}` },
  };
}

export default async function NeighborhoodPage({ params }: Props) {
  const { bairro } = await params;
  const neighborhood = neighborhoods.find(({ slug }) => slug === bairro);
  if (!neighborhood) notFound();
  const media = actionMedia.filter(({ neighborhood: name }) => name === neighborhood.name);

  return <PageShell eyebrow="Curitiba e seus bairros" title={`João da 5 Irmãos em ${neighborhood.name}`} intro={neighborhood.description}>
    <section className="wrap section neighborhood-detail">
      <Link className="text-link" href="/bairros"><ArrowLeft size={18} /> Voltar para todos os bairros</Link>
      <div className="detail-copy"><h2>Presença, escuta e acompanhamento</h2><p>O trabalho de João parte do contato com quem vive o bairro. As visitas registram conversas com moradores, profissionais, lideranças e iniciativas comunitárias, permitindo acompanhar de perto as necessidades locais.</p></div>
      {media.length ? <ActionGallery items={media} /> : <div className="media-callout"><h2>Novos registros em breve</h2><p>A galeria será atualizada com fotos e vídeos das ações de João em {neighborhood.name}.</p><Link className="button" href="/instagram">Acompanhar no Instagram <ArrowUpRight size={18} /></Link></div>}
    </section>
  </PageShell>;
}
