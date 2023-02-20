import React from 'react';
import { useState, useEffect, useRef } from 'react';
import ScorePanel from './ScorePanel';
import { BsArrowClockwise } from 'react-icons/bs';
const ScoreBoard = () => {
  const colors = ['#000000', '#EAC605', '#A80218', '#02499B', '#08A217'];
  const arr = Array(colors.length)
    .fill({ count: 0 })
    .map((item, index) => ({ id: index, bgColor: colors[index], ...item }));
  const [panels, setPanels] = useState(arr);
  const ref = useRef(null);

  useEffect(() => {
    return () => {
      clearInterval(ref.current);
    };
  }, []);

  function startIncrement(id) {
    if (ref.current) return;
    ref.current = setInterval(() => add(id), 200);
  }
  function startDecrement(id) {
    if (ref.current) return;
    ref.current = setInterval(() => sub(id), 200);
  }

  function stop() {
    if (ref.current) {
      clearInterval(ref.current);
      ref.current = null;
    }
  }
  function add(id) {
    clicked(id, 1);
  }
  function sub(id) {
    clicked(id, -1);
  }

  function clicked(id, num) {
    setPanels((oldPanels) =>
      oldPanels.map((item) => {
        if (num > 0 || (num < 0 && item.count > 0)) {
          return item.id === id ? { ...item, count: item.count + num } : item;
        } else {
          return { ...item, count: 0 };
        }
      })
    );
  }

  function resetBoard() {
    setPanels((oldPanels) => oldPanels.map((item) => ({ ...item, count: 0 })));
  }

  const liste = panels.map((item, index) => (
    <ScorePanel
      key={index}
      id={item.id}
      bgColor={item.bgColor}
      count={item.count}
      add={add}
      sub={sub}
      increment={startIncrement}
      decrement={startDecrement}
      stop={stop}
    />
  ));
  return (
    <div className="board">
      {liste}{' '}
      <div className="btn btn-reset" onClick={resetBoard}>
        <BsArrowClockwise />
      </div>
    </div>
  );
};

export default ScoreBoard;
