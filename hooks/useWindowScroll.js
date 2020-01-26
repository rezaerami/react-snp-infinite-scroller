import { useEffect, useRef } from 'react';

export default (fn, threshold = 100) => {
  const doFn = useRef(false);
  const handleScroll = () => {
    if (
      document.body.scrollHeight <=
      window.innerHeight + window.pageYOffset + threshold
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
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [fn,threshold]);
};
