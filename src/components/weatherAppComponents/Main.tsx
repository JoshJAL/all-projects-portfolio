import React from 'react';

interface Props {
  children: React.ReactNode;
}

export default function Main({ children }: Props) {
  return <main className='flex flex-col w-full max-w-3xl px-5 pb-5 mx-auto'>{children}</main>;
}
