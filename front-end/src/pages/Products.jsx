import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import myContext from '../context/myContext';
import HeaderClient from '../components/HeaderClient';

export default function Products() {
  const navigate = useNavigate();
  const { products, getProducts,
    removeProducts, addProducts } = useContext(myContext);

  const addProductToCart = async (product) => {
    addProducts(product);
  };

  const removeProductFromCart = async (product) => {
    removeProducts(product);
  };

  useEffect(() => {
    // Products da API
    getProducts();
  }, []);

  return (
    <>
      <HeaderClient />
      <ul>
        { products.map((product, index) => (
          <li key={ index }>
            <p
              data-testid={ `customer_products__element-card-title-${product.id}` }
            >
              {product.name}
            </p>
            <span
              data-testid={ `customer_products__element-card-price-${product.id}` }
            >
              { product.price }
            </span>
            <img
              src={ product.urlImage }
              alt={ product.name }
              width="100px"
              data-testid={ `customer_products__img-card-bg-image-${product.id}` }
            />
            <button
              type="button"
              data-testid={ `customer_products__button-card-add-item-${product.id}` }
              onClick={ () => addProductToCart(product) }
            >
              +
            </button>
            <input
              type="text"
              data-testid={ `customer_products__input-card-quantity-${product.id}` }
            />
            <button
              type="button"
              data-testid={ `customer_products__button-card-rm-item-${product.id}` }
              onClick={ () => removeProductFromCart(product) }
            >
              -
            </button>
          </li>
        )) }
      </ul>
      <button
        type="button"
        data-testid="customer_products__checkout-bottom-value"
        onClick={ () => navigate('/customer/checkout') }
      >
        Ver Carrinho: R$ 0
      </button>
    </>
  );
}
