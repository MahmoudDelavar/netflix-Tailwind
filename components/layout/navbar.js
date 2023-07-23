import { signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { BiSearch } from 'react-icons/bi';
import { BsBellFill } from 'react-icons/bs';

const Navbar = () => {
  return (
    <nav>
      <div className='container flex justify-between'>
        <div className='flex items-center space-x-2 md:space-x-10'>
          <Link passHref href='/'>
            Logo
          </Link>

          <ul className='hidden space-x-4 md:flex'>
            <li className='headerLink cursor-pointer text-white hover:text-white'>
              home
            </li>
            <li className='headerLink'>TV Shows</li>
            <li className='headerLink'>Movies</li>
            <li className='headerLink'>new & Popular</li>
            <li className='headerLink'>My List</li>
            <li className='headerLink'>TV Shows</li>
          </ul>
        </div>

        <div className='flex items-center space-x-4 text-sm font-light'>
          <BiSearch className='hidden lg:inline' />
          <p className='hidden lg:inline'>kids</p>
          <BsBellFill className='h-6 w-6' />

          <Image
            src='/singout.jpg'
            width={30}
            height={30}
            className='cursor-pointer rounded w-auto h-auto'
            onClick={() => signOut()}
            alt='logo'
            priority
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
