import React from 'react';
const Administradores = () => {

  const usuarios = [
    { nombre: 'John', apellidos: 'Doe', correo: 'johndoe@example.com', sede: 'Sede 1' },
    { nombre: 'Jane', apellidos: 'Smith', correo: 'janesmith@example.com', sede: 'Sede 2' },
    { nombre: 'Alice', apellidos: 'Johnson', correo: 'alicejohnson@example.com', sede: 'Sede 3' },
  ];

    return (
      <div className="mt-20 mx-10" >

        <h2 className="text-right my-2 text-2xl text-red-800  mr-10">La Bisteca </h2> 
        <h1 className="text-right my-2 text-1xl text-red  mr-10">Pasta & Grill</h1>
        <h3 className="text-left  text-4xl  ml-10">Administrador</h3>
        <table className="min-w-full divide-y divide-gray-200 mt-10 ">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nombre
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Apellidos
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Correo
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Sede
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {usuarios.map((usuario) => (
                <tr key={usuario.correo}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{usuario.nombre}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{usuario.apellidos}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{usuario.correo}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{usuario.sede}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
      </div>
    
    )
  }
  
  export default Administradores