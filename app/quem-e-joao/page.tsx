import type { Metadata } from 'next';
import Image from 'next/image';
import portrait from '../../imgs/joao-retrato.jpg';
import { PageShell } from '../../components/page-shell';

export const metadata: Metadata = {
  title: 'Quem é João da 5 Irmãos | Trajetória',
  description: 'Conheça a trajetória de João Carlos Rodrigues, o João da 5 Irmãos: comerciante, vereador de Curitiba licenciado e candidato a deputado federal pelo Paraná.',
};

export default function AboutPage() {
  return <PageShell eyebrow="Quem é João" title="Uma trajetória perto das pessoas" intro="Da história da família 5 Irmãos ao trabalho comunitário e à Câmara Municipal de Curitiba.">
    <section className="wrap section editorial-grid"><Image src={portrait} alt="João da 5 Irmãos" sizes="(max-width: 700px) 100vw, 45vw" priority /><div><h2>Curitibano, comerciante e vereador licenciado</h2><p>João Carlos Rodrigues nasceu em Curitiba e ficou conhecido como João da 5 Irmãos por causa da tradição comercial de sua família, iniciada em 1986.</p><p>Sua trajetória pública se desenvolveu ao lado de associações de moradores, iniciativas sociais, esporte e ações ligadas à vida cotidiana nos bairros.</p><p>João participou da 18ª e da 19ª legislaturas da Câmara Municipal de Curitiba. Para disputar as eleições de 2026, pediu licença do cargo de vereador e concorre a deputado federal pelo Paraná pelo Movimento Democrático Brasileiro, o MDB, com o número 1599.</p></div></section>
  </PageShell>;
}
