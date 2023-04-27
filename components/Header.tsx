import Link from 'next/link';

const Header = () => {
  return (
    <nav className='p-3 px-5 bg-slate-700 flex flex-col gap-3 md:flex-row md:justify-between md: items-center'>
      <Link href='/'>
        {' '}
        <h1 className='font-bold text-2xl text-center'>
          NextJS <span className='text-yellow-400'>App</span>
        </h1>
      </Link>
      <ul className='flex justify-center gap-4'>
        <li className='hover:text-yellow-400'>
          <Link href='/'>Home</Link>
        </li>
        <li className='hover:text-yellow-400'>
          <Link href='/about'>About</Link>
        </li>
        <li className='hover:text-yellow-400'>
          <Link href='/articles'>Articles</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Header;
