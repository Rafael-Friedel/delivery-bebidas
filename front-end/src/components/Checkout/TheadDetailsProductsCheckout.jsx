import React from 'react';

function TheadDetailsProductsCheckout() {
  return (
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
        <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
          Remover Item
        </th>
      </tr>
    </thead>
  );
}

export default TheadDetailsProductsCheckout;
