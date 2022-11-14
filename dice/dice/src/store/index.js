/* eslint-disable max-len */
import {createStore} from 'redux';


const diceReducer = (state = {dice: 1, essay: 12, cache: 4}, action) => {
  switch (action.type) {
    case 'roll':
      return {dice: Math.floor(Math.random() * 6 + 1), essay: Math.max(state.essay - 1, 0), cache: 4};
    case 'reset':
      return {dice: 1, essay: 12};
    default:
      return state;
  }
};


const store = createStore(diceReducer);
export default store;
