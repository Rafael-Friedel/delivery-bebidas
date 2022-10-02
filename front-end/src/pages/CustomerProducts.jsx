import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Products from '../components/CustomerProducts/Products';
import HeaderClient from '../components/HeaderClient';
import myContext from '../context/myContext';

export default function CustomerProducts() {
  const navigate = useNavigate();
  const { products, getProducts, cart } = useContext(myContext);
  const [buttonCart, setButtonCart] = useState(true);

  const totalCart = cart
    .reduce((acc, item) => acc + Number(item.total), 0)
    .toFixed(2)
    .replace('.', ',');

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    setButtonCart(totalCart === '0,00');
  });

  return (
    <>
      <HeaderClient />
      <main>
        <section className="flex justify-center bg-white-50 p-6 flex-wrap">
          {products.map((product) => (
            <Products key={ product.id } product={ product } />
          ))}
        </section>
        <section className="flex justify-end p-3">
          <button
            type="button"
            className="h-16 w-16 border-2 border-green-400
          font-semibold rounded-md ml-4 px-4 py-2 outline-none w-40 h-12 text-green-600
          hover:text-white hover:bg-green-600"
            data-testid="customer_products__button-cart"
            disabled={ buttonCart }
            onClick={ () => navigate('/customer/checkout') }
          >
            <span data-testid="customer_products__checkout-bottom-value">
              {`R$ ${totalCart}`}
            </span>
          </button>
        </section>
      </main>
    </>
  );
}
