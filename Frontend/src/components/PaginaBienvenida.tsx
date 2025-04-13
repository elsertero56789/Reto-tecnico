import { useNavigate } from "react-router-dom";

const PaginaBienvenida = () => {

  const navigate = useNavigate();

  return (
<div className="welcome-container text-center p-5">
      <h1 className="display-5 fw-bold mb-4">🚌 Sistema de Gestión de Buses</h1>
      <p className="lead mb-4">
        Bienvenido a la plataforma de administración de flota de buses.
        <br />
        Aquí podrás ver y gestionar todos los buses disponibles.
      </p>
      
      <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
        <button
          onClick={() => navigate('/bus')}
          className="btn btn-primary btn-lg px-4 gap-3"
        >
          Ver Lista de Buses
        </button>
        
      </div>
      
      <div className="mt-5">
        <h2 className="h5 mb-3">¿Cómo usar el sistema?</h2>
        <ol className="list-group list-group-numbered">
          <li className="list-group-item">Ver la lista completa de buses</li>
          <li className="list-group-item">Buscar un bus específico por su ID</li>
          <li className="list-group-item">Ver detalles completos de cada bus</li>
        </ol>
      </div>
    </div>
  )
}

export default PaginaBienvenida


