/* eslint-disable @next/next/no-img-element */
'use client';

import { SectionHeading } from './section-heading';

import { skillsData } from '@/lib/data';

export const Skills = () => {
  return (
    <section
      aria-labelledby="skills"
      id="skills"
      className="my-14 flex w-full scroll-mt-28 flex-col items-center md:mb-10 "
    >
      <SectionHeading
        heading="My Skills"
        content="Tools & Technologies I Work With. From foundational languages to advanced frameworks and deployment tools."
      />
      <div className="mt-10 flex w-screen flex-wrap gap-2 px-5 sm:justify-center sm:px-0 md:mt-14 md:w-full">
        {skillsData.map((skill, index) => (
          <img key={index} src={skill.src} alt={skill.alt} />
        ))}
      </div>
    </section>
  );
};
