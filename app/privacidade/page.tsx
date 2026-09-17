import Link from 'next/link';
import { campaign } from '../../lib/campaign';

export const metadata = { title: 'Política de privacidade | João da 5 Irmãos', description: 'Saiba como a campanha trata seus dados de cadastro, comunicações e navegação.', alternates: { canonical: '/privacidade' } };

export default function Privacy() {
  return <main className="privacy wrap">
    <Link className="text-link" href="/">Voltar ao site</Link><h1>Política de privacidade</h1><p>Atualizada em 17 de setembro de 2026.</p>
    <h2>Responsável pelo site</h2><p>Campanha de João Carlos Rodrigues, João da 5 Irmãos, candidato a deputado federal pelo Paraná, MDB. CNPJ: {campaign.cnpj}.</p>
    <h2>Cadastro e comunicações</h2><p>O formulário solicita nome, e-mail, celular, estado e cidade para enviar notícias da campanha e informações sobre ações nos bairros. O envio depende do seu consentimento, registrado com a data e a versão desta política. O cadastro é opcional e você pode navegar pelo site sem se cadastrar.</p>
    <h2>Recebimento e armazenamento</h2><p>O cadastro é enviado pelo servidor do site ao SheetDB, que registra os dados em uma planilha Google da campanha. Esses serviços recebem os campos informados e o registro de consentimento para viabilizar as comunicações autorizadas. A lista de contatos não deve ser publicada e seu acesso deve ficar restrito aos responsáveis pela campanha. Se o envio falhar, o site informa essa situação sem confirmar o recebimento.</p>
    <h2>Revogação e solicitações</h2><p>Você pode retirar o consentimento, solicitar informações, correção ou exclusão dos seus dados pelo <a className="text-link" href={campaign.instagram} target="_blank" rel="noopener noreferrer">perfil oficial de João no Instagram</a>. Identifique a mensagem como uma solicitação de privacidade. A campanha deve interromper as comunicações solicitadas e tratar os dados apenas pelo tempo necessário à finalidade informada e às obrigações aplicáveis.</p>
    <h2>Dados de navegação</h2><p>O provedor de hospedagem pode processar dados técnicos de acesso, como endereço IP e informações do navegador, para entregar as páginas, manter a segurança e diagnosticar falhas.</p>
    <h2>Google Analytics</h2><p>O site utiliza Google Analytics para medir visitas e o desempenho das páginas. O Google pode receber dados técnicos de navegação e usar cookies ou identificadores conforme sua <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">política de privacidade</a>. Os campos do formulário não são enviados pelo site ao Google Analytics.</p>
    <h2>Conteúdo incorporado</h2><p>O site incorpora conteúdo público do Instagram. Ao carregar essa seção, a Meta pode receber dados técnicos, usar cookies e aplicar sua própria política de privacidade.</p>
    <h2>Canais externos e WhatsApp</h2><p>Instagram, YouTube e WhatsApp são serviços externos, sujeitos às respectivas políticas de privacidade. Ao entrar no grupo de WhatsApp, seu número e informações de perfil podem ficar visíveis aos demais participantes, conforme suas configurações. Entrar no grupo é uma escolha separada do cadastro de notícias.</p>
  </main>;
}
