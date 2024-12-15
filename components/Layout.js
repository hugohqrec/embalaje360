import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children, title = "Embalajes360", description = "Soluciones en embalaje industrial" }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* SEO Optimization */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://embalajes360.com" />
      </Head>
      
      <Navbar />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
}