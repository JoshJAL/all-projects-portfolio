'use client';

import Link from 'next/link';
import React from 'react';
import HeaderLink from './HeaderLink';
import { usePathname } from 'next/navigation';
import MainIcon from '../MainIcon';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className='fixed z-50 w-full py-2 mx-auto backdrop-blur-md'>
      <nav className='flex max-w-3xl px-5 mx-auto'>
        <div>
          <Link href={'/'}>
            <h1 className='flex items-center gap-2 text-xl group'>
              <MainIcon />
              Project Portfolio
            </h1>
          </Link>
        </div>
        <div className='flex-1' />
        <div>
          <HeaderLink href={'/about'} pathname={pathname}>
            About
          </HeaderLink>
        </div>
      </nav>
    </header>
  );
}
