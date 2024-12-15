import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <Layout>
      <section className="hero bg-blue-600 text-white text-center py-20">
        <h1 className="text-4xl font-bold mb-4">
          Embalajes360: Soluciones Integrales en Embalaje Industrial
        </h1>
        <p className="text-xl mb-8">
          Distribuimos zuncho, rafia y stretch film de alta calidad
        </p>
      </section>

      <section className="productos container mx-auto my-16">
        <h2 className="text-3xl text-center mb-12 font-bold">
          Nuestros Productos Destacados
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <ProductCard 
            title="Zuncho" 
            imagen="/images/productos/zuncho.jpg"
            descripcion="Soluciones de amarre industrial"
            href="/productos/zuncho"
          />
          <ProductCard 
            title="Rafia" 
            imagen="/images/productos/rafia.jpg"
            descripcion="Embalaje resistente y versátil"
            href="/productos/rafia"
          />
          <ProductCard 
            title="Stretch Film" 
            imagen="/images/productos/stretch.jpg"
            descripcion="Protección máxima para tu mercancía"
            href="/productos/stretch-film"
          />
        </div>
      </section>

      <CTA />
    </Layout>
  );
}