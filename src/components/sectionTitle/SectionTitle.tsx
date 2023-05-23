import React from 'react';

interface Props {
  children: React.ReactNode;
}

export default function SectionTitle({ children }: Props) {
  return (
    <h1 className='text-xl font-semibold underline underline-offset-4 decoration-emerald-400 decoration-4'>
      {children}
    </h1>
  );
}
