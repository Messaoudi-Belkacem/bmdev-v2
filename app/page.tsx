import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 dark:bg-black font-sans">
      <Header />
      <main className="w-full max-w-3xl mx-auto flex-1 px-6 py-16 space-y-24">
        <section id="home" aria-label="Home"><Hero /></section>
        <section id="projects" aria-label="Projects"><Projects /></section>
        <section id="about" aria-label="About"><About /></section>
        <section id="contact" aria-label="Contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
}