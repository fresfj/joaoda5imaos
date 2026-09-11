'use client';

import Script from 'next/script';
import { Instagram } from 'lucide-react';
import type { InstagramPost } from '../lib/instagram';
import { campaign } from '../lib/campaign';

declare global {
  interface Window { instgrm?: { Embeds?: { process: () => void } } }
}

export function InstagramFeed({ posts }: { posts: InstagramPost[] }) {
  const permalinks = posts.length ? posts.map((post) => post.permalink) : [campaign.instagram];
  return <>
    <div className={`instagram-grid ${posts.length ? '' : 'profile-only'}`}>
      {permalinks.map((permalink) => <blockquote
        className="instagram-media"
        data-instgrm-permalink={permalink}
        data-instgrm-version="14"
        key={permalink}
      >
        <a href={permalink} target="_blank" rel="noopener noreferrer"><Instagram /> Ver conteúdo no Instagram</a>
      </blockquote>)}
    </div>
    <Script src="https://www.instagram.com/embed.js" strategy="lazyOnload" onLoad={() => window.instgrm?.Embeds?.process()} />
  </>;
}
