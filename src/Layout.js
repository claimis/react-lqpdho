import React, { useState, useEffect, useContext, useRef } from 'react';

import './style.css';

const Layout = ({ parentCallback, urs }) => {
  const [style, setStyles] = useState({});
  const [num, setNum] = useState(0);
  const [max, setMax] = useState(10);
  const lote = 10;

  useEffect(() => {
    setStyles({
      width: '100%',
      height: '45px',
      backgroundColor: 'white',
      color: 'black',
      fontSize: '18px',
      padding: '4px',
      display: 'flex'
    });

  }, []);

  useEffect(() => {
    if (max > 0) setMax(lote - num);
  }, [num]);


  return (
    <div
      className="parent-layout"
      style={{
        fontSize: style.fontSize,
        backgroundColor: style.backgroundColor,
        display: style.display,
        alignItems: 'baseline',
        justifyContent: 'flex-end',
        white: style.width,
        height: style.height
      }}
    >
      <div
        style={{
          display: style.display,
          alignItems: 'baseline',
          marginLeft: '4px'
        }}
      >
        <div
          className="plus-layout"
          style={{ color: 'slategrey' }}
          onClick={() => setNum(num - 1)}
        >
          ^
        </div>

        <div
          className="nums-layout"
          style={{
            color: style.color,
            padding: style.padding,
            marginLeft: '4px'
          }}
        >
          {num}
        </div>

        <div
          className="plus-layout"
          style={{ color: 'slategrey', marginLeft: '4px' }}
          onClick={() => setNum(num + 1)}
        >
          v
        </div>
      </div>

      <div className="layout-maxnum-wrap">
        <div
          className="layout-maxnum"
          style={{
            color: 'slategrey',
            marginLeft: '16px'
          }}
        >
          {max}
        </div>
      </div>

      <div className="layout-pull-button">
        <button onClick={() => parentCallback(num)}
          style={{
            backgroundColor: 'black',
            color: 'white',
            border: '1px solid white',
            padding: '3px',
            borderRadius: '13px',
            marginLeft: '4px'
          }}
        >
          Pull!
        </button>
      </div>
    </div>
  );
};
export default Layout;
