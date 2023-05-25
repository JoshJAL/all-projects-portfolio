import Link from 'next/link';
import React from 'react';

interface Props {
  children: React.ReactNode;
  href: string;
}

export default function HeaderLink({ children, href }: Props) {
  return (
    <Link className={`text-lg hover:underline underline-offset-2`} href={href}>
      {children}
    </Link>
  );
}
