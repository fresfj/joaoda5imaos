import type { Metadata } from 'next';
import { ArrowUpRight, Instagram, MessageCircle, Youtube } from 'lucide-react';
import { PageShell } from '../../components/page-shell';
import { campaign } from '../../lib/campaign';

export const metadata: Metadata = { title: 'Contato | João da 5 Irmãos 1599', description: 'Fale com a campanha de João da 5 Irmãos pelo WhatsApp, Instagram e YouTube.' };

export default function ContactPage() {
  return <PageShell eyebrow="Nossos canais" title="Vamos conversar?" intro="Receba novidades, acompanhe os encontros e mantenha uma linha direta com a campanha.">
    <section className="wrap section standalone-contact"><div className="contact-links">
      {campaign.whatsapp ? <a href={campaign.whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle /><span>Entrar no grupo de WhatsApp</span><ArrowUpRight /></a> : <a href={campaign.instagram} target="_blank" rel="noopener noreferrer"><MessageCircle /><span>Pedir o convite do WhatsApp pelo Instagram</span><ArrowUpRight /></a>}
      <a href={campaign.instagram} target="_blank" rel="noopener noreferrer"><Instagram /><span>Instagram oficial</span><ArrowUpRight /></a>
      <a href={campaign.youtube} target="_blank" rel="noopener noreferrer"><Youtube /><span>Canal no YouTube</span><ArrowUpRight /></a>
    </div></section>
  </PageShell>;
}
