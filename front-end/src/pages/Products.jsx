import React, { useContext, useEffect } from 'react';
import myContext from '../context/myContext';

export default function Products() {
  const { cartProducts, products, getProducts } = useContext(myContext);

  const addProductToCart = async (product) => {
    cartProducts(product);
  };

  useEffect(() => {
    // Products da API
    getProducts();
  }, []);

  return (
    <ul>
      { products.map((product) => (
        <li key={ product }>
          {product}
          <button
            type="button"
            onClick={ addProductToCart.bind(this, product) }
          >
            Adicionar no carrinho
          </button>
        </li>
      )) }
    </ul>
  );
}
