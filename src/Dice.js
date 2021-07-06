import React, { useState, useEffect } from 'react';

const Dice = ({ maxNum }) => {
  const [result, setresult] = useState(0);
  const max = maxNum;

  useEffect(() => {
    setresult(generateNumber());
  }, []);

  function generateNumber() {
    return Math.ceil(Math.random() * (max - 1 + 1));
  }

  return (
    <div className="parent-dice">
      <div className="result">{result}</div>
    </div>
  );
};

export default Dice;
