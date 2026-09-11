import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { i18n, type Locale } from "@/i18n-config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});
import "../globals.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isDe = lang === 'de';

  return {
    title: isDe 
      ? "Deutsch Pro Bamako — Deutsche Sprachschule in Mali" 
      : "Deutsch Pro Bamako — École de Langue Allemande au Mali",
    description: isDe
      ? "Lernen Sie Deutsch in Bamako mit zertifizierten Fachkräften. Goethe-Zertifikat A1-B2 Vorbereitung."
      : "Apprenez l'allemand à Bamako avec des professionnels certifiés. Préparation Goethe-Zertifikat A1-B2.",
  };
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang as Locale;
  
  return (
    <html lang={locale} className={`scroll-smooth ${inter.variable} ${outfit.variable}`}>
      <body className={`font-sans antialiased text-gray-900 bg-white`}>
        {children}
      </body>
    </html>
  );
}
