import PropTypes from 'prop-types';
import React from 'react';

function TableDetailsSale({ sale }) {
  const testId = 'customer_order_details__element-order-details-label-';
  return (
    <table className="w-full">
      <thead className="bg-gray-400 border-b-2 border-gray-200">
        <tr>
          <th
            className="p-3 text-sm font-semibold tracking-wide text-center"
            data-testid="customer_order_details__element-order-details-label-order-id"
          >
            {`Pedido ${sale.id}`}
          </th>
          <th
            className="p-3 text-sm font-semibold tracking-wide text-center"
            data-testid="customer_order_details__element-order-details-label-seller-name"
          >
            {`Vendedor:  ${sale.seller.name}`}
          </th>
          <th
            className="p-3 text-sm font-semibold tracking-wide text-center"
            data-testid="customer_order_details__element-order-details-label-order-date"
          >
            {`Data: ${sale.saleDate}`}
          </th>
          <th
            className="p-3 text-sm font-semibold tracking-wide
          text-center bg-red-500"
            data-testid={ `${testId}delivery-status${sale.id}` }
          >
            {sale.status}
          </th>
          <th className="p-3 text-sm font-semibold tracking-wide text-center">
            <button
              type="button"
              className={ `bg-teal-500 hover:bg-teal-600 outline-none py-2 
        px-4 ml-4 text-white font-semibold rounded-md` }
              data-testid="customer_order_details__button-delivery-check"
              disabled={ sale.status !== 'Em Trânsito' }
            >
              Marcar como entregue
            </button>
          </th>
        </tr>
      </thead>
    </table>
  );
}

TableDetailsSale.propTypes = {
  sale: PropTypes.shape({
    id: PropTypes.number.isRequired,
    sellerId: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    saleDate: PropTypes.string.isRequired,
    seller: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  }),
};

TableDetailsSale.defaultProps = {
  sale: PropTypes.shape({
    id: 0,
    sellerId: 0,
    status: 'PENDENTE',
    saleDate: new Date(),
    seller: PropTypes.shape({
      name: 'Vendedor',
    }),
  }),
};
export default TableDetailsSale;
