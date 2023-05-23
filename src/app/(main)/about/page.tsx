import FancyLink from '@/components/fancyLink/FancyLink';
import SectionTitle from '@/components/sectionTitle/SectionTitle';
import React from 'react';

import { AiFillLinkedin } from 'react-icons/ai';
import { IoLogoGoogle, IoLogoGithub, IoLogoInstagram, IoLogoTwitter } from 'react-icons/io5';
import { HiOutlineDocumentText } from 'react-icons/hi';

export default function page() {
  return (
    <div>
      <SectionTitle>Contact Information</SectionTitle>
      <p className='py-4 text-lg'>
        &emsp;I&#39;m currently looking for new opportunities. If you&#39;re interested in reaching out to me for work,
        to collaborate on a project, or simply to connect please feel free to click on one of the links listed below!
        The best way to reach me is via email of LinkedIn. I do not post much on social media, but I do promise that tI
        am actively engaged with anyone who reaches out!
      </p>
      <div className='flex flex-col gap-2'>
        <FancyLink href='https://www.linkedin.com/in/josh-lev/'>
          <AiFillLinkedin /> Joshua Levine
        </FancyLink>
        <FancyLink href='mailto:JoshuaAlexanderLevine@gmail.com'>
          <IoLogoGoogle /> Gmail
        </FancyLink>
        <FancyLink href='https://www.github.com/joshjal'>
          <IoLogoGithub /> @JoshJAL
        </FancyLink>
        <FancyLink href='https://www.instagram.com/joshuaalevine3/'>
          <IoLogoInstagram /> @JoshuaALevine3
        </FancyLink>
        <FancyLink href='https://twitter.com/MyGovtName'>
          <IoLogoTwitter /> @MyGovtName
        </FancyLink>
        <FancyLink href='https://docs.google.com/document/d/1254COJOSGdsHpjNcSXf-VtdDhUxNAaB2nkCgap_aUQk/edit'>
          <HiOutlineDocumentText /> Resume
        </FancyLink>
      </div>
    </div>
  );
}
