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
    <div className='max-w-screen-2xl mx-auto pb-10'>
      <header
        className={clsx(
          '[--rounded:3rem]',
          'sticky top-0 min-[750px]:relative z-50',
          'after:multi-[absolute;z-[-1];top-0;left-0;w-full;h-[calc(100%+14px)];bg-[#0698D7];rounded-bl-[--rounded];rounded-br-[--rounded]]'
        )}
      >
        <div className='bg-secondary py-2 lg:py-5 flex gap-x-10 justify-between items-center rounded-bl-[--rounded] rounded-br-[--rounded]'>
          <Image
            src={logoImg}
            priority
            quality={100}
            alt=''
            className='scale-x-[-1] ml-5 sm:ml-12 lg:ml-20 xl:ml-28 h-[70px] sm:h-[90px] lg:h-[120px] xl:h-[130px] object-contain object-right'
          />
          <Nav className='max-[750px]:hidden' />
          <div className='hidden max-[750px]:multi-[block] mr-5'>
            <Hamburger />
          </div>
        </div>
      </header>
      <Hero />
      <Community />
      <About />
      <Tokenomics />
    </div>
  );
}
