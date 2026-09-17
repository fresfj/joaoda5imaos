# Indexação no Google

1. Publique no domínio definitivo com HTTPS. Configure `NEXT_PUBLIC_SITE_URL` com a origem correta (padrão: `https://joaoda5irmaos.com.br`). Redirecione versões alternativas para o domínio definitivo na hospedagem.
2. Adicione uma propriedade em https://search.google.com/search-console. Para domínio, verifique com o registro TXT indicado pelo Google no DNS. Para prefixo de URL, pode usar `GOOGLE_SITE_VERIFICATION` com o valor fornecido e publicar novamente.
3. Confira `/robots.txt` e `/sitemap.xml` publicamente. Envie `sitemap.xml` na seção Sitemaps do Search Console.
4. Use Inspeção de URL para testar a página inicial e solicitar indexação. Monitore o relatório de páginas e corrija bloqueios ou erros.
5. Monitore Core Web Vitals e desempenho. Use PageSpeed Insights no domínio publicado. Mantenha conteúdo original, registros verificáveis, títulos descritivos e links oficiais para o site.

O sitemap ajuda a descoberta, mas não garante indexação, prazo ou posição. O Next.js gera os endpoints a partir de `app/sitemap.ts` e `app/robots.ts`; não precisa criar arquivos físicos em `public`.

Referências:
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl
- https://developers.google.com/search/docs/monitor-debug/search-console-start
