import type { Metadata } from 'next';
import { ActionGallery } from '../../components/action-gallery';
import { PageShell } from '../../components/page-shell';
import { actionMedia } from '../../lib/actions';

export const metadata: Metadata = {
  alternates: { canonical: '/acoes' },
  title: 'Ações e atividades | João da 5 Irmãos 1599',
  description: 'Vídeos e fotos das ações de João da 5 Irmãos nos bairros de Curitiba: saúde, obras, horta comunitária e encontros com moradores.',
};

export default function ActionsPage() {
  return <PageShell eyebrow="Ações e atividades" title="Vem ver o trabalho de João" intro="Registros em vídeo e foto da presença de João da 5 Irmãos junto às comunidades de Curitiba.">
    <section className="wrap section"><ActionGallery items={actionMedia} /></section>
  </PageShell>;
}
