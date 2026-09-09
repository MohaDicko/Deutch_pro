import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Deutsch Pro Bamako — École de Langue Allemande au Mali",
  description: "Apprenez l'allemand à Bamako avec des professionnels certifiés. Préparation Goethe-Zertifikat A1-B2, accompagnement visa Allemagne, orientation Ausbildung.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`font-sans antialiased text-gray-900 bg-white`}>
        {children}
      </body>
    </html>
  );
}
