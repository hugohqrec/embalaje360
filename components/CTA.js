import Link from 'next/link';

export default function CTA({ 
  titulo = "Solicita Tu Cotización", 
  descripcion = "Obtén soluciones personalizadas para tu empresa" 
}) {
  return (
    <section className="bg-blue-700 text-white text-center py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">{titulo}</h2>
        <p className="text-xl mb-6">{descripcion}</p>
        
        <div className="flex justify-center space-x-4">
          <Link 
            href="/cotizacion" 
            className="bg-white text-blue-700 px-6 py-3 rounded-full hover:bg-gray-100 transition-colors"
          >
            Solicitar Cotización
          </Link>
          
          <Link 
            href="/contacto" 
            className="border-2 border-white text-white px-6 py-3 rounded-full hover:bg-blue-800 transition-colors"
          >
            Contáctanos
          </Link>
        </div>
      </div>
    </section>
  );
}