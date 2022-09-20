import PropTypes from 'prop-types';
import React, { useState } from 'react';
import myContext from './myContext';

function MyProvider({ children }) {
  const [example, setExample] = useState([]);
  const store = { example, setExample };
  return <myContext.Provider value={ store }>{children}</myContext.Provider>;
}

MyProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default MyProvider;
