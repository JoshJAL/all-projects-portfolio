import AboutSection from '@/components/aboutSection/AboutSection';
import Blurb from '@/components/blurb/Blurb';
import FancyLink from '@/components/fancyLink/FancyLink';
import LinkButton from '@/components/fancyLink/LinkButton';
import SectionTitle from '@/components/sectionTitle/SectionTitle';
import TitleSection from '@/components/titleSection/TitleSection';

export default function Home() {
  return (
    <>
      <div className='flex flex-col w-full gap-5'>
        <Blurb>
          <h1 className='text-3xl font-semibold'>Welcome to my Project Portfolio!</h1>
        </Blurb>
        <TitleSection />
        <div className='flex justify-center w-full'>
          <LinkButton
            href='https://docs.google.com/document/d/1254COJOSGdsHpjNcSXf-VtdDhUxNAaB2nkCgap_aUQk/edit'
            text='Resume'
          />
        </div>
        <AboutSection />

        <section>
          <SectionTitle>Projects List</SectionTitle>
          <div className='flex flex-col gap-2 pt-2'>
            <FancyLink href='/projects/weatherApp' target='_self'>
              <p className='text-lg'>Weather App</p>
            </FancyLink>
          </div>
        </section>
      </div>
    </>
  );
}
