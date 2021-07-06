import React, { useState, useEffect, useContext, useRef } from 'react';
import './style.css';

const Cards = ({ cards, cardProp }) => {
  const [style, setStyles] = useState({});
  const [cds, setCds] = useState([]);
  const parent = useRef(null);
  useEffect(() => {}, []);

  function changeBackground(e) {
    e.target.style.background = '#FFD033';
    e.target.style.boxShadow = '1px 1px 16px #FFD033';
  }

  function backBackground(e) {
    e.target.style.background = cardProp.backgroud | 'transparent';
    e.target.style.boxShadow = 'none';
  }
  return (
    <div
      ref={parent}
      className="parent-Card"
      style={{
        display: cardProp.display,
        justifyContent: cardProp.justy,
        flexDirection: cardProp.flexflow,
        width: '90%'
      }}
    >
      {cards.map((x, i) => {
        return (
          <div
            onMouseOver={changeBackground}
            onMouseLeave={backBackground}
            className="card"
            key={i}
            style={{
              width: cardProp.width,
              height: cardProp.height,
              border: cardProp.border
            }}
          >
            <div className="num-card">{x}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
