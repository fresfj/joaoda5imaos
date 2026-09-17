import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { BrandMark } from './brand-mark';
import { campaign } from '../lib/campaign';

export function SiteHeader() {
  return <header className="site-header">
    <Link className="brand" href="/" aria-label="João da 5 Irmãos, início">
      <BrandMark />
      <b className="brand-number">1599</b>
    </Link>
    <nav aria-label="Navegação principal">
      <Link href="/quem-e-joao">Quem é João</Link>
      <Link href="/bairros">Nos bairros</Link>
      <Link href="/acoes">Ações</Link>
      <Link href="/instagram">Instagram</Link>
    </nav>
    <a className="button small" href={campaign.whatsapp} target="_blank" rel="noopener noreferrer" title="Entrar no grupo de WhatsApp">
      <MessageCircle size={18} /> <span>Grupo de WhatsApp</span>
    </a>
  </header>;
}
