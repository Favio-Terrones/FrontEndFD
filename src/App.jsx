import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from "./layout/Login"
import AdministrarPlatillos from "./components/administrador/AdministrarPlatillos"
import LayoutAdministrador from "./layout/LayoutAdministrador"
import AdministradorMesas from "./components/administrador/AdministradorMesas"
import VisualizarReservas from "./components/administrador/VisualizarReservas"
import RevisarEstadisticaReserva from "./components/administrador/RevisarEstadisticaReserva"
import RevisarEstadisticaPlatillo from "./components/administrador/RevisarEstadisticaPlatillo"
import LayoutGerente from "./layout/LayoutGerente"
import RegistrarAdministrador from "./components/gerente/RegistrarAdministrador"
import Administradores from './components/gerente/Administradores'
import RegistrarSede from './components/gerente/RegistrarSede'
import Sedes from './components/gerente/Sedes'
import Reportes from './components/gerente/Reportes'
import AgregarPlatillo from "./components/administrador/AgregarPlatillo"

import { AuthProvider } from "./context/AuthProvider"
import { PlatillosProvider } from "./context/PlatillosProvider"
import { ReservasProvider } from "./context/ReservasProvider"

const App = () => {

  return (
      <>
           <BrowserRouter>
                <AuthProvider>
                 <PlatillosProvider>
                 <ReservasProvider>
                 <Routes>

                         {/* RUTA PUBLICA */}
                         <Route path="/"  element={<Login/>}/>

                         {/* RUTAS ADMINISTRADOR  PROTEGIDA*/}

                         <Route path="/administrador" element={<LayoutAdministrador/>}>
                                   <Route index element={<AdministrarPlatillos/>}/>
                                   <Route path="reservas" element={<VisualizarReservas/>}/>
                                   <Route path="est-reservas" element={<RevisarEstadisticaReserva/>}/>
                                   <Route path="est-platillos" element={<RevisarEstadisticaPlatillo/>}/>
                                   <Route path="agregar-platillo" element={<AgregarPlatillo/>}/>
                         </Route>
                          

                          {/* RUTAS GERENTE  */}
                         <Route path="gerente" element={<LayoutGerente/>}>
                              <Route path="reg-administrador" element={<RegistrarAdministrador/>}/>
                              <Route path="administradores" element={<Administradores/>}/>
                              <Route path="reg-sedes" element={<RegistrarSede/>}/>
                              <Route path="sedes" element={<Sedes/>}/>
                              <Route path="reportes" element={<Reportes/>}/>
          
                         </Route>   


                   </Routes> 
                   </ReservasProvider>
                 </PlatillosProvider> 
             </AuthProvider>
         </BrowserRouter>
      </>
  )
}

export default App