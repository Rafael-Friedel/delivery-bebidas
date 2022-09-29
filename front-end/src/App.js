import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import MyProvider from './context/myProvider';
import Checkout from './pages/Checkout';
import CustomerProducts from './pages/CustomerProducts';
import DetailsProducts from './pages/DetailsProducts';
import Login from './pages/Login';
import MyOrders from './pages/MyOrders';
import Register from './pages/Register';
import SellerOrders from './pages/SellerOrders';
import SellerDetailSale from './pages/SellerDetailSale';

function App() {
  return (
    <Router>
      <MyProvider>
        <Routes>
          <Route path="" element={ <Navigate to="/login" replace /> } />
          <Route path="login" element={ <Login /> } />
          <Route path="register" element={ <Register /> } />
          <Route path="/customer/checkout" element={ <Checkout /> } />
          <Route path="/customer/orders/:id" element={ <DetailsProducts /> } />
          <Route path="/customer/products" element={ <CustomerProducts /> } />
          <Route path="/seller/orders/:id" element={ <SellerDetailSale /> } />
          <Route path="/seller/orders" element={ <SellerOrders /> } />
          <Route path="/customer/orders" element={ <MyOrders /> } />
        </Routes>
      </MyProvider>
    </Router>
  );
}

export default App;
