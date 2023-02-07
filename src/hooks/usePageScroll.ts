import { useEffect, useState } from "react";

const usePageScroll = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const scrollHandler = (e: Event) => {
    const { scrollHeight, scrollTop } = (e.target as Document).documentElement;

    if (scrollHeight - (scrollTop + window.innerHeight) < 100) {
      setCurrentPage(prev => prev + 1);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);

    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return currentPage;
};

export default usePageScroll;
