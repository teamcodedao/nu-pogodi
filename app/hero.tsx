import Image from 'next/image';

import heroImg from './hero.svg';

export default function Hero() {
  return (
    <div id='home' className='flex relative mt-0 md:-mt-6'>
      <Image src={heroImg} alt='' className='w-full object-contain' />
      <div className='absolute inset-0 flex items-center px-5 sm:px-10'>
        <h1 className='uppercase text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[100px] mt-5 sm:mt-20 rotate-[-5deg]'>
          Nu, Pogodi!
        </h1>
      </div>
    </div>
  );
}
