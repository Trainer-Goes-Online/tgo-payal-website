/* The "As Seen In" scenery: studio mic top-left, MEDIA newspaper top-right,
   camcorder on the right. Decorative only. */
const PROPS = [
  { src: '/images/press/mic.webp', w: 600, h: 691, cls: 'is-mic' },
  { src: '/images/press/newspaper.webp', w: 600, h: 616, cls: 'is-paper' },
  { src: '/images/press/camcorder.webp', w: 600, h: 633, cls: 'is-camera' },
];

export default function PressBackdrop() {
  return (
    <div className="pk-press-bg" aria-hidden>
      {PROPS.map((p) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={p.cls}
          className={`pk-prop ${p.cls}`}
          src={p.src}
          alt=""
          width={p.w}
          height={p.h}
          loading="lazy"
          decoding="async"
        />
      ))}
    </div>
  );
}
