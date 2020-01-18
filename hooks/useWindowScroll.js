import { useEffect } from 'react';

export default (fn, hasMore, threshold = 100) => {
  const handleScroll = () => {
    if (
      document.body.scrollHeight <=
      window.innerHeight + window.pageYOffset + threshold
      && hasMore
    ) {
        fn();
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasMore]);
};
