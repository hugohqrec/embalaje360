import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <Image 
            src="/images/logo.png" 
            alt="Embalajes360 Logo" 
            width={200} 
            height={60}
          />
          <p className="mt-4 text-sm">
            Soluciones integrales en embalaje industrial
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-4">Productos</h4>
          <ul>
            <li><Link href="/productos/zuncho" className="hover:text-yellow-300">Zuncho</Link></li>
            <li><Link href="/productos/rafia" className="hover:text-yellow-300">Rafia</Link></li>
            <li><Link href="/productos/stretch-film" className="hover:text-yellow-300">Stretch Film</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Empresa</h4>
          <ul>
            <li><Link href="/nosotros" className="hover:text-yellow-300">Nosotros</Link></li>
            <li><Link href="/servicios" className="hover:text-yellow-300">Servicios</Link></li>
            <li><Link href="/contacto" className="hover:text-yellow-300">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Contacto</h4>
          <p>
            Teléfono: +51 987 654 321
            <br />
            Email: ventas@embalajes360.com
            <br />
            Dirección: Av. Industrial 123, Lima, Perú
          </p>
        </div>
      </div>

      <div className="text-center mt-8 pt-4 border-t border-blue-700">
        <p>© 2024 Embalajes360. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}