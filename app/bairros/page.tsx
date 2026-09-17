import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { PageShell } from '../../components/page-shell';
import { actionMedia, neighborhoods } from '../../lib/actions';

export const metadata: Metadata = {
  title: 'Trabalho nos bairros de Curitiba | João da 5 Irmãos',
  description: 'Conheça a presença e as ações de João da 5 Irmãos no Uberaba, Cajuru, Boqueirão, Pinheirinho, Capão da Imbuia e Tarumã, em Curitiba.',
};

export default function NeighborhoodsPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'João da 5 Irmãos',
    alternateName: 'João Carlos Rodrigues',
    jobTitle: 'Vereador de Curitiba licenciado e candidato a deputado federal pelo Paraná',
    sameAs: ['https://www.instagram.com/joaoda5irmaos/', 'https://www.youtube.com/@Joaoda5irmaos'],
    areaServed: neighborhoods.map(({ name }) => ({ '@type': 'Place', name: `${name}, Curitiba, Paraná` })),
  };

  return <PageShell eyebrow="Presença em Curitiba" title="Trabalho nos bairros" intro="João da 5 Irmãos mantém diálogo com moradores, lideranças e iniciativas comunitárias em diferentes regiões de Curitiba.">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
    <section className="wrap section neighborhood-index">
      <div className="neighborhood-list">
        {neighborhoods.map((neighborhood) => <article key={neighborhood.slug} data-reveal><MapPin /><div><h2>{neighborhood.name}</h2><p>{neighborhood.description}</p><Link className="text-link" href={`/bairros/${neighborhood.slug}`}>Conhecer ações em {neighborhood.name} <ArrowUpRight size={18} /></Link></div></article>)}
      </div>
      <aside><span>{actionMedia.length}</span><strong>registros em foto e vídeo</strong><p>Veja a galeria de visitas, obras, saúde e encontros comunitários.</p><Link className="button" href="/acoes">Abrir galeria</Link></aside>
    </section>
  </PageShell>;
}
