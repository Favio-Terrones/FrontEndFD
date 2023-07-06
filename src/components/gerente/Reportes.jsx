import React ,{useState}from 'react';

import { Bar } from 'react-chartjs-2';

const Reportes = () => {

  const [sede, setSede] = useState('');

  // Datos de ejemplo
  const ventasPorFecha = {
    labels: ['2022-01-01', '2022-01-02', '2022-01-03', '2022-01-04', '2022-01-05'],
    datasets: [
      {
        label: 'Ventas Totales',
        data: [2000, 3500, 2800, 4000, 3200],
        backgroundColor: 'rgba(54, 162, 235, 0.5)', // Color de las barras
      },
    ],
  };

  const platillosMasVendidos = {
    labels: ['Hamburguesa', 'Pizza', 'Tacos', 'Sushi', 'Ensalada'],
    datasets: [
      {
        label: 'Platillos Más Vendidos',
        data: [25, 18, 30, 22, 15],
        backgroundColor: 'rgba(255, 99, 132, 0.5)', // Color de las barras
      },
    ],
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes realizar la lógica para enviar los datos de la sede al servidor
    // por ejemplo, haciendo una solicitud HTTP a una API

    // Limpia el campo del formulario después del envío
    setSede('');
  };

    return (
     
      <div className="mt-20 mx-10" >
        
      <h2 className="text-right my-2 text-2xl text-red-800  mr-10">La Bisteca </h2> 
      <h1 className="text-right my-2 text-1xl text-red  mr-10">Pasta & Grill</h1>
      <h3 className="text-left  text-4xl  ml-10">Reportes</h3>
      <form onSubmit={handleSubmit} className="mx-10 mt-20">
        <div className="mb-4">
          <label htmlFor="sede" className="block mb-2">
            Sede:
          </label>
          <select type="text"
            id="sede"
            value={sede}
            onChange={(event) => setSede(event.target.value)}
            required
            className="w-100 px-3 py-2 border border-gray-300 rounded-md">
          <option>
                 --Seleccionar--
              </option>
              <option>San Isidro</option>
              <option>La Molina</option>
              <option>Miraflores</option>
              <option>Surco</option>
          </select>
        </div>
        
      </form>
      {/* <div>
      <h2>Ventas Totales por Fecha</h2>
      <Bar data={ventasPorFecha} />
      <h2>Platillos Más Vendidos</h2>
      <Bar data={platillosMasVendidos} />
      </div> */}
    </div>
    )
  }
  
  export default Reportes