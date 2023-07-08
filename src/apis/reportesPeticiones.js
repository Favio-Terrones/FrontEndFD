import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const config = {
  headers: {
    Authorization: `Bearer ${cookies.get("token")}`,
  },
};

class reportesPeticiones {
  constructor() {}

  obtenerPlatillosMasVendidos = async () => {
    try {
      const respuesta = await axios.get(
        `${import.meta.env.VITE_APP_API_URL}/ne-gestion-reportes/bstk/servicio-al-cliente/v1/platillos-mas-vendidos`,
        {
          params: {
            categorias: [],
          },
          headers: config.headers,
        }
      );
      return respuesta.data;
    } catch (error) {
      console.log(error);
      throw new Error('Error al obtener los platillos más vendidos');
    }
  };
}

export default reportesPeticiones;
