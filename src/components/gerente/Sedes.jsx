import React from 'react';

const Sedes = () => {
    
  const sedes = [
    { sede: 'Sede 1', direccion: 'Calle 123, Ciudad 1' },
    { sede: 'Sede 2', direccion: 'Avenida 456, Ciudad 2' },
    { sede: 'Sede 3', direccion: 'Carrera 789, Ciudad 3' },
  ];

  
    return (
      
      <div className="mt-20 mx-10" >
        
      <h2 className="text-right my-2 text-2xl text-red-800  mr-10">La Bisteca </h2> 
      <h1 className="text-right my-2 text-1xl text-red  mr-10">Pasta & Grill</h1>
      <h3 className="text-left  text-4xl  ml-10">Sedes</h3>
      <table className="min-w-full divide-y divide-gray-200 mt-10">
      <thead className="bg-gray-50">
        <tr>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Sede
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Dirección
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {sedes.map((sede) => (
          <tr key={sede.sede}>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{sede.sede}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{sede.direccion}</div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    )
  }
  
  export default Sedes