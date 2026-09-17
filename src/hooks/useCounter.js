import { useState, useEffect } from 'react';

export function useCounter(end, duration = 2000, trigger = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let start = 0;
    const endNum = parseInt(end, 10) || 0;
    if (endNum === 0) {
      setCount(0);
      return;
    }

    const totalSteps = 60;
    const stepTime = Math.abs(Math.floor(duration / totalSteps));
    const increment = endNum / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if ((increment > 0 && start >= endNum) || (increment < 0 && start <= endNum)) {
        setCount(endNum);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [end, duration, trigger]);

  return count;
}
