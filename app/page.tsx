import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight, HeartHandshake, MessageCircle, Instagram, Youtube, MapPin, Store, Trophy } from 'lucide-react';
import portrait from '../imgs/joao-campanha.png';
import history from '../imgs/joao-retrato.jpg';
import neighborhood from '../imgs/assembleianosbairros.jpeg';
import { ScrollEffects } from '../components/scroll-effects';
import { SiteHeader } from '../components/site-header';
import { SiteFooter } from '../components/site-footer';
import { ActionGallery } from '../components/action-gallery';
import { InstagramFeed } from '../components/instagram-feed';
import { campaign } from '../lib/campaign';
import { actionMedia } from '../lib/actions';
import { getInstagramPosts } from '../lib/instagram';
import { NewsletterSection } from '../components/newsletter-section';

export const metadata = { alternates: { canonical: '/' } };

const identityItems = [
  { text: 'FÉ. FAMÍLIA. TRABALHO.' },
  { text: '1599', bold: true },
  { text: 'JOÃO DA 5 IRMÃOS' },
  { text: 'PARANÁ', bold: true },
  { text: 'MDB' },
];

function IdentityGroup({ hidden = false }: { hidden?: boolean }) {
  return <div className="identity-group" aria-hidden={hidden || undefined}>
    {identityItems.map((item) => <span className={`identity-item ${item.bold ? 'is-bold' : ''}`} key={item.text}>
      {item.text}<span className="identity-dot" aria-hidden="true" />
    </span>)}
  </div>;
}

export default async function Home() {
  const instagramPosts = await getInstagramPosts();

  return <>
    <ScrollEffects />
    <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
    <SiteHeader />
    <main id="conteudo">
      <section className="hero">
        <div className="hero-photo"><Image src={portrait} alt="João da 5 Irmãos sorrindo" fill preload sizes="(max-width: 700px) 100vw, 65vw" /></div>
        <div className="hero-wash" />
        <div className="hero-content wrap">
          <p className="eyebrow">Eleições 2026 · Candidato a deputado federal · Paraná</p>
          <h1>JOÃO<span>DA <b>5 IRMÃOS</b></span></h1>
          <div className="ballot" aria-label="Número 1599">1599</div>
          <p className="hero-caption">Candidato a deputado federal <span>Paraná · MDB</span></p>
          <p className="hero-copy">Uma história que começa no bairro.<br />Um compromisso com o Paraná.</p>
          <Link className="button" href="/contato"><MessageCircle size={21} /> Fale com a campanha <ArrowUpRight size={20} /></Link>
          <Link className="discover" href="/quem-e-joao">Conheça a história de João <ArrowDown size={18} /></Link>
        </div>
      </section>
      <div className="identity-band" aria-label="Fé, Família, Trabalho. 1599. João da 5 Irmãos. Paraná. MDB.">
        <div className="identity-track"><IdentityGroup /><IdentityGroup hidden /></div>
      </div>
      <section className="section wrap history">
        <div className="history-photo" data-reveal><Image src={history} alt="Retrato de João da 5 Irmãos" sizes="(max-width: 700px) 100vw, 42vw"/><span>De Curitiba, com a nossa gente.</span></div>
        <div data-reveal><p className="eyebrow">Quem é João</p><h2>Uma vida perto<br />das pessoas.</h2><p>João Carlos Rodrigues é curitibano, comerciante e vereador de Curitiba licenciado. O nome 5 Irmãos vem do comércio da família, uma história iniciada em 1986.</p><p>Entre o balcão, a comunidade e a Câmara Municipal, sua trajetória se encontra com o cotidiano de quem vive e trabalha nos bairros.</p><p>Em 2026, João pediu licença do cargo de vereador para concorrer a deputado federal pelo Paraná, pelo Movimento Democrático Brasileiro, o MDB.</p><Link className="text-link" href="/quem-e-joao">Conheça a trajetória <ArrowUpRight size={18} /></Link></div>
      </section>
      <section className="work-section"><div className="wrap section">
        <div className="section-heading" data-reveal><div><p className="eyebrow">Presença nos bairros</p><h2>Vem ver o<br />nosso trabalho.</h2></div><p>O trabalho comunitário faz parte da trajetória de João em Curitiba, com iniciativas sociais e encontros com moradores.</p></div>
        <div className="work-grid">
          <article data-reveal><HeartHandshake size={32} /><h3>Verdura Solidária</h3><p>Mobilização comunitária em torno da alimentação e do cuidado com as famílias.</p></article>
          <article data-reveal><Trophy size={32} /><h3>Circuito Social Skate</h3><p>Encontros que aproximam esporte, juventude e comunidade.</p></article>
          <article data-reveal><Store size={32} /><h3>Comércio e comunidade</h3><p>A experiência do comércio familiar presente na relação com os bairros.</p></article>
        </div>
        <div className="neighborhood" data-reveal><div className="neighborhood-photo"><Image src={neighborhood} alt="Registro de atividade de João nos bairros" fill sizes="(max-width: 700px) 100vw, 45vw" /></div><div><MapPin size={26} /><h3>Conversa de perto.<br />Escuta de verdade.</h3><p>Conheça as ações no Uberaba, Cajuru, Boqueirão, Pinheirinho, Capão da Imbuia e Tarumã.</p><Link className="text-link" href="/bairros">Ver trabalho nos bairros <ArrowUpRight size={18} /></Link></div></div>
      </div></section>
      <section className="actions-section"><div className="wrap section">
        <div className="section-heading" data-reveal><div><p className="eyebrow">Ações e atividades</p><h2>João presente<br />nos bairros.</h2></div><p>Fotos e vídeos de visitas, obras, saúde e encontros com a comunidade de Curitiba.</p></div>
        <ActionGallery items={actionMedia.slice(0, 3)} />
        <Link className="button section-cta" href="/acoes">Ver todas as ações <ArrowUpRight size={18} /></Link>
      </div></section>
      <section className="instagram-section"><div className="wrap section">
        <div className="section-heading" data-reveal><div><p className="eyebrow">Instagram e redes sociais</p><h2>Conteúdo<br />mais recente.</h2></div><p>Acompanhe as publicações de <strong>@joaoda5irmaos</strong>, com agendas, ações nos bairros e novidades da campanha.</p></div>
        <InstagramFeed posts={instagramPosts} />
        <Link className="text-link instagram-profile-link" href={campaign.instagram} target="_blank" rel="noopener noreferrer"><Instagram size={20} /> Abrir perfil no Instagram <ArrowUpRight size={18} /></Link>
      </div></section>
      <section className="contact-section"><div className="wrap contact-inner" data-reveal><div><p className="eyebrow">Nossos canais</p><h2>Vamos<br />conversar?</h2><p>Novidades, encontros e uma linha direta com a campanha de João da 5 Irmãos.</p></div><div className="contact-links">
        <a href={campaign.whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle /><span>Entrar no grupo de WhatsApp</span><ArrowUpRight /></a>
        <a href={campaign.instagram} target="_blank" rel="noopener noreferrer"><Instagram /><span>Instagram</span><ArrowUpRight /></a><a href={campaign.youtube} target="_blank" rel="noopener noreferrer"><Youtube /><span>YouTube</span><ArrowUpRight /></a>
      </div></div></section>
      <NewsletterSection />
    </main>
    <SiteFooter />
  </>;
}
