import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from "./layout/Login"
import AdministrarPlatillos from "./components/administrador/AdministrarPlatillos"
import LayoutAdministrador from "./layout/LayoutAdministrador"
import AdministradorMesas from "./components/administrador/AdministradorMesas"
import VisualizarReservas from "./components/administrador/VisualizarReservas"
import RevisarEstadisticaReserva from "./components/administrador/RevisarEstadisticaReserva"
import RevisarEstadisticaPlatillo from "./components/administrador/RevisarEstadisticaPlatillo"


const App = () => {
  return (
      <>
         <BrowserRouter>
              <Routes>
                   <Route path="/"  element={<Login/>}/>
                   <Route path="administrador" element={<LayoutAdministrador/>}>
                        <Route path="platillos" element={<AdministrarPlatillos/>}/>
                        <Route path="mesas" element={<AdministradorMesas/>}/>
                        <Route path="reservas" element={<VisualizarReservas/>}/>
                        <Route path="est-reservas" element={<RevisarEstadisticaReserva/>}/>
                        <Route path="est-platillos" element={<RevisarEstadisticaPlatillo/>}/>
                   </Route> 
              </Routes>
         </BrowserRouter>
      </>
  )
}

export default App