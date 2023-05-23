import React from 'react';
import SectionTitle from '../sectionTitle/SectionTitle';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className='flex flex-col gap-3'>
      <SectionTitle>About</SectionTitle>
      <p className='text-lg '>
        &emsp;Joshua is a full-stack developer based in Tampa, FL. With a passion for solving problems, both physical
        and digital. He began on a law school track but his love for computers and desire to problem-solve for as many
        people as possible led him to a career in web and software development. When not online he loves tinkering as
        much as possible whether that be building computers or playing board games with his family. Currently, he is
        open to new opportunities, freelance work, and collaboration projects. He can be reached{' '}
        <Link href={'/about'} className='text-emerald-400 hover:underline underline-offset-2'>
          here
        </Link>
        .
      </p>
    </section>
  );
}
