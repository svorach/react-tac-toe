import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';

import './sass/app.scss';
import Board from './components/board/Board.jsx';

const matrix = [
  [{}, {}, {}],
  [{}, {}, {}],
  [{}, {}, {}],
];

const player = (state = 'o', action) => {
  switch (action.type) {
    case 'SWITCH_PLAYER':
      state = (state === 'x') ? 'o' : 'x';
      return state;
    default:
      return state;
  }
};

const board = (state = matrix, action) => {
  switch (action.type) {
    case 'MOVE':
      state[action.x][action.y].player = action.player;
      return state;
    case 'INIT':
    default:
      return state;
  }
};


const ticTacToeReducer = combineReducers({
  board,
  player,
});

const store = createStore(ticTacToeReducer);

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      board: props.board,
      player: props.player,
    };
  }

  move(e, item) {
    const [x, y] = e.target.dataset.coords.split(',');

    store.dispatch({ type: 'MOVE', x: parseInt(x, 10), y: parseInt(y, 10), player: store.getState().player });
    store.dispatch({ type: 'SWITCH_PLAYER' });
  }

  render() {
    return (
      <div id="container">
        <Board board={this.state.board} player={this.state.player} move={this.move} />
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
