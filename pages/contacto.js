import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';

export default function Contacto() {
  return (
    <Layout title="Embalajes360 - Contáctanos">
      <div className="container mx-auto py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h1 className="text-4xl font-bold mb-6">Contáctanos</h1>
            <p className="text-xl text-gray-700 mb-6">
              ¿Tienes alguna consulta o necesitas una cotización? 
              Estamos listos para ayudarte.
            </p>
            
            <div className="mb-6">
              <h3 className="font-bold">Información de Contacto</h3>
              <p>Teléfono: +51 987 654 321</p>
              <p>Email: ventas@embalajes360.com</p>
              <p>Dirección: Av. Industrial 123, Lima, Perú</p>
            </div>
            
            <div className="mb-6">
              <h3 className="font-bold">Horario de Atención</h3>
              <p>Lunes a Viernes: 8:00 am - 6:00 pm</p>
              <p>Sábados: 9:00 am - 1:00 pm</p>
            </div>
          </div>
          
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </Layout>
  );
}