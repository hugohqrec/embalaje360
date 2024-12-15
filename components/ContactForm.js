import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    empresa: '',
    telefono: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Aquí iría la lógica de envío del formulario
    console.log('Datos enviados:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
      <div className="grid grid-cols-1 gap-4">
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
          type="email"
          name="email"
          placeholder="Correo Electrónico"
          value={formData.email}
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
        
        <textarea
          name="mensaje"
          placeholder="Escribe tu mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded h-32"
        />
        
        <button 
          type="submit" 
          className="bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition-colors"
        >
          Enviar Mensaje
        </button>
      </div>
    </form>
  );
}