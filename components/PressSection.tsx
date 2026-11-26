import type { CSSProperties } from 'react';

import { Marquee, Picture } from '@/components/Media';
import PressBackdrop from '@/components/PressBackdrop';
import { LeafIcon } from '@/components/icons';
import { MEDIA_FEATURES, PRESS_LOGOS } from '@/lib/site';

const d = (delay: string) => ({ '--d': delay }) as CSSProperties;

/* "As Seen In": logo rows and clippings, shared by the home and about pages. */
export default function PressSection() {
  return (
    <section className="pk-section pk-tint pk-press">
      <PressBackdrop />
      <div className="pk-wrap">
        <div className="pk-orn" aria-hidden>
          <span />
          <LeafIcon size={18} />
          <span />
        </div>
        <h2 className="pk-h2 is-center pk-press-h" data-reveal>
          As Seen In Leading Publications
        </h2>
        <p className="pk-press-sub" data-reveal style={d('.04s')}>
          Trusted conversations. Meaningful recognition.
        </p>
      </div>
      <div className="pk-logos" data-reveal style={d('.08s')}>
        {[PRESS_LOGOS.slice(0, 10), PRESS_LOGOS.slice(10)].map((row, r) => (
          <Marquee
            key={r}
            items={row}
            direction={r === 0 ? 'rtl' : 'ltr'}
            render={(img, key, dec) => (
              <div className="pk-logo" key={key}>
                <Picture img={dec ? { ...img, alt: '' } : img} />
              </div>
            )}
          />
        ))}
      </div>
      <div className="pk-media" data-reveal>
        <p className="pk-eyebrow is-center">Media Features</p>
        <Marquee
          items={MEDIA_FEATURES}
          className="pk-marquee-slow"
          render={(img, key, dec) => (
            <figure className="pk-clip" key={key}>
              <Picture img={dec ? { ...img, alt: '' } : img} />
            </figure>
          )}
        />
      </div>
      <div className="pk-orn is-foot" aria-hidden>
        <span />
        <LeafIcon size={18} />
        <span />
      </div>
    </section>
  );
}
