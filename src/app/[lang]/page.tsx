import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import B2B from '@/components/B2B';
import Niveaux from '@/components/Niveaux';
import Testimonials from '@/components/Testimonials';
import Partners from '@/components/Partners';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang as Locale;
  const dict = await getDictionary(locale);

  return (
    <main className="min-h-screen">
      <Header dict={dict.header} lang={locale} />
      <Hero dict={dict.hero} />
      <Services dict={dict.services} />
      <B2B dict={dict.b2b} />
      <Niveaux dict={dict.niveaux} />
      <Testimonials dict={dict} />
      <Partners dict={dict.partners} />
      <Contact dict={dict.contact} />
      <WhatsAppButton phoneNumber="+22379875654" />
      <Footer dict={dict} />
    </main>
  );
}
