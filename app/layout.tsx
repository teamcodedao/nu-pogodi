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
  description:
    "Step into the wild with Telegram Wolf, the fun-loving, charismatic leader on TON. This isn't just a meme project. It's a roaring adventure where our animated wolf brings excitement, laughter, and community spirit to new heights.",
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
