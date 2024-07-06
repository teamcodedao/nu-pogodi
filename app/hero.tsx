import Image from 'next/image';

import heroImg from './hero.svg';

export default function Hero() {
  return (
    <div id='home' className='flex relative mt-0 md:-mt-6'>
      <Image
        src={heroImg}
        quality={100}
        priority
        alt=''
        className='w-full object-contain'
      />
      <div className='absolute inset-0 flex items-center px-5 sm:px-10'>
        <h1 className='text-shadow text-4xl text-white sm:text-heading mt-5 sm:mt-20 rotate-[-5deg]'>
          Telegram Wolf
        </h1>
      </div>
    </div>
  );
}
