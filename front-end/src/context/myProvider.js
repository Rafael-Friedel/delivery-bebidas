import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';
import myContext from './myContext';

function MyProvider({ children }) {
  const handleChange = ({ target }, state, setState) => {
    const { name, value } = target;
    setState({ ...state, [name]: value });
  };

  const [alertLogin, setAlertLogin] = useState(false);
  const [alertRegister, setAlertRegister] = useState(false);
  const [products, setProducts] = useState();
  const [cart, setCart] = useState();

  const getProducts = async () => {
    const productsAPI = ['item1', 'item2', 'item3'];
    setProducts(productsAPI);
  };

  const cartProducts = async (productsAdd) => {
    setCart(...products, productsAdd);
  };

  const store = {
    handleChange,
    alertLogin,
    setAlertLogin,
    alertRegister,
    setAlertRegister,
    products,
    getProducts,
    cart,
    cartProducts,
  };

  const memoStore = useMemo(() => store);

  return <myContext.Provider value={ memoStore }>{children}</myContext.Provider>;
}

MyProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default MyProvider;
