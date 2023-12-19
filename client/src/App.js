import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import HomePage from './components/HomePage';
import ProtectedPage from './components/ProtectedPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path='/login' Component={Login} />
        <Route path='/register' Component={Register} />
        <Route path='/protected' Component={ProtectedPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
