import React from 'react';

import { Rubik } from 'next/font/google';

const rubik = Rubik({ subsets: ['latin'] });

interface Props {
  children: React.ReactNode;
}

export default function Body({ children }: Props) {
  return <body className={`flex flex-col w-full ${rubik.className} bg-blue-400 text-zinc-800`}>{children}</body>;
}
