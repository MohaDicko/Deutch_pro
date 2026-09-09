import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import B2B from '@/components/B2B';
import Niveaux from '@/components/Niveaux';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <B2B />
      <Niveaux />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
