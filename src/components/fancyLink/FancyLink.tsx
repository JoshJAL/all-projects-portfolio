import Link from 'next/link';
import React from 'react';

interface Props {
  href: string;
  children: React.ReactNode;
  target?: '_blank' | '_self' | '_parent' | '_top';
}

export default function FancyLink({ href, children, target = '_blank' }: Props) {
  return (
    <Link
      target={target}
      className='flex items-center gap-2 px-3 py-2 transition-all ease-in-out rounded-md hover:bg-emerald-400 hover:bg-opacity-40 w-fit'
      href={href}
    >
      {children}
    </Link>
  );
}
