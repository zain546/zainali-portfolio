'use client';

import { Project } from '@/components/project';
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { projectsData } from '@/lib/data';

export const Projects = () => {
  const { ref } = useSectionInView('Projects');

  return (
    <section ref={ref} id="projects" className="my-10 scroll-mt-28 md:mb-20">
      <SectionHeading
        heading="My Projects"
        content="Projects I worked on. Each of them containing its own case study."
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projectsData.map((project, index) => (
          <Project key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};
