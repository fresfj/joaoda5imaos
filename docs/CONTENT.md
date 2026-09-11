# Content

## Campaign Identity

- Public name: João da 5 Irmãos.
- Civil name: João Carlos Rodrigues.
- Office: Deputado Federal, Paraná / BR.
- Election: 2026.
- Number: 1599.
- Party: Movimento Democrático Brasileiro (MDB).
- Campaign CNPJ supplied by the user on 2026-09-11: 68.455.068/0001-07. This document records the supplied value, not an independent registry verification.

Preserve Portuguese accents throughout rendered text and metadata. Do not copy another candidate's coalition, CNPJ, eligibility statements, donation account or results.

## Existing Research Baseline

The earlier research described João as Curitiba-born, a merchant and city councilor, with the family commerce beginning in 1986. It identified Verdura Solidária and Circuito Social Skate. These remain the biographical baseline. The migration removes unsupported neighborhood-specific assertions and speculative policy promises from the earlier page.

- Candidate reference: https://www.gazetadopovo.com.br/eleicoes/2026/candidatos/pr/deputado-federal/joao-da-5-irmaos-mdb-1599/
- Earlier research also referenced Câmara Municipal de Curitiba profiles; recheck primary records before adding new facts.
- Visual reference: the user-supplied Deltan screenshot and https://deltandallagnol.com.br/.
- Current brand reference: the user's “Vem Ver”, Uberaba works and MDB screenshots supplied on 2026-09-11. These replace the earlier color and typography direction. The site uses the user-supplied tone “Fé. Família. Trabalho.”, without inferring new religious affiliations or policy claims.

## Footer and Privacy

Footer identifies the legal name, office, party, electoral advertising and supplied CNPJ. Donation language references Lei 9.504/97 and Resolução TSE 23.607/2019. The site does not collect donations.

Reference consulted: https://www.tse.jus.br/legislacao/compilada/res/2019/resolucao-no-23-607-de-17-de-dezembro-de-2019

`/privacidade` describes the actual implementation, external platforms and possible technical hosting logs. Update it when adding forms, analytics, storage or other data processing.

## Channels

`lib/campaign.ts` owns channel URLs. Existing Instagram and YouTube addresses are retained. The official WhatsApp invitation has not been supplied. Configure `NEXT_PUBLIC_WHATSAPP_GROUP_URL` with the official invite; the fallback explicitly asks visitors to request it through Instagram rather than sending them to a generic WhatsApp URL.

## Neighborhood Pages

The site names Uberaba, Cajuru, Boqueirão, Pinheirinho, Capão da Imbuia and Tarumã on `/bairros` and friendly child URLs such as `/bairros/uberaba`. Copy stays within the current evidence: community presence, listening, social action and existing campaign records. Uberaba has specific supplied media showing the Horta Comunitária, UBS Alvorada, Unidade Lotiguaçu, an obra delivery and the Igreja São José Operário event.

Do not add a neighborhood-specific project, result, attribution or promise without a source. `lib/actions.ts` owns the searchable descriptions attached to each gallery item.

## Instagram Content

The “Instagram e redes sociais” section embeds public posts from `https://www.instagram.com/joaoda5irmaos/`. `INSTAGRAM_ACCESS_TOKEN` enables automatic latest-post discovery through the official Instagram API. `INSTAGRAM_POST_URLS` is a controlled fallback for public post URLs. The profile itself is embedded if neither source is configured.
