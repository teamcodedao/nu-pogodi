import clsx from 'clsx';

export default function Tokenomics() {
  return (
    <div id='tokenomics' className='mt-20 mx-5 relative'>
      <h2 className='text-heading text-center relative z-20'>tokenomics</h2>
      <div
        className={clsx(
          'rounded-[3rem] mt-5 bg-secondary px-5 py-20 sm:py-32 grid gap-x-10 gap-y-16 grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] font-nerko text-6xl',
          '*:multi-[flex;flex-col;items-center]',
          '[&_p]:text-primary',
          '[&_img]:multi-[h-[140px];object-contain;mb-10]',
          'lg:[&_img]:h-[230px]'
        )}
      >
        <div>
          <img src='/pogodi-3.png' alt='' />
          <h4 className='whitespace-nowrap'>TOTAL SUPPLY</h4>
          <p>1.000.000.000</p>
        </div>
        <div>
          <img src='/pogodi-4.png' alt='' />
          <h4>LP BURNED</h4>
          <p>BURNED</p>
        </div>
        <div>
          <img src='/pogodi-5.png' alt='' />
          <h4>TAX</h4>
          <p>0/0</p>
        </div>
      </div>
      <img
        src='/bat.svg'
        alt=''
        className='absolute top-[25%] left-[25%] scale-x-[-1] w-[70px] hidden md:block'
      />
      <img
        src='/bat.svg'
        alt=''
        className='absolute top-[20%] right-[15%] hidden md:block'
      />
      <img
        src='/pogodi-2.png'
        alt=''
        className='absolute left-10 sm:left-20 top-0 sm:-top-16 object-contain w-[150px] sm:w-[200px]'
      />
    </div>
  );
}
