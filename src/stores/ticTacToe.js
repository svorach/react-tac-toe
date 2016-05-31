import { createStore, combineReducers } from 'redux';
import player from '../reducers/player.js';
import board from '../reducers/board.js';

const ticTacToe = combineReducers({ board, player });

const rootReducer = (state, action) => {
  let newState;

  if (action.type === 'RESET') {
    newState = undefined;
  } else {
    newState = state;
  }

  return ticTacToe(newState, action);
};

const store = createStore(rootReducer);

module.exports = store;
