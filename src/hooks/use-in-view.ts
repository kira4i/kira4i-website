import { useEffect, useRef, useState } from "react";

export function useInView(options: IntersectionObserverInit = {}) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const target = ref.current;
    if (!target) return;
    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, options);
    observer.observe(target);
    return () => {
      observer.disconnect();
    };
  }, [options]);

  return { ref, inView } as const;
}
