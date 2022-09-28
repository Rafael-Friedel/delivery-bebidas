import PropTypes from 'prop-types';
import React from 'react';

function TableDetailsProducts({ sale }) {
  return (
    <table className="w-full shadow-xl">
      <thead className="bg-gray-200 border-b-2 border-gray-200">
        <tr>
          <th className="w-12 p-3 text-sm font-semibold tracking-wide text-left">
            Item
          </th>
          <th className="p-3 text-sm font-semibold tracking-wide text-center">
            Descrição
          </th>
          <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
            Quantidade
          </th>
          <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
            Valor Unitário
          </th>
          <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
            Sub-total
          </th>
        </tr>
      </thead>
      <tbody className="bg-gray-50 border-b-2 border-gray-200">
        {products.map((p, index) => (
          <tr key={ index }>
            <td
              className="p-3 text-sm text-gray-700 text-center"
              data-testid={ `customer_order_details__element-order-
              table-item-number-${index}` }
            >
              {p.id}
            </td>
            <td
              className="p-3 text-sm text-gray-700 text-center"
              data-testid={ `customer_order_details__element-order-table-name-${index}"` }
            >
              {p.name}
            </td>
            <td
              className={ `p-3 text-sm text-gray-700 text-center
          hover:text-white hover:bg-blue-600` }
              data-testid={ `customer_order_details__
              element-order-table-quantity-${index}` }
            >
              {p.SalesProduct.quantity}
            </td>
            <td
              className="p-3 text-sm text-gray-700 text-center"
              data-testid={ `customer_order_details__
              element-order-table-unit-price-${index}` }
            >
              {`R$ ${p.price}`}
            </td>
            <td
              className="p-3 text-sm text-gray-700 text-center"
              data-testid={ `customer_order_details__
              element-order-table-sub-total-${index}` }
            >
              {`R$ ${+p.price * +p.SalesProduct.quantity}`}
            </td>
          </tr>
        ))}
      </tbody>
      <p
        className={ `absolute bottom-10 right-40 h-16 w-16 border border-red-500 
      font-semibold rounded-md ml-4 px-4 py-2 outline-none w-40 h-12 text-red-600 
      hover:text-white hover:bg-red-600` }
        data-testid="customer_order_details__element-order-total-price"
      >
        {`Total: R$ ${sale.totalPrice}`}
      </p>
    </table>
  );
}

TableDetailsProducts.propTypes = {
  sale: PropTypes.shape({
    totalPrice: PropTypes.number.isRequired,
    products: PropTypes.objectOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        saleDate: PropTypes.string.isRequired,
        SalesProduct: PropTypes.shape({
          quantity: PropTypes.number.isRequired,
        }),
      }),
    ),
  }),
};

TableDetailsProducts.defaultProps = {
  sale: PropTypes.shape({
    totalPrice: 0,
    products: [],
  }),
};

export default TableDetailsProducts;
