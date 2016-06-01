const size = (state = 3, action) => {
  let newState;

  switch (action.type) {
    case 'SET_SIZE':
      newState = parseInt(action.size, 10);
      return newState;
    default:
      return state;
  }
};

module.exports = size;
