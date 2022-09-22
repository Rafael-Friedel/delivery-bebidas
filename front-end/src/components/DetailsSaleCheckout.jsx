import React from 'react';

function DetailsSale() {
  return (
    <table className="w-full">
      <thead className="bg-gray-400 border-b-2 border-gray-200">
        <tr>
          <th
            className="p-3 text-sm font-semibold tracking-wide text-left"
            data-testid="customer_order_details__element-order-details-label-order-id"
          >
            Pedido ex: 003
          </th>
          <th
            className="p-3 text-sm font-semibold tracking-wide text-left"
            data-testid="customer_order_details__element-order-details-label-seller-name
Reply

"
          >
            Vendedor Fulano..
          </th>
          <th
            className="p-3 text-sm font-semibold tracking-wide text-left"
            data-testid="customer_order_details__element-order-details-label-order-date"
          >
            22/09/2022
          </th>
          <th
            className="p-3 text-sm font-semibold tracking-wide
          text-left bg-red-500"
            data-testid={ `customer_order_details__element-order-details-label-
            delivery-status<index>` }
          >
            Pendente
          </th>
          <th className="p-3 text-sm font-semibold tracking-wide text-left">
            <button
              type="button"
              className={ `bg-teal-500 hover:bg-teal-600 outline-none py-2 
        px-4 ml-4 text-white font-semibold rounded-md` }
              data-testid="customer_order_details__button-delivery-check"
            >
              Marcar como entregue
            </button>
          </th>
        </tr>
      </thead>
    </table>
  );
}

export default DetailsSale;
