import PropTypes from 'prop-types';
import React from 'react';
import updateStatus from '../fetchs/updateSaleStatus';

function SaleInfoStatus({ sale }) {
  const datatest = 'seller_order_details__element-order-details-label-delivery-status';
  function updateSaleStatus(status) {
    updateStatus(status, sale.id);
  }

  return (
    <table className="w-full">
      <thead className="bg-gray-400 border-b-2 border-gray-200">
        <tr>
          <th
            className="p-3 text-sm font-semibold tracking-wide text-left"
            data-testid="seller_order_details__element-order-details-label-order-id"
          >
            {`Pedido ${sale.id}`}
          </th>
          <th
            className="p-3 text-sm font-semibold tracking-wide text-left"
            data-testid="seller_order_details__element-order-details-label-order-date"
          >
            {sale.saleDate}
          </th>
          <th
            className="p-3 text-sm font-semibold tracking-wide
          text-left bg-red-500"
            data-testid={ datatest }
          >
            {sale.status}
          </th>
          <th className="p-3 text-sm font-semibold tracking-wide text-left">
            <button
              type="button"
              className={ `bg-teal-500 hover:bg-teal-600 outline-none py-2 
        px-4 ml-4 text-white font-semibold rounded-md` }
              data-testid="seller_order_details__button-preparing-check"
              onClick={ () => updateSaleStatus('Preparando') }
              disabled={ sale.status !== 'Pendente' }
            >
              PREPARAR PEDIDO
            </button>
          </th>
          <th className="p-3 text-sm font-semibold tracking-wide text-left">
            <button
              type="button"
              className={ `bg-teal-500 hover:bg-teal-600 outline-none py-2 
        px-4 ml-4 text-white font-semibold rounded-md` }
              data-testid="seller_order_details__button-dispatch-check"
              onClick={ () => updateSaleStatus('Em Trânsito') }
              disabled={ sale.status !== 'Preparando' }
            >
              SAIU PARA A ENTREGA
            </button>
          </th>
        </tr>
      </thead>
    </table>
  );
}

SaleInfoStatus.propTypes = {
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

SaleInfoStatus.defaultProps = {
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
export default SaleInfoStatus;
