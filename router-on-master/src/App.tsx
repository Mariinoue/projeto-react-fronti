
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import UserProfilePage from './pages/UserProfilePage';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import LoginForm from './components/LoginForm';
import './App.css';

function App() {
  const location = useLocation();
  return (
    <div className="app-root">
      <nav className="app-navbar">
        <ul className="app-menu">
          <li>
            <Link
              to="/"
              className={`app-menu-link${location.pathname === "/" ? " active" : ""}`}
            >Home</Link>
          </li>
          <li>
            <Link
              to="/user"
              className={`app-menu-link${location.pathname === "/user" ? " active" : ""}`}
            >Meu Perfil</Link>
          </li>
        </ul>
      </nav>
      <div className="app-content">
        <Routes>
          <Route path="/" element={
            <>
              <HomePage />
              <LoginForm />
            </>
          } />
          <Route path="/user" element={<UserProfilePage />} />
          <Route path="/products/:productId" element={<ProductDetailPage />} />
          <Route path="*" element={<h1>Não encontrado</h1>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
