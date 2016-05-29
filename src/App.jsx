import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';

import './sass/app.scss';
import Board from './components/board/Board.jsx';

function BoardMatrix(size = 3) {
  const board = [];

  for (let rowIndex = 0; rowIndex < size; rowIndex ++) {
    const row = [];

    for (let colIndex = 0; colIndex < size; colIndex++) {
      row.push('');
    }

    board.push(row);
  }

  return board;
}

const player = (state = 'o', action) => {
  switch (action.type) {
    case 'SWITCH_PLAYER':
      return (state === 'x') ? 'o' : 'x';
    default:
      return state;
  }
};

const board = (state = new BoardMatrix(3), action) => {
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


const ticTacToeReducer = combineReducers({ board, player });

const rootReducer = (state, action) => {
  let newState;

  if (action.type === 'RESET') {
    newState = undefined;
  } else {
    newState = state;
  }

  return ticTacToeReducer(newState, action);
};

const store = createStore(rootReducer);

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      board: props.board,
      player: props.player,
    };
  }

  move(event) {
    const [x, y] = event.target.dataset.coords.split(',');

    store.dispatch({
      type: 'MOVE',
      x: parseInt(x, 10),
      y: parseInt(y, 10),
      player: store.getState().player,
    });

    store.dispatch({ type: 'SWITCH_PLAYER' });
  }

  reset(event) {
    event.preventDefault();
    store.dispatch({ type: 'RESET' });
  }

  render() {
    return (
      <div id="container">
        <Board {...store.getState()} move={this.move} />
        <footer>
          <a href="" className="reset" onClick={this.reset}>reset</a>
        </footer>
      </div>
    );
  }
}

TicTacToe.propTypes = {
  board: React.PropTypes.array.isRequired,
  player: React.PropTypes.string.isRequired,
};

const render = () => {
  ReactDOM.render(
    <TicTacToe {...store.getState()} />,
    document.getElementById('root')
  );
};

store.subscribe(render);
store.dispatch({ type: 'INIT' });

render();
