import type { ReactNode } from 'react';
import { SiteHeader } from './site-header';
import { SiteFooter } from './site-footer';
import { ScrollEffects } from './scroll-effects';

export function PageShell({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro: string; children: ReactNode }) {
  return <>
    <ScrollEffects />
    <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
    <SiteHeader />
    <main id="conteudo">
      <header className="page-hero"><div className="wrap"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{intro}</p></div></header>
      {children}
    </main>
    <SiteFooter />
  </>;
}
