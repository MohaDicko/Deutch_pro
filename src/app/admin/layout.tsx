import '../globals.css';

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
      <body>{children}</body>
    </html>
  );
}
