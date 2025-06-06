import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { SessionProvider } from 'next-auth/react';
import { auth } from '@/auth';
import { AudioProvider } from '@/hooks/use-audio';

const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: {
    default: 'WEBEPAS',
    template: '%s - WEBEPAS',
  },
  description: 'Web pembelajaran IPAS',
  category: 'course',
  twitter: {
    card: 'summary_large_image',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang="en">
      <SessionProvider session={session}>
        <body className={`${inter.className} antialiased`}>
          <AudioProvider>{children}</AudioProvider>
          <Toaster />
        </body>
      </SessionProvider>
    </html>
  );
}
