// app/layout.tsx
import './globals.css';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

export const metadata = {
  title: 'Housing Authority Attendance System',
  description: 'Advanced attendance management system for federal government employees',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 p-4 container mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
