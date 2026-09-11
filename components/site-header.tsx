import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { BrandMark } from './brand-mark';

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
    <Link className="button small" href="/contato" title="Vamos conversar">
      <MessageCircle size={18} /> <span>Vamos conversar</span>
    </Link>
  </header>;
}
