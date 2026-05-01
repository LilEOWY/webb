import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from 'sonner';

export const metadata: Metadata = {
  title: 'saas-starter-kit',
  description: 'Production-ready SaaS starter kit with Next.js + Supabase',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en'>
      <body className='antialiased'>{children}<Toaster richColors position='top-right' /></body>
    </html>
  );
}
