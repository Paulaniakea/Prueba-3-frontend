// src/components/NavBar.js
import '../styles.css';

function NavBar({ setModo }) {
  return (
    <nav className="navbar">
      <button
        className="nav-btn nav-btn-primary"
        onClick={() => setModo('ingresar')}
      >
        Ingresar
      </button>
      <button
        className="nav-btn nav-btn-warning"
        onClick={() => setModo('actualizar')}
      >
        Actualizar
      </button>
      <button
        className="nav-btn nav-btn-danger"
        onClick={() => setModo('eliminar')}
      >
        Eliminar
      </button>
      <button
        className="nav-btn nav-btn-info"
        onClick={() => setModo('listar')}
      >
        Listar
      </button>
    </nav>
  );
}

export default NavBar;