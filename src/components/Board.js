import React from 'react';
import { useState, useEffect } from 'react';
import Counter from './Counter';

const Board = () => {
  const [items, setItems] = useState([]);
  // const colors = ['#000000', '#EAC605', '#A80218', '#02499B', '#08A217'];
  const colors = ['#000000', '#EAC605', '#A80218'];

  useEffect(() => {
    resetGame();
  }, []);

  function resetGame() {
    setItems(colors.map((item, index) => ({ bg: item })));
  }

  const liste = items.map((item, index) => (
    <Counter key={index} bgColor={item.bg} />
  ));

  return (
    <div className="board">
      {liste}
      <div className="reset-piece" onClick={resetGame}>
        reset
      </div>
    </div>
  );
};

export default Board;
