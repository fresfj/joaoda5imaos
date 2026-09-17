import { NewsletterForm } from './newsletter-form';

export function NewsletterSection() {
  return <section className="newsletter-section"><div className="wrap section newsletter-inner">
    <div><p className="eyebrow">Fique por perto</p><h2>Receba as notícias do João da 5 Irmãos</h2><p>Cadastre-se e acompanhe em primeira mão as novidades da campanha e as ações nos bairros da sua cidade.</p></div>
    <NewsletterForm />
  </div></section>;
}
