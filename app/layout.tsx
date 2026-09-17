import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Script from 'next/script';
import './globals.css';

const montserrat = localFont({
  src: [
    { path: '../node_modules/@fontsource-variable/montserrat/files/montserrat-latin-wght-normal.woff2', weight: '100 900', style: 'normal' },
    { path: '../node_modules/@fontsource-variable/montserrat/files/montserrat-latin-wght-italic.woff2', weight: '100 900', style: 'italic' },
  ],
  variable: '--font-montserrat',
  display: 'swap',
});
const inter = localFont({
  src: '../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2',
  weight: '100 900',
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://joaoda5irmaos.com.br'),
  title: 'João da 5 Irmãos 1599 | Deputado Federal • Paraná',
  description: 'Conheça João da 5 Irmãos, vereador de Curitiba licenciado e candidato a deputado federal pelo Paraná, MDB 1599.',
  openGraph: { title: 'João da 5 Irmãos • 1599', description: 'Vereador de Curitiba licenciado e candidato a deputado federal pelo Paraná. Acompanhe a campanha.', locale: 'pt_BR', type: 'website' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR" className={`${montserrat.variable} ${inter.variable}`} suppressHydrationWarning><body>
    {children}
    <Script src="https://www.googletagmanager.com/gtag/js?id=G-BGTZ6ZYTJE" strategy="afterInteractive" />
    <Script id="google-analytics" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-BGTZ6ZYTJE');
      `}
    </Script>
  </body></html>;
}
