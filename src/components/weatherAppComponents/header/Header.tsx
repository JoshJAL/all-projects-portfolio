import Link from 'next/link';
import React from 'react';
import HeaderLink from './HeaderLink';
import WeatherIcon from '../WeatherIcon';

export default function Header() {
  return (
    <header className='fixed z-50 w-full py-2 mx-auto backdrop-blur-md'>
      <nav className='flex max-w-3xl px-5 mx-auto'>
        <div>
          <Link href={'/projects/weatherApp'}>
            <h1 className='flex items-center gap-2 text-xl'>
              <WeatherIcon /> Weather App
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
