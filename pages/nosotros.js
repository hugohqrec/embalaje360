import Layout from '../components/Layout';
import Image from 'next/image';

export default function Nosotros() {
  return (
    <Layout title="Embalajes360 - Quiénes Somos">
      <div className="container mx-auto py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-6">Embalajes360: Tu Aliado Logístico</h1>
            <p className="text-xl text-gray-700 mb-4">
              Somos una empresa peruana especializada en soluciones integrales de embalaje industrial, 
              con más de 10 años de experiencia en el mercado.
            </p>
            <p className="text-gray-600 mb-4">
              Nos dedicamos a distribuir zuncho, rafia y stretch film de la más alta calidad, 
              brindando soluciones personalizadas para cada necesidad logística.
            </p>
            <div className="mt-6">
              <h3 className="font-bold mb-2">Nuestros Valores</h3>
              <ul className="list-disc pl-5">
                <li>Calidad garantizada</li>
                <li>Servicio al cliente</li>
                <li>Innovación constante</li>
                <li>Compromiso con la eficiencia</li>
              </ul>
            </div>
          </div>
          
          <div>
            <Image 
              src="/images/nosotros.jpg" 
              alt="Equipo Embalajes360" 
              width={600} 
              height={400} 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}