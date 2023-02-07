import { MutableRefObject, useEffect, useRef, useState } from "react";

interface Props {
  delay: number;
  currentPage: number;
  limit: number;
}

const useDelayRender = ({ delay, currentPage, limit }: Props) => {
  const [indices, setIndices] = useState<Set<number>>(new Set());

  const timerRef: MutableRefObject<NodeJS.Timeout | null> = useRef(null);

  useEffect(
    () => {
      if (indices.size < currentPage * limit) {
        timerRef.current = setTimeout(
          () => setIndices(prev => new Set([...prev, prev.size + 1])),
          delay
        );
      }

      return () => {
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }
      };
    },
    [indices, currentPage]
  );

  return indices;
};

export default useDelayRender;
