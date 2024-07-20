import { useRouter } from 'next/router';
import { RefObject, useEffect } from 'react';

const UseAutoScroll = (ref?: RefObject<Element>) => {
  const { query } = useRouter();

  useEffect(() => {
    const scrollAmount = 1;
    const scrollInterval = 50;
    let intervalId: NodeJS.Timeout;

    if (query?.scroll === 'true') {
      const target = ref?.current || window;
      intervalId = setInterval(() => {
        target.scrollBy(0, scrollAmount);
      }, scrollInterval);
    }

    return () => clearInterval(intervalId);
  }, [query?.scroll, ref]);
};

export default UseAutoScroll;
