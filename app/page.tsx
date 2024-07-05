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
          'sticky top-0 min-[825px]:relative z-50',
          'after:multi-[absolute;z-[-1];top-0;left-0;w-full;h-[calc(100%+14px)];bg-[#0698D7];rounded-bl-[--rounded];rounded-br-[--rounded]]'
        )}
      >
        <div className='bg-secondary py-2 lg:py-5 flex gap-x-10 justify-between items-center rounded-bl-[--rounded] rounded-br-[--rounded]'>
          <Image
            src={logoImg}
            priority
            quality={100}
            alt=''
            className='scale-x-[-1] ml-5 h-[80px] sm:h-[100px] lg:h-[130px] xl:h-[150px] object-contain object-right'
          />
          <Nav className='max-[825px]:hidden' />
          <div className='hidden max-[825px]:multi-[block] mr-5'>
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
