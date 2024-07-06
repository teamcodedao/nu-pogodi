export default function About() {
  return (
    <div id='about' className='mt-16 overflow-hidden'>
      <div className='flex [&_img]:multi-[object-contain;flex-1;overflow-hidden;object-cover]'>
        <img src='/chain-1.svg' alt='' />
        <h2 className='text-center text-heading shrink-0'>About</h2>
        <img src='/chain-2.svg' alt='' className='rotate-[2deg]' />
      </div>
      <div className='relative mt-2 sm:mt-5 max-w-[min(100%,940px)] mx-auto leading-10 text-pretty text-xl sm:text-[29px] font-thin'>
        <div className='mx-5 rounded-[2.5rem] bg-secondary px-10 sm:px-14 py-6 sm:py-8 '>
          <img src='/bat.svg' alt='' className='ml-12 mb-10' />
          <p className='relative z-20 font-mclaren'>
            Step into the wild with Telegram Wolf, the fun-loving, charismatic
            leader on TON. This isn't just a meme project. It's a roaring
            adventure where our animated wolf brings excitement, laughter, and
            community spirit to new heights.
          </p>
          <div className='flex justify-end mt-10 mb-10'>
            <img src='/bat.svg' alt='' className='mr-40' />
          </div>
          <img
            src='/pogodi-1.png'
            alt=''
            className='absolute right-5 -bottom-[60px] scale-x-[-1] w-[188px]'
          />
          <div className='absolute left-0 top-1/2 -translate-y-1/2'>
            <img
              src='/pogodi-0.png'
              alt=''
              className='w-[200px] -ml-[105%] -rotate-12'
            />
          </div>
        </div>
        <div className='absolute right-0 top-1/2 -translate-y-1/2'>
          <p className='text-shadow uppercase font-medium text-white rotate-[-12deg] text-4xl whitespace-nowrap inline-block ml-[106%]'>
            Telegram Wolf
          </p>
        </div>
      </div>
    </div>
  );
}
