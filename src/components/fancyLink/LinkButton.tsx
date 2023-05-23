import Link from 'next/link';
import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

interface Props {
  href: string;
  text: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
}

export default function LinkButton({ href, text, target = '_blank' }: Props) {
  return (
    <Link
      target={target}
      className='flex items-center px-2 py-3 text-lg transition-all rounded-lg text-semibold bg-emerald-400 text-zinc-900 hover:bg-emerald-500'
      href={href}
    >
      {text}
      <FiChevronRight />
    </Link>
  );
}
