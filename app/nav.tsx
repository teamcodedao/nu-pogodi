import clsx from 'clsx';

interface NavProps extends React.ComponentProps<'ul'> {
  isHamburger?: boolean;
}

export default function Nav({className, isHamburger, ...restProps}: NavProps) {
  return (
    <ul
      {...restProps}
      className={clsx(className, 'uppercase', '[&_a:hover]:underline', {
        'flex flex-col gap-2 text-white text-3xl [&_a]:block': isHamburger,
        'flex gap-x-5 lg:gap-x-10 xl:gap-x-14 text-2xl sm:text-3xl lg:text-4xl xl:text-[40px] mr-20':
          !isHamburger,
      })}
    >
      <li>
        <a href='#home'>HOME</a>
      </li>
      <li>
        <a href='#community'>COMMUNITY</a>
      </li>
      <li>
        <a href='#about'>About</a>
      </li>
      <li>
        <a href='#tokenomics'>TOKENOMICS</a>
      </li>
    </ul>
  );
}
