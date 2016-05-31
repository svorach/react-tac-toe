const player = (state = 'o', action) => {
  switch (action.type) {
    case 'SWITCH_PLAYER':
      return (state === 'x') ? 'o' : 'x';
    default:
      return state;
  }
};

module.exports = player;
