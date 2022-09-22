import React from 'react';

function DetailsSale() {
  return (
    <table className="w-full">
      <thead className="bg-gray-400 border-b-2 border-gray-200">
        <tr>
          <th className="p-3 text-sm font-semibold tracking-wide text-left">
            Pedido ex: 003
          </th>
          <th className="p-3 text-sm font-semibold tracking-wide text-left">
            Vendedor Fulano..
          </th>
          <th className="p-3 text-sm font-semibold tracking-wide text-left">
            22/09/2022
          </th>
          <th
            className="p-3 text-sm font-semibold tracking-wide
          text-left bg-red-500"
          >
            Pendente
          </th>
          <th className="p-3 text-sm font-semibold tracking-wide text-left bg-teal-500">
            <button
              type="button"
              className={ `bg-teal-500 hover:bg-teal-600 outline-none py-2 
        px-4 ml-4 text-white font-semibold rounded-md` }
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
