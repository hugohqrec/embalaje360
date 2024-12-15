import Layout from '../components/Layout';

export default function Servicios() {
  const servicios = [
    {
      titulo: 'Distribución Nacional',
      descripcion: 'Entrega de productos de embalaje a nivel nacional con rapidez y eficiencia.',
      icono: '🚚'
    },
    {
      titulo: 'Asesoría Técnica',
      descripcion: 'Consultoría especializada para encontrar la mejor solución de embalaje para tu empresa.',
      icono: '🤝'
    },
    {
      titulo: 'Personalización',
      descripcion: 'Soluciones de embalaje adaptadas a las necesidades específicas de tu negocio.',
      icono: '✂️'
    }
  ];

  return (
    <Layout title="Embalajes360 - Nuestros Servicios">
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Nuestros Servicios</h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          {servicios.map((servicio, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow"
            >
              <div className="text-6xl mb-4">{servicio.icono}</div>
              <h3 className="text-2xl font-bold mb-4">{servicio.titulo}</h3>
              <p className="text-gray-600">{servicio.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}