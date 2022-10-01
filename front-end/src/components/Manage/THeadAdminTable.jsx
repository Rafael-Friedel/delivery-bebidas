import React from 'react';

function THeadAdminTable() {
  return (
    <thead className="bg-gray-200 border-b-2 border-gray-200">
      <tr>
        <th className="w-12 p-3 text-sm font-semibold tracking-wide text-left">
          Item
        </th>
        <th className="w-12 p-3 text-sm font-semibold tracking-wide text-left">
          Nome
        </th>
        <th className="p-3 text-sm font-semibold tracking-wide text-center">
          Email
        </th>
        <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
          Tipo
        </th>
        <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
          Excluir
        </th>
      </tr>
    </thead>
  );
}

export default THeadAdminTable;
