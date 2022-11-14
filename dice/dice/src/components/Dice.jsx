/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import one from '/1.png';
import two from '/2.png';
import three from '/3.png';
import four from '/4.png';
import five from '/5.png';
import six from '/6.png';

export default function Dice() {
  const roll = useSelector((state) => state.dice);
  const essay = useSelector((state) => state.essay);
  const cache = useSelector((state) => state.cache);
  const dispatch = useDispatch();
  const DiceImage = () => {
    if (roll === 1) {
      return <img className="dice-image" src={one} alt="1" width={200} />;
    } else if (roll === 2) {
      return <img className="dice-image" src={two} alt="2" width={200} />;
    } else if (roll === 3) {
      return <img className="dice-image" src={three} alt="3" width={200} />;
    } else if (roll === 4) {
      return <img className="dice-image" src={four} alt="4" width={200} />;
    } else if (roll === 5) {
      return <img className="dice-image" src={five} alt="5" width={200} />;
    } else if (roll === 6) {
      return <img className="dice-image" src={six} alt="6" width={200} />;
    }
  };
  const Lose = () => {
    if (essay === 0) {
      return <h1 className='alert alert-error flex justify-center '>Lose</h1>;
    }
  };
  const Win = () => {
    if (roll == cache) {
      return <h1 className='alert alert-warning flex justify-center '>Win</h1>;
    }
  };
  return (
    <div>
      <button className='btn btn-primary m-5' onClick={() => dispatch({type: 'roll'})}>Roll</button>
      <button className='btn btn-error m-5' onClick={() => dispatch({type: 'reset'})}>Reset</button>
      <div className='flex justify-center'>
        <DiceImage />
      </div>
      <h1>Value : {roll}</h1>
      <h1>Number of essays : {essay}</h1>
      <Lose />
      <Win />
    </div>
  );
}
