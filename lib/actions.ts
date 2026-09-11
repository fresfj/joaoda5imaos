export type ActionMedia = {
  slug: string;
  title: string;
  neighborhood: string;
  description: string;
  poster: string;
  video: string;
};

export const actionMedia: ActionMedia[] = [
  {
    slug: 'unidade-saude-alvorada-uberaba',
    title: 'Visita à Unidade de Saúde Alvorada',
    neighborhood: 'Uberaba',
    description: 'João da 5 Irmãos em visita à Unidade de Saúde Alvorada, no bairro Uberaba, acompanhando de perto o atendimento à comunidade.',
    poster: '/acoes/unidade-saude-alvorada-uberaba.png',
    video: '/acoes/unidade-saude-alvorada-uberaba.mp4',
  },
  {
    slug: 'entrega-obra-uberaba',
    title: 'Acompanhamento de obra no Uberaba',
    neighborhood: 'Uberaba',
    description: 'Registro do acompanhamento da entrega de mais uma obra no Uberaba e da conversa direta com moradores do bairro.',
    poster: '/acoes/entrega-obra-uberaba.png',
    video: '/acoes/entrega-obra-uberaba.mp4',
  },
  {
    slug: 'horta-comunitaria-uberaba',
    title: 'Trabalho na Horta do Uberaba',
    neighborhood: 'Uberaba',
    description: 'Visita à Horta Comunitária do Uberaba, iniciativa ligada à produção de alimentos, convivência e participação comunitária.',
    poster: '/acoes/horta-comunitaria-uberaba.png',
    video: '/acoes/horta-comunitaria-uberaba.mp4',
  },
  {
    slug: 'reforma-unidade-lotiguacu',
    title: 'Reforma da Unidade de Saúde Lotiguaçu',
    neighborhood: 'Uberaba',
    description: 'João acompanha as informações sobre a reforma da Unidade de Saúde Lotiguaçu e escuta profissionais que atuam no atendimento local.',
    poster: '/acoes/reforma-unidade-lotiguacu.png',
    video: '/acoes/reforma-unidade-lotiguacu.mp4',
  },
  {
    slug: 'festa-igreja-sao-jose-operario',
    title: 'Festa da Igreja São José Operário',
    neighborhood: 'Uberaba',
    description: 'Participação na festa da Igreja São José Operário, encontrando famílias, lideranças e moradores do Uberaba.',
    poster: '/acoes/festa-igreja-sao-jose-operario.png',
    video: '/acoes/festa-igreja-sao-jose-operario.mp4',
  },
];

export const neighborhoods = [
  {
    slug: 'uberaba',
    name: 'Uberaba',
    description: 'Acompanhamento de unidades de saúde, obras, horta comunitária, encontros com moradores e participação em atividades locais.',
  },
  {
    slug: 'cajuru',
    name: 'Cajuru',
    description: 'Região ligada à história da família 5 Irmãos e à trajetória comunitária de João em Curitiba.',
  },
  {
    slug: 'boqueirao',
    name: 'Boqueirão',
    description: 'Presença comunitária, escuta de moradores e diálogo sobre as necessidades da região.',
  },
  {
    slug: 'pinheirinho',
    name: 'Pinheirinho',
    description: 'Contato com famílias trabalhadoras, lideranças locais e iniciativas comunitárias.',
  },
  {
    slug: 'capao-da-imbuia',
    name: 'Capão da Imbuia',
    description: 'Ações sociais, esporte e aproximação com as comunidades da região.',
  },
  {
    slug: 'taruma',
    name: 'Tarumã',
    description: 'Diálogo sobre espaços públicos, vida nos bairros e participação da comunidade.',
  },
] as const;
