import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import { i18n, type Locale } from "@/i18n-config";
import "../globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

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
      ? "Lernen Sie Deutsch in Bamako mit zertifizierten Fachkräften. Goethe-Zertifikat A1-B2 Vorbereitung & Karriere in Deutschland."
      : "Apprenez l'allemand à Bamako avec des professionnels certifiés. Préparation Goethe-Zertifikat A1-B2 et insertion en Allemagne.",
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
    <html lang={locale} className={`scroll-smooth ${plusJakarta.variable} ${outfit.variable}`}>
      <body className="font-sans antialiased text-slate-900 bg-[#fafbfe] selection:bg-red-500/20 selection:text-red-950">
        {children}
      </body>
    </html>
  );
}
