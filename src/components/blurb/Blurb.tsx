import React from 'react';

interface Props {
  children: React.ReactNode;
}
export default function Blurb({ children }: Props) {
  return <div className='px-3 py-4 text-center rounded-lg bg-emerald-400 bg-opacity-40'>{children}</div>;
}
