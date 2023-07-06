import React , { useState }from 'react';

const RegistrarSede = () => {

    const [nombre, setNombre] = useState('');
    const [direccion, setDireccion] = useState('');
    const [foto, setFoto] = useState('');

    const handleAgregar = () => {
      // Lógica para agregar un administrador
    };

    const handleActualizar = () => {
      // Lógica para actualizar un administrador
    };

    const handleEliminar = () => {
      // Lógica para eliminar un administrador
    };
    
    const handleSubmit = (event) => {
      event.preventDefault();
      // Aquí puedes realizar la lógica para enviar los datos del administrador al servidor
      // por ejemplo, haciendo una solicitud HTTP a una API

      // Limpia los campos del formulario después del envío
      setNombre('');
      setDireccion('');
      setFoto('');
    };
    return (
      
      <div className="mt-20 mx-10" >
        
      <h2 className="text-right my-2 text-2xl text-red-800  mr-10">La Bisteca </h2> 
      <h1 className="text-right my-2 text-1xl text-red  mr-10">Pasta & Grill</h1>
      <h3 className="text-left  text-4xl  ml-10">RegistrarSede</h3>
      <form onSubmit={handleSubmit} className="mx-10 mt-20">
      <div className="grid grid-cols-2 gap-4 mt-10">
        <div>
          <label htmlFor="nombre" className="block mb-2">
            Nombre:
          </label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(event) => setNombre(event.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="direccion" className="block mb-2">
            Dirección:
          </label>
          <input
            type="text"
            id="direccion"
            value={direccion}
            onChange={(event) => setDireccion(event.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="foto" className="block mb-2">
            Foto:
          </label>
          <input
            type="file"
            id="foto"
            value={foto}
            onChange={(event) => setFoto(event.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        </div>
        <div className="flex justify-center mt-10 text-4x1">
          <button
            type="submit"
            className="mr-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            onClick={handleAgregar}
          >
            Agregar
          </button>
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            onClick={handleActualizar}
          >
            Actualizar
          </button>
          <button
            type="button"
            className="ml-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            onClick={handleEliminar}
          >
            Eliminar
          </button>
        </div>
      </form>
    </div>
    )
  }
  
  export default RegistrarSede