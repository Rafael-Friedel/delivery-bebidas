import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyProvider from './context/myProvider';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <MyProvider>
        <Routes>
          <Route path="/" element={ <Login /> } />
          <Route path="/login" element={ <Login /> } />
        </Routes>
      </MyProvider>
    </Router>
  );
}

export default App;
