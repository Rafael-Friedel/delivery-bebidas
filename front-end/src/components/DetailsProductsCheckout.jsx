import React from 'react';

function DetailsProductsCheckout() {
  return (
    <table className="w-full">
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
          <td className="p-3 text-sm text-gray-700 text-center">1</td>
          <td className="p-3 text-sm text-gray-700 text-center">
            Budweiser lata 350ml
          </td>
          <td
            className={ `p-3 text-sm text-gray-700 text-center 
          hover:text-white hover:bg-blue-600` }
          >
            2
          </td>
          <td className="p-3 text-sm text-gray-700 text-center">R$3,50</td>
          <td className="p-3 text-sm text-gray-700 text-center">R$7,00</td>
        </tr>
      </tbody>
      <p
        className={ `absolute bottom-10 right-40 h-16 w-16 border border-red-500 
      font-semibold rounded-md ml-4 px-4 py-2 outline-none w-32 h-12 text-red-600 
      hover:text-white hover:bg-red-600` }
      >
        Total: R$7,00
      </p>
    </table>
  );
}

export default DetailsProductsCheckout;
