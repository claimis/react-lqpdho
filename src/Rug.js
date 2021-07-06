import React, {
  useState,
  useEffect,
  useContext,
  useRef,
  useCallback
} from 'react';
import Dice from './Dice';
import Layout from './Layout';
import './style.css';

const Rug = ({ cards, cardProp }) => {
  const [style, setStyles] = useState({});
  const [dices, setDices] = useState([]);
  const [user, setUser] = useState(1);

  const callback = useCallback(count => {
    setDices(new Array(count).fill(1).map((x, i) => x + i));

    if (user == 1) setUser(2);
    else if (user == 2) setUser(1);
  });

  useEffect(() => {
    console.log(user, 'user en cambio efect user');
  }, [user]);

  useEffect(() => {
    console.log('detecto cambios en el dices');
  }, [dices]);

  const parent = useRef(null);

  // useEffect(() => {}, []);

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
              {dices &&
                dices.map((x, i) => (
                  <div key={i}>
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
                user.current == 2 &&
                dices.map((x, i) => (
                  <div key={i}>
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
