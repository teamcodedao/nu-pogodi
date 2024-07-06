import type {Metadata} from 'next';
import {Luckiest_Guy, Nerko_One, McLaren} from 'next/font/google';
import './globals.css';
import clsx from 'clsx';

const font = Luckiest_Guy({
  weight: ['400'],
  subsets: ['latin'],
});

const nerkoOneFont = Nerko_One({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--nerko-one-font',
});

const mcLarenFont = McLaren({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--mclaren-font',
});

export const metadata: Metadata = {
  title: 'Telegram Wolf',
  description: 'Telegram Wolf',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={clsx(
          font.className,
          nerkoOneFont.variable,
          mcLarenFont.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
