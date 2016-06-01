import React from 'react';
import ReactDOM from 'react-dom';

import Board from './components/board/Board.jsx';
import store from './stores/ticTacToe.js';

import './sass/app.scss';

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      board: props.board,
      player: props.player,
    };
  }

  setSize(event) {
    const size = event.target.value;

    store.dispatch({ type: 'SET_BOARD_SIZE', size });
  }

  newGame(event) {
    event.preventDefault();
    store.dispatch({ type: 'NEW_GAME', size: store.getState().size });
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

  render() {
    console.log(store.getState());

    return (
      <div id="container">
        <Board
          {...store.getState()}
          move={this.move}
          newGame={this.newGame}
          setSize={this.setSize}
        />

        <footer>
          <a className="reset" href="" onClick={this.newGame}>reset</a>
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
