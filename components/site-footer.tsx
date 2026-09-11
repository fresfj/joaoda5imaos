import Image from 'next/image';
import Link from 'next/link';
import mdb from '../imgs/mdb_azul.png';
import { campaign } from '../lib/campaign';
import { BrandMark } from './brand-mark';

export function SiteFooter() {
  return <footer className="site-footer"><div className="wrap">
    <div className="footer-brand">
      <BrandMark />
      <b className="footer-number">1599</b>
      <span className="footer-office">Deputado Federal<br />Paraná</span>
      <Image className="mdb-logo" src={mdb} alt="MDB, Movimento Democrático Brasileiro" width={100} sizes="100px" />
    </div>
    <div className="footer-nav" aria-label="Links do rodapé">
      <Link href="/quem-e-joao">Quem é João</Link>
      <Link href="/bairros">Bairros</Link>
      <Link href="/acoes">Ações e atividades</Link>
      <Link href="/instagram">Instagram</Link>
      <Link href="/contato">Contato</Link>
    </div>
    <div className="legal">
      <p>ELEIÇÃO 2026 JOÃO CARLOS RODRIGUES DEPUTADO FEDERAL</p>
      <p>MOVIMENTO DEMOCRÁTICO BRASILEIRO (MDB) | PROPAGANDA ELEITORAL | CNPJ: {campaign.cnpj}</p>
      <p>Conteúdo de campanha eleitoral. Doações somente de pessoa física, nos termos da Lei 9.504/97 e da Resolução TSE 23.607/2019.</p>
      <Link href="/privacidade">Política de privacidade</Link>
    </div>
  </div></footer>;
}
