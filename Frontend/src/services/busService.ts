import { Bus } from "../types/bus";
import { ApiResponse } from "../types/ApiResponse";
const API_URL_BASE = "http://localhost:8091/reto-tecnico/api";

export async function obtenerBuses() : Promise<Bus[]> {

    const res = await fetch(API_URL_BASE + "/bus");
    if(!res.ok)
    {
        throw new Error("No se cargaron los buses");
        
    }
    const data:ApiResponse = await res.json();
    console.log(data.content);
    return data.content;
}
// Obtener un bus por su ID
export async function obtenerBusporId(id: number): Promise<Bus> {
    const respuesta = await fetch(`${API_URL_BASE}/bus/${id}`);
    
    if (!respuesta.ok) {
      throw new Error('no se encuentra el bus escogido');
    }
    
    return respuesta.json();
  }