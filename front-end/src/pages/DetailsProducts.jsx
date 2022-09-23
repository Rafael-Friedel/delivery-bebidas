import React from 'react';
import HeaderClient from '../components/HeaderClient';
import TableDetailsProducts from '../components/TableDetailsProducts';
import TableDetailsSale from '../components/TableDetailsSale';

function DetailsProducts() {
  return (
    <section>
      <HeaderClient />
      <section className="px-20 py-5">
        <h2 className="py-5">Detalhes do Pedido:</h2>
        <TableDetailsSale />
        <TableDetailsProducts />
      </section>
    </section>
  );
}

export default DetailsProducts;
