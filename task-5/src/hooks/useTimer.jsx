import { useState, useRef, useEffect, useCallback } from "react";

const useTimer = (totalDuration) => {
  const [seconds, setSeconds] = useState(totalDuration);
  const timerRef = useRef(null);

  const start = useCallback(() => {
    timerRef.current = setInterval(() => {
      setSeconds((state) => state - 1);
    }, 1000);
  }, [setSeconds]);

  const stop = useCallback(() => {
    clearInterval(timerRef.current);
    setSeconds(totalDuration);
  }, [setSeconds, totalDuration]);

  useEffect(() => {
    if (seconds < 1) {
      stop();
    }
  }, [seconds, stop]);

  return {
    start,
    seconds,
  };
};

export default useTimer;
