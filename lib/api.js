import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchProductos = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/productos`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener productos:', error);
    return [];
  }
};

export const enviarCotizacion = async (datos) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/cotizaciones`, datos);
    return response.data;
  } catch (error) {
    console.error('Error al enviar cotización:', error);
    return null;
  }
};

export const consultarDisponibilidad = async (productoId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/stock/${productoId}`);
    return response.data;
  } catch (error) {
    console.error('Error al consultar disponibilidad:', error);
    return null;
  }
};