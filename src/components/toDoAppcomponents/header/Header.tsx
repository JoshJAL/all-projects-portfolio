import Link from 'next/link';
import React from 'react';
import HeaderLink from './HeaderLink';
import ToDoIcon from '../ToDoIcon';

export default function Header() {
  return (
    <header className='fixed z-50 w-full py-2 mx-auto backdrop-blur-md'>
      <nav className='flex max-w-3xl px-5 mx-auto'>
        <div>
          <Link href={'/projects/toDoApp'}>
            <h1 className='flex items-center gap-2 text-xl'>
              <ToDoIcon />
              To Do App
            </h1>
          </Link>
        </div>
        <div className='flex-1' />
        <div>
          <HeaderLink href={'/'}>Home</HeaderLink>
        </div>
      </nav>
    </header>
  );
}
