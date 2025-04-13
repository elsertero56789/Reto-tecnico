import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Bus } from "../types/bus";
import { obtenerBusporId } from "../services/busService";

export default function BusDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [bus, setBus] = useState<Bus | null>(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const cargarDetalleBus = async () => {
      try {
        if (!id) {
          throw new Error("ID de bus no proporcionado");
        }

        const data = await obtenerBusporId(parseInt(id));
        setBus(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
          console.error("Error obteniendo el detalle:", err);
        } else {
          setError("Ocurrió un error desconocido");
        }
      } finally {
        setCargando(false);
      }
    };

    cargarDetalleBus();
  }, [id]);

  if (cargando) {
    return (
      <div className="text-center my-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
        <p className="mt-2">Cargando detalles del bus...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger my-4">
        <h4 className="alert-heading">Error</h4>
        <p>{error}</p>
        <button
          className="btn btn-outline-danger"
          onClick={() => navigate("/buses")}
        >
          Volver a la lista
        </button>
      </div>
    );
  }

  if (!bus) {
    return (
      <div className="alert alert-warning my-4">
        No se encontró el bus solicitado
        <button
          className="btn btn-outline-warning ms-3"
          onClick={() => navigate("/buses")}
        >
          Volver a la lista
        </button>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-sm">
            <div className="card-header bg-primary text-white">
              <div className="d-flex justify-content-between align-items-center">
                <h2 className="h5 mb-0">Detalles del Bus {bus.id}</h2>
                <button
                  className="btn btn-sm btn-light"
                  onClick={() => navigate("/bus")}
                >
                  <i className="bi bi-arrow-left"></i> Volver
                </button>
              </div>
            </div>

            <div className="card-body">
              <div className="row mb-3">
                <div className="col-md-4 fw-bold">Numero de Bus:</div>
                <div className="col-md-8">{bus.numBus}</div>
              </div>

              <div className="row mb-3">
                <div className="col-md-4 fw-bold">Placa:</div>
                <div className="col-md-8">{bus.placa}</div>
              </div>

              <div className="row mb-3">
                <div className="col-md-4 fw-bold">Caracteristicas:</div>
                <div className="col-md-8">{bus.caracteristicas}</div>
              </div>

              {/* <div className="row mb-3">
                <div className="col-md-4 fw-bold">Marca del Vehiculo:</div>
                <div className="col-md-8">{bus.nomMarca}</div>
              </div> */}
              <div className="row mb-3">
                <div className="col-md-4 fw-bold">En Circulacion:</div>
                <div className="col-md-8">
                  <span
                    className={`badge ${
                      bus.isActive ? "bg-success" : "bg-danger"
                    }`}
                  >
                    {bus.isActive ? "Activo" : "Inactivo"}
                  </span>
                </div>
              </div>

              {bus.fechaCreacion && (
                <div className="row mb-3">
                  <div className="col-md-4 fw-bold">Fecha de creación:</div>
                  <div className="col-md-8">
                    {new Date(bus.fechaCreacion).toLocaleDateString("es-ES", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                </div>
              )}

{/*               <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-4">
                <button
                  className="btn btn-outline-secondary me-md-2"
                  onClick={() => navigate("/buses")}
                >
                  Volver a la lista
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => navigate(`/bus/${bus.id}/editar`)}
                >
                  Editar información
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
