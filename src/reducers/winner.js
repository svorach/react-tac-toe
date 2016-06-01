const winner = (state = {}, action) => {
  let newState;

  switch (action.type) {
    case 'WIN':
      newState = action.winner;
      return newState;
    default:
      return state;
  }
};

module.exports = winner;
