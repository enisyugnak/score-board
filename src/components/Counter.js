import React, { useRef } from 'react';
import { useState, useEffect } from 'react';
const Counter = ({ bgColor }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const speed = 100;
  const slideStyle = { backgroundColor: bgColor };

  useEffect(() => {
    return () => {
      clearInterval(ref.current);
    };
  }, []);

  function startIncrement() {
    if (ref.current) return;
    ref.current = setInterval(add, speed);
  }
  function startDecrement() {
    if (ref.current) return;
    ref.current = setInterval(sub, speed);
  }
  function stop() {
    if (ref.current) {
      clearInterval(ref.current);
      ref.current = null;
    }
  }

  function add() {
    clicked(1);
  }
  function sub() {
    clicked(-1);
  }

  function clicked(num) {
    setCount((prevCount) => {
      if (num > 0) {
        return prevCount + num;
      } else if (num < 0 && prevCount > 0) {
        return prevCount + num;
      } else {
        return 0;
      }
    });
  }

  return (
    <div className="counter" style={slideStyle}>
      <div
        className="arrow-btn"
        onClick={add}
        onMouseDown={startIncrement}
        onMouseUp={stop}
        onMouseLeave={stop}
      >
        +
      </div>
      <div className="count-digit">{count}</div>
      <div
        className="arrow-btn"
        onClick={sub}
        onMouseDown={startDecrement}
        onMouseUp={stop}
        onMouseLeave={stop}
      >
        -
      </div>
    </div>
  );
};

export default Counter;
