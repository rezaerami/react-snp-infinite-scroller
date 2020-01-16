import { useEffect, useRef } from 'react';

export default (ref, fn, threshold = 100) => {
  const doFn = useRef(false);
  const handleScroll = () => {
    if (
      ref.current.scrollHeight <=
      ref.current.offsetHeight + ref.current.scrollTop + threshold
    ) {
      if (!doFn.current) {
        fn();
        doFn.current = true;
      }
    } else if (doFn.current) {
      doFn.current = false;
    }
  };
  useEffect(() => {
    doFn.current = false;
    ref.current.addEventListener('scroll', handleScroll);
    return () => {
      ref.current.removeEventListener('scroll', handleScroll);
    };
  }, [fn]);
};
