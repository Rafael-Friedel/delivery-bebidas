const KEY = 'cart_products';

export const readProducts = () => JSON.parse(localStorage.getItem(KEY));

export const saveProducts = (prod) => localStorage.setItem(KEY, JSON.stringify(prod));

if (!readProducts()) {
  saveProducts([]);
}

export const addProducts = (products) => {
  if (products) {
    const lastProducts = readProducts();
    saveProducts([...lastProducts, products]);
  }
};

export const removeProducts = (products) => {
  const lastProducts = readProducts();
  saveProducts(lastProducts.filter(({ id }) => id !== products.id));
};
