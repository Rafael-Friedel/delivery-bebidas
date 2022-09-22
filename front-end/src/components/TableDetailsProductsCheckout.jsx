import React from 'react';
import TheadDetailsProductsCheckout from './TheadDetailsProductsCheckout';

function TableDetailsProductsCheckout() {
  return (
    <table className="w-full shadow-xl">
      <TheadDetailsProductsCheckout />
      <tbody className="bg-gray-50 border-b-2 border-gray-200">
        <tr>
          <td
            className="p-3 text-sm text-gray-700 text-center"
            data-testid="customer_checkout__element-order-table-item-number-<index>"
          >
            1
          </td>
          <td
            className="p-3 text-sm text-gray-700 text-center"
            data-testid="customer_checkout__element-order-table-name-<index>"
          >
            Budweiser lata 350ml
          </td>
          <td
            className={ `p-3 text-sm text-gray-700 text-center 
        hover:text-white hover:bg-blue-600` }
            data-testid="customer_checkout__element-order-table-quantity-<index>"
          >
            2
          </td>
          <td
            className="p-3 text-sm text-gray-700 text-center"
            data-testid="customer_checkout__element-order-table-unit-price-<index>"
          >
            R$3,50
          </td>
          <td
            className="p-3 text-sm text-gray-700 text-center"
            data-testid="customer_checkout__element-order-table-sub-total-<index>"
          >
            R$7,00
          </td>
          <td className="p-3 text-sm text-gray-700 text-center">
            <button
              type="button"
              data-testid="customer_checkout__element-order-table-remove-<index>"
            >
              Remover
            </button>
          </td>
        </tr>
      </tbody>
      <section className="m-2">
        <p
          className={ `h-16 w-16 border border-red-500 
    font-semibold rounded-md ml-4 px-4 py-2 outline-none w-40 h-12 text-red-600 
    hover:text-white hover:bg-red-600` }
          data-testid="customer_checkout__element-order-total-price"
        >
          Total: R$7,00
        </p>
      </section>
    </table>
  );
}

export default TableDetailsProductsCheckout;
