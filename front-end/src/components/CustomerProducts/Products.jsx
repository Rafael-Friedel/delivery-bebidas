import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import myContext from '../../context/myContext';

export default function Products(props) {
  const { product } = props;
  const { addProduct, removeProduct } = useContext(myContext);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    if (quantity > 0) {
      addProduct({ ...product, quantity, total: 0 });
    } else {
      removeProduct(product);
    }
  }, [quantity]);

  return (
    <div className="static w-64 m-4 border-2 rounded-md">
      <div className="w-full p-4 m-auto">
        <span
          data-testid={ `customer_products__element-card-price-${product.id}` }
          className="absolute text-lg font-bold"
        >
          {`R$ ${product.price.replace('.', ',')}`}
        </span>
        <img
          src={ product.urlImage }
          alt={ product.name }
          width="100%"
          data-testid={ `customer_products__img-card-bg-image-${product.id}` }
        />
      </div>
      <div className="bg-slate-300 p-4">
        <p
          data-testid={ `customer_products__element-card-title-${product.id}` }
          className="font-semibold text-center pb-3"
        >
          {product.name}
        </p>
        <div className="flex justify-center">
          <button
            type="button"
            className="w-12 bg-green-500 rounded-l-lg font-bold"
            data-testid={ `customer_products__button-card-add-item-${product.id}` }
            onClick={ () => setQuantity(quantity + 1) }
          >
            +
          </button>
          <input
            type="text"
            className="w-16 text-center"
            data-testid={ `customer_products__input-card-quantity-${product.id}` }
            value={ quantity }
            onChange={ ({ target }) => setQuantity(Number(target.value)) }
          />
          <button
            type="button"
            className="w-12 bg-green-500 rounded-r-lg font-bold"
            data-testid={ `customer_products__button-card-rm-item-${product.id}` }
            onClick={ () => setQuantity(quantity > 0 ? quantity - 1 : 0) }
          >
            -
          </button>
        </div>
      </div>
    </div>
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
