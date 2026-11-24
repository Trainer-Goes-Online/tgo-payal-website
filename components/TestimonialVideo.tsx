'use client';

import { useState } from 'react';

import { Play } from './icons';
import type { VideoTestimonial } from '@/lib/testimonials';

/** Poster first; the MP4 only loads once someone presses play. */
export function TestimonialVideo({ video, index }: { video: VideoTestimonial; index: number }) {
  const [playing, setPlaying] = useState(false);
  const label = `Play client video testimonial ${index + 1}`;

  return (
    <figure className="pk-tm-video" data-reveal style={{ aspectRatio: `${video.w} / ${video.h}` }}>
      {playing ? (
        <video src={video.src} poster={video.poster} controls autoPlay playsInline preload="auto" />
      ) : (
        <button type="button" className="pk-video-poster" onClick={() => setPlaying(true)} aria-label={label}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={video.poster} alt="" width={video.w} height={video.h} loading="lazy" decoding="async" />
          <span className="pk-video-disc" aria-hidden>
            <Play size={20} />
          </span>
        </button>
      )}
    </figure>
  );
}
