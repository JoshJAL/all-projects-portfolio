import Image from 'next/image';
import React from 'react';

export default function TitleSection() {
  return (
    <section className='flex flex-col items-center w-full md:flex-row'>
      <div className='flex flex-col w-full md:w-1/2'>
        <h2 className='text-3xl font-semibold text-center md:text-left'>Joshua Levine</h2>
        <h3 className='text-xl text-center md:text-left'>Web and Software Developer</h3>
        <div>
          <ul className='px-6 text-lg list-disc'>
            <li>Bachelors Degree from the University of Central Florida</li>
            <li>Bilingual: English/Spanish</li>
          </ul>
        </div>
      </div>
      <div className='flex items-center justify-center w-full py-3 md:justify-end md:w-1/2 md:py-0'>
        <Image
          src={'/images/happyHeadshot.jpg'}
          height={361}
          width={245}
          alt='My Profile Picture'
          className='w-1/3 border-2 rounded-full border-emerald-400'
        />
      </div>
    </section>
  );
}
