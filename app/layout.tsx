import type {Metadata} from 'next';
import {Luckiest_Guy} from 'next/font/google';
import './globals.css';

const font = Luckiest_Guy({
  weight: ['400'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Nu, Pogodi!',
  description: 'Nu, Pogodi!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={font.className}>{children}</body>
    </html>
  );
}
