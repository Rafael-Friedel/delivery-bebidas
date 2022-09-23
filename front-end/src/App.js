import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import MyProvider from './context/myProvider';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';

function App() {
  return (
    <Router>
      <MyProvider>
        <Routes>
          <Route path="/" element={ <Navigate to="/login" replace /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/register" element={ <Register /> } />
          <Route path="/customer/products" element={ <Products /> } />
        </Routes>
      </MyProvider>
    </Router>
  );
}

export default App;
