import React from 'react';

import { Rubik } from 'next/font/google';

const rubik = Rubik({ subsets: ['latin'] });

interface Props {
  children: React.ReactNode;
}

export default function Body({ children }: Props) {
  return <body className={`flex flex-col w-full ${rubik.className} bg-slate-700 text-zinc-200`}>{children}</body>;
}
