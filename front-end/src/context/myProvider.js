import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';
import myContext from './myContext';
import productsList from '../fetchs/products';
import { setCartProducts } from '../services/localStorage';

function MyProvider({ children }) {
  const handleChange = ({ target }, state, setState) => {
    const { name, value } = target;
    setState({ ...state, [name]: value });
  };

  const [alertLogin, setAlertLogin] = useState(false);
  const [alertRegister, setAlertRegister] = useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const getProducts = async () => {
    const productsAPI = await productsList();
    setProducts(productsAPI);
  };

  const addProduct = async (newProduct) => {
    const newCartState = [...cart, newProduct];

    setCartProducts(newCartState);
    setCart(newCartState);
  };

  const removeProduct = async (removedProduct) => {
    const newCartState = cart.filter((item) => item.id !== removedProduct.id);

    setCartProducts(newCartState);
    setCart(newCartState);
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
    setCart,
    addProduct,
    removeProduct,
  };

  const memoStore = useMemo(() => store);

  return <myContext.Provider value={ memoStore }>{children}</myContext.Provider>;
}

MyProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default MyProvider;
