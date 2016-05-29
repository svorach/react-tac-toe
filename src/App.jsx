import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';

import './sass/app.scss';
import Board from './components/board/Board.jsx';

function Matrix() {
  this.matrix = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];
};

const player = (state = 'o', action) => {
  switch (action.type) {
    case 'SWITCH_PLAYER':
      return (state === 'x') ? 'o' : 'x';
    default:
      return state;
  }
};

const board = (state = new Matrix().matrix, action) => {
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


const ticTacToeReducer = combineReducers({ board, player, });

const rootReducer = (state, action) => {
  if (action.type === 'RESET') {
    state = undefined;
  }

  return ticTacToeReducer(state, action)
}

const store = createStore(rootReducer);

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      board: props.board,
      player: props.player,
    };
  }

  checkForWinner() {
    console.log(this.state.board);
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

    function checkForWinner() {
      const board = store.getState().board;

      function contentsAreTheSame(winConditionArray) {
        return !winConditionArray.some((val, i, arr) => {
          return val !== arr[0];
        });
      }

      function checkForVerticalWin() {
        function checkColumn(columnIndex) {
          let columnContents = [];

          for (let row in board) {
            let tile = board[row][columnIndex];
            columnContents.push(tile);
          }

          if (columnContents.length === board.length) {
            return contentsAreTheSame(columnContents);
          }
        }

        for (let col = 0; col < board.length; col++) {
          return checkColumn(col);
        }
      }

      function checkForHorizontalWin() {
        function checkRow(rowIndex) {
          let rowContents = [];

          for (let row in board[rowIndex]) {
            let tile = board[rowIndex][row];
            rowContents.push(tile);
          }
          if (rowContents.length === board.length) {
            return contentsAreTheSame(rowContents);
          }
        }

        for (let col = 0; col < board.length; col++) {
          return checkRow(col);
        }
      }

      console.log(checkForHorizontalWin() || checkForVerticalWin());
    }

    checkForWinner();
  }

  reset(event) {
    event.preventDefault();
    store.dispatch({ type: 'RESET' });
  }

  render() {
    console.log(store.getState())
    return (
      <div id="container">
        <Board {...store.getState()} move={this.move} />
        <a href="" className="reset" onClick={this.reset}>Reset Game</a>
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
