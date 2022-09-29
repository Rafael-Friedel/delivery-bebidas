import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import myContext from '../context/myContext';

export default function Products(props) {
  const { product } = props;
  const { addProduct, removeProduct } = useContext(myContext);
  const [quantity, setQuantity] = useState(0);

  // function qt() {
  //   return console.log(quantity * product.price);
  // }

  useEffect(() => {
    if (quantity > 0) {
      addProduct({ ...product,
        quantity,
        total: 0,
      });
    } else {
      removeProduct(product);
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
        onClick={ () => setQuantity(quantity + 1) }
      >
        +
      </button>
      <input
        type="text"
        data-testid={ `customer_products__input-card-quantity-${product.id}` }
        value={ quantity }
        onChange={ ({ target }) => setQuantity(Number(target.value)) }
      />
      <button
        type="button"
        data-testid={ `customer_products__button-card-rm-item-${product.id}` }
        onClick={ () => setQuantity(quantity > 0 ? quantity - 1 : 0) }
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
