import { useState, useEffect } from "react";

function Counter({ target, duration = 1000, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 50); 
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(timer);
        setCount(target);
      } else {
        setCount(Math.ceil(start));
      }
    }, 50);

    return () => clearInterval(timer);
  }, [target, duration]);

  const formattedCount = count < 10 ? count.toString().padStart(2, "0") : count;

  return <span>{formattedCount}{suffix}</span>;
}

export default Counter;

