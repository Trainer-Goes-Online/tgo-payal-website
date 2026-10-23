'use client';

import { useState } from 'react';

import { Play } from './icons';

/** Poster first; the real player (privacy-enhanced domain) mounts on click. */
export function YouTubeLite({ id, title, priority = false }: { id: string; title: string; priority?: boolean }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="pk-video">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        />
      ) : (
        <button type="button" className="pk-video-poster" onClick={() => setPlaying(true)} aria-label={`Play: ${title}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
            alt=""
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
          />
          <span className="pk-video-disc" aria-hidden>
            <Play size={22} />
          </span>
        </button>
      )}
    </div>
  );
}
