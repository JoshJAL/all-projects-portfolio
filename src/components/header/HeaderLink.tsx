import Link from 'next/link';
import React from 'react';

interface Props {
  children: React.ReactNode;
  href: string;
  pathname: string;
}

export default function HeaderLink({ children, href, pathname }: Props) {
  return (
    <Link
      className={`text-lg hover:underline underline-offset-2 ${pathname === href ? 'underline font-semibold' : ''}`}
      href={href}
    >
      {children}
    </Link>
  );
}
