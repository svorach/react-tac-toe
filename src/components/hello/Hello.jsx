import React from 'react';

const Hello = ({ message }) => <h1>{message}</h1>;

Hello.propTypes = {
  message: React.PropTypes.string.isRequired,
};

module.exports = Hello;
