import { useEffect, useState } from 'react';
import { obtenerBuses } from '../services/busService';
import { Link } from 'react-router-dom';
import { Bus } from "../types/bus";
export default function BusList() {
  const [buses, setBuses] = useState<Bus[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const cargarBuses = async () => {
        try {
          const data = await obtenerBuses();
          setBuses(data);
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
                console.error("Error listando buses:", err);
              } else {
                setError('Ocurrió un error desconocido');
              }
        } finally {
          setCargando(false);
        }
      };
    
    cargarBuses();
  }, []);

  if (cargando) {
    return (
      <div className="text-center my-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
        <p>Cargando lista de buses...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger">
        {error}
        <button 
          className="btn btn-sm btn-outline-danger ms-3"
          onClick={() => window.location.reload()}
        >
          Reintentar
        </button>
      </div>
    );
  }

  return (
    <div className="bus-list-container">
      <h2 className="mb-4">Listado de Buses</h2>
      
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Numero de Bus</th>
              <th>Placa</th>
              <th>FechaCracion</th>
              <th>Caracteristicas</th>
              <th>Marca</th>
              <th>Activo</th>
            </tr>
          </thead>
          <tbody>
            {buses.map((bus) => (
              <tr key={bus.id}>
                <td>{bus.id}</td>
                <td>{bus.numBus}</td>
                <td>{bus.placa}</td>
                <td>{new Date(bus.fechaCreacion).toLocaleDateString()}</td>
                <td>{bus.caracteristicas}</td>
                <td>{bus.nomMarca}</td>
                <td>
                    <span className={`badge ${bus.isActive ? 'bg-success' : 'bg-danger'}`}>
                    {bus.isActive ? 'Activo' : 'Inactivo'}
                    </span>
                </td>
                <td>
                  <Link 
                    to={`/bus/${bus.id}`} 
                    className="btn btn-sm btn-primary"
                  >
                    Ver Detalles
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}