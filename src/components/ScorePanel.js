import React, { useReducer } from 'react';
import { BsArrowUpShort, BsArrowDownShort } from 'react-icons/bs';

const ScorePanel = ({
  id,
  bgColor,
  count,
  add,
  sub,
  increment,
  decrement,
  stop,
}) => {
  const slideStyle = { backgroundColor: bgColor };

  return (
    <div className="counter" style={slideStyle}>
      <ArrowButton
        id={id}
        sign={<BsArrowDownShort />}
        click={sub}
        down={decrement}
        stop={stop}
      />
      <div className="count-digit">{count}</div>
      <ArrowButton
        id={id}
        sign={<BsArrowUpShort />}
        click={add}
        down={increment}
        stop={stop}
      />
    </div>
  );
};

const ArrowButton = ({ id, sign, click, down, stop }) => {
  return (
    <div className="btn btn-arrow" onClick={() => click(id)}>
      {sign}
    </div>
    // continous increase or decrease...
    // <div
    //   className="arrow-btn"
    //   onClick={() => click(id)}
    //   onMouseDown={() => down(id)}
    //   onMouseUp={stop}
    //   onMouseLeave={stop}
    // >
    //   {sign}
    // </div>
  );
};

export default ScorePanel;
