import React, {
  useState,
  useEffect,
  useContext,
  useRef,
  useCallback
} from 'react';
import anime  from "animejs"
import Dice from './Dice';
import Layout from './Layout';
import './style.css';

const Rug = ({ cards, cardProp }) => {
  const [style, setStyles] = useState({});
  const [dices, setDices] = useState([]);
  const [user, setUser] = useState(1);

  const callback = useCallback(count => {
    setDices(new Array(count).fill(1).map((x, i) => x + i));

    // if (user == 1) setUser(2);
    // else if (user == 2) setUser(1);
  });

  useEffect(() => {
    console.log(user, 'user en cambio efect user');
  }, [user]);

  useEffect(() => {
    console.log('detecto cambios en el dices');
    anime({
      targets: '.dice',
      translateX: 50,
      opacity: 1,
      rotate: '1turn'
});

  }, [dices]);

  const parent = useRef(null);

  // useEffect(() => {}, []);

  // para los estilos
  //{{opacity: (user == 1) ? 1 :0.3, pointerEvents: (user == 1) ? "auto": "none"}}

  return (
    <div className="parent-rug">
      <div className="rug">
        <div className="users">

          <div className="user user1">
            <Layout parentCallback={callback} />
            Name
            <div
              className="wrap-dices"
              style={{ display: 'flex', flexDirection: 'row' }}
            >
              {dices && user == 1 &&
                dices.map((x, i) => (
                  <div className="dice" key={i}>
                    <Dice maxNum={6} />
                  </div>
                ))}
            </div>
          </div>

          <div className="user user2">
            <Layout parentCallback={callback} />
            Name
            <div
              className="wrap-dices"
              style={{ display: 'flex', flexDirection: 'row' }}
            >
              {dices &&
                user == 2 &&
                dices.map((x, i) => (
                  <div className="dice" key={i} style={{opacity: 0}}>
                    <Dice maxNum={6} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rug;
