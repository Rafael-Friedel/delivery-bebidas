import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import MyProvider from './context/myProvider';
import Checkout from './pages/Checkout';
import DetailsProducts from './pages/DetailsProducts';
import Login from './pages/Login';
import Register from './pages/Register';
import CustomerProducts from './pages/CustomerProducts';

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
        </Routes>
      </MyProvider>
    </Router>
  );
}

export default App;
