'use client';

import { IconGlobe } from '@tabler/icons';
import { useTheme } from 'next-themes';
import React from 'react';
import { BrandGithub } from 'tabler-icons-react';

import Hightlight from '@/components/common/cards/Highlight';
import DownArrow from '@/components/common/elements/DownArrow';
import TypewriterEffect from '@/components/common/elements/TypewriterEffect';
import Parragraph from '@/components/common/typography/Parragraph';
import HeroCTA from '@/components/home/HeroCTA';

const Hero = () => {
  const { theme } = useTheme();
  return (
    <div className="relative mb-16 mt-6 flex flex-col md:flex-row md:space-x-10">
      <div className="flex flex-[6] items-center ">
        <div>
          <h1 className="text-shadow-md dark:text-gradient text-center text-[40px] font-bold leading-[1.1em] text-primary-700 antialiased sm:text-[50px] md:text-left xl:text-[60px]">
            Hello, I am <br /> Shubham Kashyap.
          </h1>
          <h4 className="text-shadow-sm mt-2 text-center text-xl font-semibold md:text-left md:text-2xl">
            <TypewriterEffect />
          </h4>
          <Parragraph className="centered mt-6">
            I am a full stack web & mobile developer with 4+ years of experience
            and I have worked on projects from website design with Next.js &
            TailwindCSS, MERN e-commerce website,{' '}
            <strong className="text-gray-800 dark:text-gray-200">
              mobile app development
            </strong>
            , blockchain application to{' '}
            <strong className="text-gray-800 dark:text-gray-200">
              MVP development
            </strong>
            . I can provide you full support from ideation, documentation,
            application development to deployment.
          </Parragraph>

          <HeroCTA />
          {/* resume cta */}
          <div className="mt-4 flex items-center justify-center space-x-4 text-sm font-medium text-gray-800 dark:text-gray-600 md:justify-start">
            <a
              href="https://github.com/shubhamkashyapdev"
              target="_blank"
              className="flex cursor-pointer items-center space-x-2 hover:text-primary-300"
              rel="noreferrer"
            >
              <BrandGithub color={theme === 'dark' ? 'white' : 'black'} />{' '}
              @shubhamkashyapdev
            </a>
          </div>
        </div>
      </div>
      <div className="mt-16 flex-1  md:mt-8 md:flex-[5]">
        <h4 className="text-shadow-sm text-gradient w-fit border-primary-700 text-lg font-semibold uppercase tracking-wide">
          Highlights
        </h4>
        <div className="mt-4 flex flex-col space-y-4">
          <Hightlight
            icon={<IconGlobe color={theme === 'dark' ? 'white' : 'black'} />}
            title="Logo Arena"
            subTitle="Next.js, Typescript, Stripe, Vercel"
            tag="LogoArena"
            route={'https://www.logoarena.com/'}
          >
            Logo Arena is a Full-Stack Web Application build with Next.js,
            Typescript, TailwindCSS, Vercel and Stripe integration. This
            Application is a prominent logo design contest platform that
            facilitates businesses in obtaining custom logo designs.
          </Hightlight>
          <Hightlight
            icon={<IconGlobe color={theme === 'dark' ? 'white' : 'black'} />}
            title="Hiding Elephant"
            subTitle="Next.js, Typescript, Stripe, Vercel"
            tag="Hiding Elephant"
            route={'https://www.hidingelephant.com/'}
          >
            Hiding Elephanti is a Full-Stack Web Application built with Next.js,
            Typescript, Typescript, Vercel and Stripe integration. This
            Application is an AI-powered logo design tool tailored for
            professional designers. It allows users to generate unique, custom
            logos from simple text prompts.
          </Hightlight>
        </div>
      </div>
      {/* Down Arrow */}
      <DownArrow />
    </div>
  );
};

export default Hero;
