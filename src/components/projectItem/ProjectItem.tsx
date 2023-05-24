import React from 'react';
import FancyLink from '../fancyLink/FancyLink';

interface Props {
  href: string;
  target?: '_blank' | '_self';
  title: string;
  description: string;
}

export default function ProjectItem({ href, target = '_self', title, description }: Props) {
  return (
    <FancyLink href={href} target={target}>
      <div className='flex flex-col'>
        <p className='text-lg underline underline-offset-2'>{title}</p>
        <p>{description}</p>
      </div>
    </FancyLink>
  );
}
