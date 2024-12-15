import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Embalajes360</title>
        <meta name="description" content="Soluciones de embalaje para tu empresa." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.logo}>Embalajes360</div>
        <nav>
          <ul className={styles.navbar}>
            <li><a href="#about">Nosotros</a></li>
            <li><a href="#services">Servicios</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>Soluciones de Embalaje Innovadoras</h1>
          <p>Descubre cómo optimizamos tus procesos de embalaje.</p>
          <button>Ver Servicios</button>
        </section>

        <section id="about" className={styles.section}>
          <h2>Acerca de Nosotros</h2>
          <p>Somos líderes en la industria de embalajes, ofreciendo soluciones personalizadas para cada cliente.</p>
        </section>

        <section id="services" className={styles.section}>
          <h2>Nuestros Servicios</h2>
          <div className={styles.services}>
            <div className={styles.serviceItem}>
              <h3>Embalajes Personalizados</h3>
              <p>Diseñamos soluciones de embalaje que se ajustan a tus necesidades.</p>
            </div>
            <div className={styles.serviceItem}>
              <h3>Asesoría Profesional</h3>
              <p>Te ayudamos a optimizar costos y recursos en embalaje.</p>
            </div>
          </div>
        </section>

        <section id="contact" className={styles.section}>
          <h2>Contáctanos</h2>
          <form className={styles.contactForm}>
            <input type="text" placeholder="Nombre" required />
            <input type="email" placeholder="Correo Electrónico" required />
            <textarea placeholder="Mensaje" required></textarea>
            <button type="submit">Enviar</button>
          </form>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 Embalajes360. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}