import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);


const RevisarEstadisticaReserva = () => {
  const data = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
    datasets: [
      {
        label: 'Ventas',
        data: [12, 19, 3, 5, 2, 3], // Valores de las barras
        backgroundColor: 'rgba(75,192,192,0.6)', // Color de las barras
      },
    ],
  };

  // Opciones de configuración del gráfico
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
}

export default RevisarEstadisticaReserva