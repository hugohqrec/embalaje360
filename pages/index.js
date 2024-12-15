import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <Layout title="Embalajes360 - Soluciones Integrales en Embalaje">
      <main>
        <section className="hero bg-blue-600 text-white">
          <h1>Embalajes360: Tu Solución Completa en Embalaje Industrial</h1>
          <p>Distribuimos zuncho, rafia y stretch film de alta calidad</p>
        </section>
        
        <section className="productos">
          <h2>Nuestros Productos Destacados</h2>
          <div className="grid grid-cols-3 gap-4">
            <ProductCard 
              title="Zuncho" 
              imagen="/images/productos/zuncho.jpg"
              descripcion="Soluciones de amarre industrial"
            />
            <ProductCard 
              title="Rafia" 
              imagen="/images/productos/rafia.jpg"
              descripcion="Embalaje resistente y versátil"
            />
            <ProductCard 
              title="Stretch Film" 
              imagen="/images/productos/stretch.jpg"
              descripcion="Protección máxima para tu mercancía"
            />
          </div>
        </section>

        <CTA 
          titulo="Solicita Tu Cotización Hoy" 
          descripcion="Obtén soluciones personalizadas para tu empresa"
        />
      </main>
    </Layout>
  );
}
