import { useRef, useEffect } from 'react';

export default useInterval = (callback, delay) => {
  const callbackRef = useRef(null);

  useEffect(() => {
    callbackRef.current = callback;
  });

  useEffect(() => {
    const interval = setInterval(() => callbackRef.current(), delay);
    return () => clearInterval(interval);
  }, []);
};
