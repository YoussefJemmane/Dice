/* eslint-disable max-len */
import {createStore} from 'redux';

const diceReducer = (state = {dice: 1, essay: 12, cache: 0}, action) => {
  switch (action.type) {
    case 'updateCache':
      return {...state, cache: action.payload};
    case 'roll':
      return {dice: Math.floor(Math.random() * 6 + 1), essay: Math.max(state.essay - 1, 0), cache: state.cache};
    case 'reset':
      return {dice: 1, essay: 12, cache: state.cache};
    default:
      return state;
  }
};


const store = createStore(diceReducer);
export default store;
