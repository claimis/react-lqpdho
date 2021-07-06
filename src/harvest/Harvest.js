import React, { useState, useEffect } from 'react';
import Cards from '../Cards';
import Dice from '../Dice';
import './harvest.css';

const Harvest = () => {
  const [cards, setCards] = useState([]);
  const [cardProp, setCardsProp] = useState({});

  const generateNumber = l =>
    Array(l)
      .fill(l)
      .map((x, i) => x - i)
      .reverse();

  useEffect(() => {
    setCards(generateNumber(10));
    setCardsProp({
      color: '',
      neon: false,
      width: '100px',
      height: '200px',
      display: 'flex',
      flexflow: 'row',
      justy: 'space-between',
      border: '1px solid gold'
    });
  }, []);

  return (
    <div className="parent-harvest">
      <h2>Harvest Cards!</h2>
      <Cards cards={cards} cardProp={cardProp} />
    </div>
  );
};
export default Harvest;
