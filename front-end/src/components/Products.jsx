import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import myContext from '../context/myContext';

export default function Products(props) {
  const { product } = props;
  const { removeProduct, addProduct } = useContext(myContext);
  const [quantity, setValue] = useState(0);

  useEffect(() => {
    removeProduct(product);
    for (let index = 0; index < quantity; index += 1) {
      console.log(product.name);
      addProduct(product);
    }
  }, [quantity]);

  return (
    <li>
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
        onClick={ () => setValue((prevCount) => prevCount + 1) }
      >
        +
      </button>
      <input
        type="text"
        data-testid={ `customer_products__input-card-quantity-${product.id}` }
        value={ quantity }
        onChange={ ({ target }) => setValue(Number(target.value)) }
      />
      <button
        type="button"
        data-testid={ `customer_products__button-card-rm-item-${product.id}` }
        onClick={ () => setValue((prevCount) => (quantity > 0 ? prevCount - 1 : 0)) }
      >
        -
      </button>
    </li>
  );
}

Products.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    urlImage: PropTypes.string.isRequired,
  }).isRequired,
};
