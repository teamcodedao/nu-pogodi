import Image from 'next/image';
import clsx from 'clsx';

import logoImg from './logo.png';
import Nav from './nav';

export default function Home() {
  return (
    <div className='max-w-screen-2xl mx-auto'>
      <header
        className={clsx(
          '[--rounded:3rem]',
          'bg-secondary py-5 flex justify-between items-center relative rounded-bl-[--rounded] rounded-br-[--rounded]',
          'after:multi-[absolute;z-[-1];top-0;left-0;w-full;h-[calc(100%+14px)];bg-[#0698D7];rounded-bl-[--rounded];rounded-br-[--rounded]]'
        )}
      >
        <Image
          src={logoImg}
          priority
          quality={100}
          alt=''
          className='scale-x-[-1] h-[150px] object-contain'
        />
        <Nav />
      </header>
    </div>
  );
}
