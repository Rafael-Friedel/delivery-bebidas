import React from 'react';

function TableDetailsProducts() {
  return (
    <table className="w-full shadow-xl">
      <thead className="bg-gray-200 border-b-2 border-gray-200">
        <tr>
          <th className="w-12 p-3 text-sm font-semibold tracking-wide text-left">
            Item
          </th>
          <th className="p-3 text-sm font-semibold tracking-wide text-left text-center">
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
        <tr>
          <td
            className="p-3 text-sm text-gray-700 text-center"
            data-testid="customer_order_details__element-order-table-item-number-<index>"
          >
            1
          </td>
          <td
            className="p-3 text-sm text-gray-700 text-center"
            data-testid="customer_order_details__element-order-table-name-<index>"
          >
            Budweiser lata 350ml
          </td>
          <td
            className={ `p-3 text-sm text-gray-700 text-center 
          hover:text-white hover:bg-blue-600` }
            data-testid="customer_order_details__element-order-table-quantity-<index>"
          >
            2
          </td>
          <td
            className="p-3 text-sm text-gray-700 text-center"
            data-testid="customer_order_details__element-order-table-unit-price-<index>"
          >
            R$3,50
          </td>
          <td
            className="p-3 text-sm text-gray-700 text-center"
            data-testid="customer_order_details__element-order-table-sub-total-<index>"
          >
            R$7,00
          </td>
        </tr>
        <tr>
          <td
            className="p-3 text-sm text-gray-700 text-center"
            data-testid="customer_order_details__element-order-table-item-number-<index>"
          >
            2
          </td>
          <td
            className="p-3 text-sm text-gray-700 text-center"
            data-testid="customer_order_details__element-order-table-name-<index>"
          >
            Skol lata 350ml
          </td>
          <td
            className={ `p-3 text-sm text-gray-700 text-center 
          hover:text-white hover:bg-blue-600` }
            data-testid="customer_order_details__element-order-table-quantity-<index>"
          >
            10
          </td>
          <td
            className="p-3 text-sm text-gray-700 text-center"
            data-testid="customer_order_details__element-order-table-unit-price-<index>"
          >
            R$2,50
          </td>
          <td
            className="p-3 text-sm text-gray-700 text-center"
            data-testid="customer_order_details__element-order-table-sub-total-<index>"
          >
            R$25,00
          </td>
        </tr>
      </tbody>
      <p
        className={ `absolute bottom-10 right-40 h-16 w-16 border border-red-500 
      font-semibold rounded-md ml-4 px-4 py-2 outline-none w-40 h-12 text-red-600 
      hover:text-white hover:bg-red-600` }
        data-testid="customer_order_details__element-order-total-price"
      >
        Total: R$32,00
      </p>
    </table>
  );
}

export default TableDetailsProducts;