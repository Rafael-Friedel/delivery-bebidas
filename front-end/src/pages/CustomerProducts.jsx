import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderClient from '../components/HeaderClient';
import Products from '../components/Products';
import myContext from '../context/myContext';
import { getCartProducts } from '../services/localStorage';

export default function CustomerProducts() {
  const navigate = useNavigate();
  const { products, getProducts } = useContext(myContext);
  const [buttonCart, setButtonCart] = useState(true);

  const totalCart = getCartProducts()
    .reduce((acc, item) => acc + Number(item.total), 0)
    .toFixed(2)
    .replace('.', ',');

  useEffect(() => {
    getProducts();
    setButtonCart(totalCart === '0,00');
  }, [totalCart]);

  return (
    <>
      <HeaderClient />
      {products.map((product) => (
        <Products key={ product.id } product={ product } />
      ))}
      <button
        type="button"
        data-testid="customer_products__checkout-bottom-value"
        disabled={ buttonCart }
        onClick={ () => navigate('/customer/checkout') }
      >
        {totalCart}
      </button>
    </>
  );
}
