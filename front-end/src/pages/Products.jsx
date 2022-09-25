import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import myContext from '../context/myContext';
import HeaderClient from '../components/HeaderClient';
import { getCartProducts } from '../services/localStorage';

export default function Products() {
  const navigate = useNavigate();
  const { products, getProducts,
    removeProduct, addProduct } = useContext(myContext);

  const totalCart = getCartProducts();

  const addProductToCart = async (product) => {
    addProduct(product);
  };

  const removeProductFromCart = async (product) => {
    removeProduct(product);
  };

  const onChangeInput = async (product, value) => {
    for (let index = 0; index < value; index += 1) {
      addProduct(product);
    }
  };

  useEffect(() => {
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
              { product.price.replace('.', ',') }
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
              type="number"
              data-testid={ `customer_products__input-card-quantity-${product.id}` }
              // value={ totalCart.filter((item) => item.name === product.name).length }
              onChange={ (e) => onChangeInput(product, e.target.value) }
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
        { totalCart.reduce((acc, item) => acc + Number(item.price), 0)
          .toFixed(2).replace('.', ',')}
      </button>
    </>
  );
}
