import { Matrix } from '../utils/matrix.js';

const board = (state = new Matrix(), action) => {
  let newState = state.slice();

  switch (action.type) {
    case 'MOVE':
      newState[action.x][action.y] = action.player;
      return newState;
    case 'NEW_GAME':
      if (action.size && action.size > 3) {
        newState = new Matrix(action.size);
      } else {
        newState = new Matrix();
      }

      return newState;
    case 'INIT':
    default:
      return state;
  }
};

module.exports = board;
