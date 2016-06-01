import { Matrix } from '../utils/matrix.js';

const board = (state = new Matrix(), action) => {
  const newState = state.slice();

  switch (action.type) {
    case 'MOVE':
      newState[action.x][action.y] = action.player;
      return newState;
    case 'INIT':
    default:
      return state;
  }
};

module.exports = board;
