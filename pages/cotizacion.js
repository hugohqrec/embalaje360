import { useState } from 'react';
import Layout from '../components/Layout';
import { productos } from '../data/productos';

export default function Cotizacion() {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    producto: '',
    cantidad: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de envío de cotización
    console.log('Datos de cotización:', formData);
  };

  return (
    <Layout title="Embalajes360 - Solicitar Cotización">
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold text-center mb-12">
          Solicita Tu Cotización
        </h1>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre Completo"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded"
            />
            
            <input
              type="text"
              name="empresa"
              placeholder="Empresa"
              value={formData.empresa}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded"
            />
            
            <input
              type="email"
              name="email"
              placeholder="Correo Electrónico"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded"
            />
            
            <input
              type="tel"
              name="telefono"
              placeholder="Teléfono"
              value={formData.telefono}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded"
            />
            
            <select
              name="producto"
              value={formData.producto}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded"
            >
              <option value="">Selecciona un Producto</option>
              {productos.map(producto => (
                <option key={producto.id} value={producto.id}>
                  {producto.nombre}
                </option>
              ))}
            </select>
            
            <input
              type="number"
              name="cantidad"
              placeholder="Cantidad"
              value={formData.cantidad}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded"
            />
            
            <textarea
              name="mensaje"
              placeholder="Detalles adicionales"
              value={formData.mensaje}
              onChange={handleChange}
              className="w-full p-3 border rounded md:col-span-2 h-32"
            />
          </div>
          
          <button 
            type="submit" 
            className="w-full mt-6 bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition-colors"
          >
            Enviar Solicitud de Cotización
          </button>
        </form>
      </div>
    </Layout>
  );
}