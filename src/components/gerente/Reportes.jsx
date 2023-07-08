import React, { useState, useEffect } from 'react';
import { Chart, registerables } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import reportesPeticiones from '../../apis/reportesPeticiones';

Chart.register(...registerables);

const peticiones = new reportesPeticiones();

const Reportes = () => {
  const [sede, setSede] = useState('');
  const [platillosVendidos, setPlatillosVendidos] = useState(null);

  const obtenerPlatillosMasVendidos = async () => {
    try {
      const respuesta = await peticiones.obtenerPlatillosMasVendidos();
      const datosOrdenados = respuesta.datos.sort((a, b) => b.cantidad - a.cantidad);
      const top3Platillos = datosOrdenados.slice(0, 3);
      const datos = {
        labels: top3Platillos.map((platillo) => platillo.nombre_platillo),
        datasets: [
          {
            label: 'Cantidad Vendida',
            data: top3Platillos.map((platillo) => platillo.cantidad),
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
          },
        ],
      };
      setPlatillosVendidos(datos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerPlatillosMasVendidos();
    console.log(ventasPorFecha)
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSede('');
  };
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
  
  const options = {
    scales: {
      y: {
        suggestedMin: 0, // Valor mínimo del eje y
        suggestedMax: 10, // Valor máximo del eje y (ajusta según tus datos)
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="mt-20 mx-10">
      <h2 className="text-right my-2 text-2xl text-red-800 mr-10">La Bisteca</h2>
      <h1 className="text-right my-2 text-1xl text-red mr-10">Pasta & Grill</h1>
      <h3 className="text-left text-4xl ml-10">Reportes</h3>
      <form onSubmit={handleSubmit} className="mx-10 mt-20">
        <div className="mb-4">
          <label htmlFor="sede" className="block mb-2">
            Sede:
          </label>
          <select
            type="text"
            id="sede"
            value={sede}
            onChange={(event) => setSede(event.target.value)}
            required
            className="w-100 px-3 py-2 border border-gray-300 rounded-md"
          >
            <option>--Seleccionar--</option>
            <option>San Isidro</option>
            <option>La Molina</option>
            <option>Miraflores</option>
            <option>Surco</option>
          </select>
        </div>
      </form>

      <div style={{ width: '500px', height: '400px' }} className="display flex mt-10">
        <h2 className="mr-5">Ventas Totales por Fecha</h2>
        <Bar data={ventasPorFecha} options={options} width={500} height={400} style={{ width: '500px', height: '400px' }} className="mx-2" />
        <h2 className="mr-5">Platillos Más Vendidos</h2>
        {platillosVendidos ? (
          <Bar
            data={platillosVendidos}
            options={options}
            width={500}
            height={400}
            style={{ width: '500px', height: '400px' }}
            className="mx-2"
          />
        ) : (
          <p>Cargando datos...</p>
        )}
      </div>
    </div>
  );
};

export default Reportes;