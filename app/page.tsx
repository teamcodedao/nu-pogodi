import Image from 'next/image';
import clsx from 'clsx';

import logoImg from './logo.png';
import Nav from './nav';
import Hamburger from './hamburger';
import Hero from './hero';
import Community from './community';
import About from './about';
import Tokenomics from './tokenomics';

export default function Home() {
  return (
    <div className='max-w-screen-2xl mx-auto overflow-hidden pb-10'>
      <header
        className={clsx(
          '[--rounded:3rem]',
          'bg-secondary py-2 lg:py-5 flex gap-x-10 justify-between items-center relative rounded-bl-[--rounded] rounded-br-[--rounded]',
          'after:multi-[absolute;z-[-1];top-0;left-0;w-full;h-[calc(100%+14px)];bg-[#0698D7];rounded-bl-[--rounded];rounded-br-[--rounded]]'
        )}
      >
        <Image
          src={logoImg}
          priority
          quality={100}
          alt=''
          className='scale-x-[-1] ml-5 h-[100px] sm:h-[130px] lg:h-[150px] object-contain object-right'
        />
        <Nav className='max-[825px]:hidden' />
        <div className='hidden max-[825px]:multi-[block] mr-5'>
          <Hamburger />
        </div>
      </header>
      <Hero />
      <Community />
      <About />
      <Tokenomics />
    </div>
  );
}
