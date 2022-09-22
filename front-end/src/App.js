import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import MyProvider from './context/myProvider';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <MyProvider>
        <Routes>
          <Route path="/" element={ <Navigate to="/login" replace /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/register" element={ <Register /> } />
          <Route path="/customer/checkout" element={ <Checkout /> } />
        </Routes>
      </MyProvider>
    </Router>
  );
}

export default App;
