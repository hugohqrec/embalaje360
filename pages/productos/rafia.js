import Layout from '../../components/Layout';
import { productos } from '../../data/productos';

export default function RafiaPage() {
  const producto = productos.find(p => p.id === 'rafia');

  return (
    <Layout title={`Embalajes360 - ${producto.nombre}`}>
      <div className="container mx-auto py-12 grid md:grid-cols-2 gap-8">
        <div>
          <img 
            src={`/images/productos/${producto.id}.jpg`} 
            alt={producto.nombre} 
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        
        <div>
          <h1 className="text-4xl font-bold mb-4">{producto.nombre}</h1>
          <p className="text-xl text-gray-600 mb-6">{producto.descripcion}</p>
          
          <div className="mb-6">
            <h3 className="font-bold mb-2">Categorías:</h3>
            <ul className="list-disc pl-5">
              {producto.categorias.map(cat => (
                <li key={cat}>{cat}</li>
              ))}
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold mb-2">Presentaciones:</h3>
            <ul className="list-disc pl-5">
              {producto.presentaciones.map(pres => (
                <li key={pres}>{pres}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-2">Usos Principales:</h3>
            <ul className="list-disc pl-5">
              {producto.usos.map(uso => (
                <li key={uso}>{uso}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}