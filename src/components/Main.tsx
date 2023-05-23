import React from 'react';

interface Props {
  children: React.ReactNode;
}

export default function Main({ children }: Props) {
  return <main className='flex flex-col w-full max-w-3xl mx-auto pt-[60px] text-zinc-200 px-5'>{children}</main>;
}
