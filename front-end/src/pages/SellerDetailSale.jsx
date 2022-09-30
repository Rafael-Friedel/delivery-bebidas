import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderSeller from '../components/HeaderSeller';
import SaleInfoStatus from '../components/SaleInfoStatus';
import TableSellerDetailsProducts from '../components/TableSellerDetailsProducts';
import getSaleById from '../fetchs/getSaleById';

function SellerDetailSale() {
  const { id } = useParams();
  const [sale, setSale] = useState([]);

  async function getSale() {
    const customerSale = await getSaleById(id);
    setSale([customerSale]);
  }

  useEffect(() => {
    getSale();
  });

  return (
    <>
      <HeaderSeller />
      {
        sale.length > 0 && (
          <>
            <SaleInfoStatus sale={ sale[0] } />
            <TableSellerDetailsProducts sale={ sale } />
          </>
        )
      }
    </>

  );
}

// SellerDetailSale.propTypes = {
//   match: PropTypes.shape({
//     params: PropTypes.shape({
//       id: PropTypes.string.isRequired,
//     }),
//   }).isRequired,
// };

export default SellerDetailSale;
