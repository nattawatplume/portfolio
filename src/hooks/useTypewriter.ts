import { useEffect, useRef, useState } from "react";

export function useTypewriter(fullText: string, speed = 18, startDelay = 300) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const started = useRef(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced) {
      setDisplayed(fullText);
      setDone(true);
      return;
    }

    if (started.current) return;
    started.current = true;

    let index = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    const tick = () => {
      index += 1;
      setDisplayed(fullText.slice(0, index));

      if (index < fullText.length) {
        timeoutId = setTimeout(tick, speed);
      } else {
        setDone(true);
      }
    };

    const startId = setTimeout(tick, startDelay);

    return () => {
      clearTimeout(startId);
      clearTimeout(timeoutId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fullText]);

  return { displayed, done };
}
