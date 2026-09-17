# joaoda5imaos

Site de campanha de João da 5 Irmãos, vereador de Curitiba licenciado e candidato a deputado federal pelo Paraná, MDB 1599.

## Desenvolvimento

```bash
npm ci
cp .env.example .env.local
npm run dev
```

Abra `http://localhost:3000`. Para validar a versão de produção:

```bash
npm run lint
npm run typecheck
npm run build
```

## Integrações

- Instagram: configure `INSTAGRAM_ACCESS_TOKEN` para buscar até seis publicações recentes. `INSTAGRAM_POST_URLS` aceita URLs públicas separadas por vírgula como fallback editorial.
- WhatsApp: o convite fornecido já está configurado. `NEXT_PUBLIC_WHATSAPP_GROUP_URL` permite substituí-lo.
- SEO: configure `NEXT_PUBLIC_SITE_URL` com o domínio final antes do deploy.
- Cadastro: integrado ao SheetDB fornecido. `SHEETDB_API_URL` pode substituir o endpoint e `SHEETDB_AUTHORIZATION` configura autenticação somente no servidor. Prepare as colunas conforme `docs/CONTENT.md` e restrinja a API a Create (POST).
- Google: siga `docs/INDEXACAO.md` para verificar o domínio e enviar o sitemap ao Search Console.

Consulte `docs/ARCHITECTURE.md`, `docs/CONTENT.md` e `docs/DESIGN_SYSTEM.md` antes de alterar conteúdo ou identidade visual.
