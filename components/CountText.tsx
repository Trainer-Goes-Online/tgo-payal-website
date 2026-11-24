/** Wraps every "N+" figure in a span that components/Motion.tsx counts up from zero. */
export function CountText({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\d+(?=\+))/).map((part, i) =>
        i % 2 ? (
          <span key={i} className="pk-count" data-count={part}>
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </>
  );
}
