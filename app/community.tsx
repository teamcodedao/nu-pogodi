import clsx from 'clsx';

export default function Community() {
  return (
    <div id='community' className='mt-8 max-2xl:px-5'>
      <h2 className='text-heading text-center'>Community</h2>
      <div
        className={clsx(
          'rounded-[3rem] bg-secondary mt-4 sm:mt-8 py-10 grid gap-x-10 gap-y-5 sm:gap-y-10 grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))]',
          '*:multi-[flex;flex-col;justify-center]',
          'text-[40px] text-center',
          '[&_img]:multi-[h-[130px];object-contain]',
          '[&_p]:multi-[font-nerko;text-primary]',
          '[&_p:hover]:underline'
        )}
      >
        <a href={process.env.NEXT_PUBLIC_TWITTER_URL} target='_twitter'>
          <img src='/twitter.png' alt='' />
          <h4>TWITTER</h4>
          <p>FOLLOW US</p>
        </a>
        <a href={process.env.NEXT_PUBLIC_TELEGRAM_URL} target='_tele'>
          <img src='/telegram.png' alt='' className='scale-150' />
          <h4>TELEGRAm</h4>
          <p>JOIN NOW</p>
        </a>
        <a href={process.env.NEXT_PUBLIC_DEX_URL} target='_dex'>
          <img src='/dex.png' alt='' />
          <h4>DEXTOOL</h4>
          <p>JOIN NOW</p>
        </a>
        <a href={process.env.NEXT_PUBLIC_DEXS_URL} target='_dexs'>
          <img src='/dexs.png' alt='' className='scale-150' />
          <h4>DEXSCREENER</h4>
          <p>JOIN NOW</p>
        </a>
        <a href={process.env.NEXT_PUBLIC_GECKO_URL} target='_gecko'>
          <img src='/gecko.png' alt='' />
          <h4>COINGECKO</h4>
          <p>COMING SOON...</p>
        </a>
        <a href={process.env.NEXT_PUBLIC_MARKETCAP_URL} target='_mkc'>
          <img src='/marketcap.png' alt='' className='scale-75' />
          <h4>COINMARKETCAP</h4>
          <p>COMING SOON...</p>
        </a>
      </div>
    </div>
  );
}
