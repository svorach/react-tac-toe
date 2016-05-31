module.exports = {
  equalContents: (array) => {
    if (!array.length) {
      return false;
    }

    const val = array[0];

    for (let i = 0; i < array.length; i ++) {
      if (array[i] !== val) {
        return false;
      }
    }

    return val;
  },
};
