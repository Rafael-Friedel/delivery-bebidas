import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderClient from '../components/HeaderClient';
import TableDetailsProducts from '../components/TableDetailsProducts';
import TableDetailsSale from '../components/TableDetailsSale';
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
  }, [id]);

  return (
    <section>
      {sale.user ? (
        <>
          <HeaderClient name={ sale.user.name } />
          <section className="px-20 py-5">
            <h2 className="py-5">Detalhes do Pedido:</h2>
            <TableDetailsSale sale={ sale } />
            <TableDetailsProducts sale={ sale } />
          </section>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
}

export default DetailsProducts;
