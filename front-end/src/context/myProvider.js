import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';
import productsList from '../fetchs/products';
import { setCartProducts } from '../services/localStorage';
import myContext from './myContext';

function MyProvider({ children }) {
  const handleChange = ({ target }, state, setState) => {
    const { name, value } = target;
    setState({ ...state, [name]: value });
  };

  const [alertLogin, setAlertLogin] = useState(false);
  const [alertRegister, setAlertRegister] = useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [userData, setUserData] = useState({});

  const getProducts = async () => {
    const productsAPI = await productsList();
    setProducts(productsAPI);
  };

  const addProduct = (newProduct) => {
    const filterItem = cart.find((item) => item.id === newProduct.id);
    if (filterItem) {
      const addQty = cart.map((item) => {
        if (item.id === newProduct.id) {
          item.quantity = newProduct.quantity;
          item.total = Number(newProduct.quantity) * Number(item.price);
        }
        return item;
      });
      setCart(addQty);
    } else {
      const newCartState = [...cart, newProduct];
      setCart(newCartState);
    }
    setCartProducts(cart);
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
    userData,
    setUserData,
  };

  const memoStore = useMemo(() => store);

  return <myContext.Provider value={ memoStore }>{children}</myContext.Provider>;
}

MyProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default MyProvider;
