export const campaign = {
  name: 'João da 5 Irmãos',
  legalName: 'João Carlos Rodrigues',
  number: '1599',
  cnpj: '68.455.068/0001-07',
  instagram: 'https://www.instagram.com/joaoda5irmaos/',
  youtube: 'https://www.youtube.com/@Joaoda5irmaos',
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_GROUP_URL || 'https://chat.whatsapp.com/Fs78ZbCVEtsG72PbQbAvIo',
  siteUrl: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://joaoda5irmaos.com.br').origin,
};
