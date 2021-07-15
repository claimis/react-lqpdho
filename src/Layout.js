import React, { useState, useEffect, useContext, useRef } from 'react';
import {AiOutlineCaretUp, AiOutlineCaretDown} from 'react-icons/ai';
import {GiDiceFire } from 'react-icons/gi';

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
        alignItems: 'center',
        justifyContent: 'flex-end',
        white: style.width,
        height: style.height
      }}
    >
      <div
        style={{
          display: style.display,
          alignItems: 'center'
        }}
      >

        < AiOutlineCaretUp className="plus-layout" style={{color: "black"}} onClick={() => setNum(num + 1)}/>

        <div
          className="nums-layout"
          style={{
            color: style.color,
            padding: style.padding
          }}
        >
          {num}
        </div>
        < AiOutlineCaretDown className="plus-layout" style={{color: "black"}} onClick={() => setNum(num - 1)}/>
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
        <GiDiceFire  style={{color: "black", padding: "3px"}} size={30} onClick={() => parentCallback(num)} />
      </div>
    </div>
  );
};
export default Layout;
