import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyProvider from './context/myProvider';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <MyProvider>
        <Routes>
          <Route path="/" element={ <Login /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/register" element={ <Register /> } />
        </Routes>
      </MyProvider>
    </Router>
  );
}

export default App;
