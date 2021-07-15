import React, { useState, useEffect } from 'react';
import { GiDiceSixFacesTwo, GiDiceSixFacesFive, GiDiceSixFacesThree, GiDiceSixFacesSix, GiDiceSixFacesOne, GiDiceSixFacesFour } from 'react-icons/gi';



const Dice = ({ maxNum }) => {
  const [result, setresult] = useState(0);
  const max = maxNum;

  useEffect(() => {
    setresult(generateNumber());


  }, []);

  useEffect(()=>{
    // console.log(result)
  }, [result])

  function generateNumber() {
    return Math.ceil(Math.random() * (max - 1 + 1));
  }

  function setDiceJsx(result)
  {
    switch (result) {
      case 1:
        return <GiDiceSixFacesOne color={"white"} size={30}/>
      break;

      case 2:
        return <GiDiceSixFacesTwo color={"white"} size={30}/>
      break;

      case 3:
        return  <GiDiceSixFacesThree color={"white"} size={30}/>
      break;

      case 4:
        return <GiDiceSixFacesFour color={"white"} size={30}/>
      break;

      case 5:
        return <GiDiceSixFacesFive color={"white"} size={30}/>
      break;

      case 6:
        return <GiDiceSixFacesSix color={"white"} size={30}/>
      break;

      default:

    }
  }

  return (
    <div className="parent-dice">
      <div className="result">{setDiceJsx(result)}</div>
    </div>
  );
};

export default Dice;
