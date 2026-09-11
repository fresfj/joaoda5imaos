'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Maximize2, Play, X } from 'lucide-react';
import type { ActionMedia } from '../lib/actions';

export function ActionGallery({ items }: { items: ActionMedia[] }) {
  const [active, setActive] = useState<ActionMedia | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (active && !dialog.open) dialog.showModal();
    if (!active && dialog.open) dialog.close();
  }, [active]);

  return <>
    <div className="action-gallery">
      {items.map((item) => <article className="action-card" key={item.slug} data-reveal>
        <button type="button" onClick={() => setActive(item)} aria-label={`Abrir vídeo: ${item.title}`}>
          <Image src={item.poster} alt={item.title} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" />
          <span className="play"><Play fill="currentColor" size={20} /> Assistir</span>
          <Maximize2 className="expand" size={20} aria-hidden="true" />
        </button>
        <div><span>{item.neighborhood}</span><h3>{item.title}</h3><p>{item.description}</p></div>
      </article>)}
    </div>
    <dialog className="media-dialog" ref={dialogRef} onClose={() => setActive(null)} onCancel={() => setActive(null)} onClick={(event) => { if (event.target === event.currentTarget) setActive(null); }}>
      {active ? <div className="dialog-content">
        <button className="dialog-close" type="button" onClick={() => setActive(null)} aria-label="Fechar mídia"><X /></button>
        <video key={active.video} controls autoPlay playsInline preload="metadata" poster={active.poster}>
          <source src={active.video} type="video/mp4" />
          Seu navegador não consegue reproduzir este vídeo.
        </video>
        <div className="dialog-copy"><span>{active.neighborhood}</span><h2>{active.title}</h2><p>{active.description}</p></div>
      </div> : null}
    </dialog>
  </>;
}
