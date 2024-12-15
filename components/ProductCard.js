mport Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({ 
  title, 
  imagen, 
  descripcion, 
  href = "/productos" 
}) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105">
      <Image 
        src={imagen} 
        alt={title} 
        width={400} 
        height={300} 
        className="w-full h-48 object-cover"
      />
      
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 text-blue-800">{title}</h3>
        <p className="text-gray-600 mb-4">{descripcion}</p>
        
        <Link 
          href={href} 
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Ver Más
        </Link>
      </div>
    </div>
  );
}