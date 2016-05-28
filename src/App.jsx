import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import './sass/app.scss';
import Board from './components/board/Board.jsx';

const boardMatrix = [
  [{}, {}, {}],
  [{}, {}, {}],
  [{}, {}, {}],
];

const boardReducer = (state = {}, action) => {
  switch (action.type) {
    case 'INIT':
      return boardMatrix;
    default:
      return state;
  }
};

const store = createStore(boardReducer);

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      board: props.board,
    };
  }

  render() {
    return (
      <div id="container">
        <Board board={this.state.board} />
      </div>
    );
  }
}

TicTacToe.propTypes = {
  board: React.PropTypes.array.isRequired,
};

const render = () => {
  ReactDOM.render(
    <TicTacToe board={store.getState()} />,
    document.getElementById('root')
  );
};

store.subscribe(render);

store.dispatch({ type: 'INIT' });

render();
