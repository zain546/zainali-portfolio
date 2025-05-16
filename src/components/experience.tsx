'use client';

import React from 'react';

import { Icons } from '@/components/icons';
import { SectionHeading } from '@/components/section-heading';
import { Timeline } from '@/components/ui/timeline'; // Aceternity Timeline component
import { useSectionInView } from '@/hooks/use-section-in-view';
import { experiencesData } from '@/lib/data';

export const Experience = () => {
  const { ref: sectionRef } = useSectionInView('Experience');

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="my-10 scroll-mt-28 md:mb-20"
    >
      <SectionHeading
        heading="My Experience"
        content="Professional experience that I have accumulated over several years."
      />

      <Timeline
        data={experiencesData.map((exp) => ({
          title: exp.period,
          content: (
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-full border">
                  <Icons.building className="size-5" />
                </div>
                <span className="text-lg font-semibold">{exp.company}</span>
              </div>
              <div>
                <h3 className="text-xl font-medium">{exp.title}</h3>
              </div>
              <p className="text-sm text-neutral-700 dark:text-neutral-300">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-muted-foreground rounded-full border px-3 py-1 text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ),
        }))}
      />
    </section>
  );
};
