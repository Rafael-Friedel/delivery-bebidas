const USER = 'user';
const CART = 'cart';

export const getUser = () => {
  const user = localStorage.getItem(USER);

  return user ? JSON.parse(user) : null;
};

export const setUser = (user) => {
  localStorage.setItem(USER, JSON.stringify(user));
};

export const getCartProducts = () => {
  const products = localStorage.getItem(CART);
  return products ? JSON.parse(products) : [];
};

export const setCartProducts = (product) => {
  localStorage.setItem(CART, JSON.stringify(product));
};

export const clearStorage = () => {
  localStorage.clear();
};
