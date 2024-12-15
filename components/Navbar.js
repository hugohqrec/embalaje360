import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const menuItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Productos', href: '/productos' },
    { label: 'Servicios', href: '/servicios' },
    { label: 'Nosotros', href: '/nosotros' },
    { label: 'Contacto', href: '/contacto' }
  ];

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image 
            src="/images/logo.png" 
            alt="Embalajes360 Logo" 
            width={150} 
            height={50} 
          />
        </Link>

        <ul className="flex space-x-6">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link 
                href={item.href} 
                className="hover:text-yellow-300 transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}