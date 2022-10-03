import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TableDetailsProducts from '../components/DetailsProducts/TableDetailsProducts';
import TableDetailsSale from '../components/DetailsProducts/TableDetailsSale';
import HeaderClient from '../components/HeaderClient';
import getSaleById from '../fetchs/getSaleById';

function DetailsProducts() {
  const { id } = useParams();
  const [sale, setSale] = useState({});

  const getSale = async (i) => {
    const mySale = await getSaleById(i);
    setSale(mySale);
  };

  useEffect(() => {
    getSale(id);
  });

  return (
    <main>
      {sale.user ? (
        <>
          <HeaderClient name={ sale.user.name } />
          <section className="px-20 py-5">
            <h2 className="py-5 text-lg font-semibold">Detalhes do Pedido:</h2>
            <TableDetailsSale sale={ sale } />
            <TableDetailsProducts sale={ sale } />
          </section>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
}

export default DetailsProducts;
