import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import myContext from '../context/myContext';
import HeaderClient from '../components/HeaderClient';
import { getCartProducts } from '../services/localStorage';
import Products from '../components/Products';

export default function CustomerProducts() {
  const navigate = useNavigate();
  const { products, getProducts } = useContext(myContext);

  const totalCart = getCartProducts();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <HeaderClient />
      { products.map((product) => <Products key={ product.id } product={ product } />) }
      <button
        type="button"
        data-testid="customer_products__checkout-bottom-value"
        onClick={ () => navigate('/customer/checkout') }
      >
        Ver Carrinho: R$
        { totalCart.reduce((acc, item) => acc + Number(item.price), 0)
          .toFixed(2).replace('.', ',')}
      </button>
    </>
  );
}
