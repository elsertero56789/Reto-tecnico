
import Bienvenido from './components/PaginaBienvenida'
import ListarBuses from "./components/ListaBuses";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar';
import DetalleBus from './components/DetalleBus';



function App() {

  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        
        <div className="main-content container mt-4">
          <Routes>
            <Route path="/" element={<Bienvenido />} />
            <Route path="/bus" element={<ListarBuses />} />
            <Route path="/bus/:id" element={<DetalleBus />} />
            {/* <Route path="/bus/:id" element={<BusDetail />} />
            <Route path="/search" element={<BusSearch />} /> */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App
