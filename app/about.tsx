export default function About() {
  return (
    <div id='about' className='mt-16 mx-5'>
      <div className='flex [&_img]:multi-[flex-1;overflow-hidden;object-cover]'>
        <img src='/chain-1.svg' alt='' />
        <h2 className='text-center text-heading shrink-0'>About</h2>
        <img src='/chain-2.svg' alt='' className='rotate-[2deg]' />
      </div>
      <div className='relative mt-2 sm:mt-5 rounded-[2.5rem] bg-secondary px-14 py-10 max-w-[min(100%,940px)] mx-auto leading-10 text-pretty text-xl sm:text-[29px] font-thin'>
        <p className='relative z-20 font-mclaren'>
          Nu, Pogodi!" (Ну, погоди!) is a famous Soviet and Russian animated
          series that became a cultural phenomenon in Russia and many other
          former Soviet republics. Nu, Pogodi!" was created by Vyacheslav
          Kotyonochkin and first aired in 1969. The title translates to "Well,
          Just You Wait! The series follows the comedic adventures of a
          mischievous wolf named Volk (Wolf) and a cleverquick-footed hare named
          Zayats (Hare).
        </p>
        <img
          src='/pogodi-1.png'
          alt=''
          className='absolute right-5 -bottom-[60px] scale-x-[-1] w-[188px]'
        />
        <div className='absolute left-0 top-1/2 -translate-y-1/2'>
          <img src='/pogodi-0.png' alt='' className='w-[200px] -ml-[105%]' />
        </div>
        <div className='absolute right-0 top-1/2 -translate-y-1/2'>
          <p className='uppercase font-medium text-white rotate-[-12deg] text-4xl whitespace-nowrap inline-block ml-[106%]'>
            Nu, Pogodi!
          </p>
        </div>
      </div>
    </div>
  );
}
