import React from 'react';
import ReactDOM from 'react-dom';

import Board from './components/board/Board.jsx';
import WinValidation from './services/WinValidation.js';
import store from './stores/ticTacToe.js';

import './sass/app.scss';

const validation = new WinValidation();

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

    const winner = validation.getWinner(store.getState().board);

    if (winner) {
      store.dispatch({ type: 'WIN', winner });
    }

    store.dispatch({ type: 'SWITCH_PLAYER' });
  }

  reset(event) {
    event.preventDefault();
    store.dispatch({ type: 'RESET' });
  }

  render() {
    return (
      <div id="container">
        <Board {...store.getState()} move={this.move} reset={this.reset} />
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
