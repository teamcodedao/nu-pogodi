export default function About() {
  return (
    <div id='about' className='mt-16 mx-5'>
      <h2 className='text-center text-heading'>About</h2>
      <div className='relative mt-2 sm:mt-5 rounded-[2.5rem] bg-secondary px-14 py-10 max-w-[min(100%,940px)] mx-auto font-mclaren leading-10 text-pretty text-xl sm:text-[29px] font-thin'>
        <p className='relative z-20'>
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
      </div>
    </div>
  );
}
