import '../globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata = {
  title: 'Admin Portal - Deutsch Pro',
  description: 'Admin Portal for Deutsch Pro Bamako',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
