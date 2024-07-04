import clsx from 'clsx';

interface NavProps extends React.ComponentProps<'ul'> {
  isHamburger?: boolean;
}

export default function Nav({className, isHamburger, ...restProps}: NavProps) {
  return (
    <ul
      {...restProps}
      className={clsx(className, '[&_a:hover]:underline', {
        'flex gap-x-20 text-[40px] mr-20': !isHamburger,
      })}
    >
      <li>
        <a href='#'>HOME</a>
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
