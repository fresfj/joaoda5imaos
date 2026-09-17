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
- WhatsApp: configure `NEXT_PUBLIC_WHATSAPP_GROUP_URL` com o convite oficial.
- SEO: configure `NEXT_PUBLIC_SITE_URL` com o domínio final antes do deploy.

Consulte `docs/ARCHITECTURE.md`, `docs/CONTENT.md` e `docs/DESIGN_SYSTEM.md` antes de alterar conteúdo ou identidade visual.
