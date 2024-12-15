import Layout from '../../components/Layout';
import ProductCard from '../../components/ProductCard';
import { productos } from '../../data/productos';

export default function ProductosIndex() {
  return (
    <Layout title="Embalajes360 - Catálogo de Productos">
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold text-center mb-12">
          Nuestro Catálogo de Productos
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {productos.map(producto => (
            <ProductCard
              key={producto.id}
              title={producto.nombre}
              imagen={`/images/productos/${producto.id}.jpg`}
              descripcion={producto.descripcion}
              href={`/productos/${producto.id}`}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}