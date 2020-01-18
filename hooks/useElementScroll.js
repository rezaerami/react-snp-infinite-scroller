import { useEffect } from 'react';

export default (ref, fn, hasMore, threshold = 100) => {
  const handleScroll = () => {
    if (
      ref.current.scrollHeight <=
      ref.current.offsetHeight + ref.current.scrollTop + threshold
      && hasMore
    ) {
        fn();
    }
  };
  useEffect(() => {
    ref.current.addEventListener('scroll', handleScroll);
    return () => {
      ref.current.removeEventListener('scroll', handleScroll);
    };
  }, [hasMore]);
};
