import React, { useState, useEffect, useContext } from 'react';
import './style.css';
import Harvest from './harvest/Harvest';
import Rug from './Rug';

export default function App() {
  return (
    <div>
      <Harvest />
      <Rug />
    </div>
  );
}
