import type { Img } from '@/lib/site';

export function Picture({ img, className, eager = false }: { img: Img; className?: string; eager?: boolean }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={className}
      src={img.src}
      alt={img.alt}
      width={img.w}
      height={img.h}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
    />
  );
}

/* A track rendered twice so the loop is seamless; the copy is hidden from AT. */
export function Marquee({
  items,
  render,
  direction = 'rtl',
  className = '',
}: {
  items: Img[];
  render: (img: Img, key: string, decorative: boolean) => React.ReactNode;
  direction?: 'ltr' | 'rtl';
  className?: string;
}) {
  return (
    <div className={`pk-marquee ${direction} ${className}`}>
      <div className="pk-marquee-track">
        {items.map((img, i) => render(img, `a${i}`, false))}
        <div className="pk-marquee-dup" aria-hidden>
          {items.map((img, i) => render(img, `b${i}`, true))}
        </div>
      </div>
    </div>
  );
}
