import PropTypes from 'prop-types';
import React from 'react';
import THeadTableDetailsProducts from './THeadTableDetailsProducts';

function TableDetailsProducts({ sale }) {
  const testId = 'customer_order_details__element-order-table';

  return (
    <>
      <table className="w-full shadow-xl">
        <THeadTableDetailsProducts />
        <tbody className="bg-gray-50 border-b-2 border-gray-200">
          {sale.Products.map((p, index) => (
            <tr key={ index }>
              <td
                className="p-3 text-sm text-gray-700 text-center"
                data-testid={ `${testId}-item-number-${p.id}` }
              >
                {p.id}
              </td>
              <td
                className="p-3 text-sm text-gray-700 text-center"
                data-testid={ `${testId}-name-${p.id}"` }
              >
                {p.name}
              </td>
              <td
                className={ `p-3 text-sm text-gray-700 text-center
          hover:text-white hover:bg-blue-600` }
                data-testid={ `${testId}-quantity-${p.id}` }
              >
                {p.SalesProduct.quantity}
              </td>
              <td
                className="p-3 text-sm text-gray-700 text-center"
                data-testid={ `${testId}-unit-price-${p.id}` }
              >
                {`R$ ${Number(p.price).toFixed(2).replace('.', ',')}`}
              </td>
              <td
                className="p-3 text-sm text-gray-700 text-center"
                data-testid={ `${testId}-sub-total-${p.id}` }
              >
                {`R$ ${(+p.price * +p.SalesProduct.quantity)
                  .toFixed(2)
                  .replace('.', ',')}`}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p
        className={ `absolute bottom-10 right-40 h-16 w-16 border border-red-500 
      font-semibold rounded-md ml-4 px-4 py-2 outline-none w-40 h-12 text-red-600 
      hover:text-white hover:bg-red-600` }
        data-testid="customer_order_details__element-order-total-price"
      >
        {`Total: R$ ${sale.totalPrice.replace('.', ',')}`}
      </p>
    </>
  );
}

TableDetailsProducts.propTypes = {
  sale: PropTypes.shape({
    totalPrice: PropTypes.string.isRequired,
    Products: PropTypes.arrayOf(
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
