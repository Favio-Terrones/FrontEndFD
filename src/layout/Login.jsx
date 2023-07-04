

const Login = () => {
  return (
    <div class="grid grid-cols-1 md:grid-cols-2 h-screen ">
    <div class=" p-4 flex items-center justify-center h-screen">
      <div class="container mx-auto">
        <form class="max-w-md mx-auto p-4">
          <h2 class="text-red-700 md:text-6xl text-3xl">La Bistecca</h2>
          <h3 className="text-2xl my-3">Pasta & Grill</h3>
          <div class="mb-4">
            <label class="block mb-2 font-bold text-gray-700" for="user">Usuario:</label>
            <input class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" type="text" id="user" name="user" placeholder="Ingrese su usuario"/>
          </div>
          <div class="mb-4">
            <label class="block mb-2 font-bold text-gray-700" for="password">Contraseña:</label>
            <input class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" type="password" id="password" name="password" placeholder="Ingrese su contraseña"/>
          </div>
          <div class="flex justify-center">
            <button class="px-4 py-2 text-white bg-red-800 rounded-md hover:bg-red-700 focus:outline-none w-full md:w-60" type="submit">Ingresar</button>
          </div>
        </form>
      </div>
    </div>
    <div class="flex items-center h-screen">
      <img src="/img/banner2.jpeg" class="w-full h-auto md:h-full mx-auto"/>
    </div>
  </div>
  
  );
};

export default Login;
