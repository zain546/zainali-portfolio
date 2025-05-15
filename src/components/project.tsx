'use client';

import { GlobeIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Icons } from './icons';

import { projectsData } from '@/lib/data';

type TProject = (typeof projectsData)[number];

type TProps = {
  project: TProject;
  index: number;
};

export const Project = ({ project }: TProps) => {
  const { image, title, description, technologies, links } = project;

  return (
    <div className="flex w-[46%] flex-col rounded border p-5">
      <Image
        src={image}
        alt={title}
        height={390}
        width={600}
        className="rounded transition-transform"
      />
      <div className="flex justify-between">
        <h3 className="mt-3 text-xl font-medium">{title}</h3>
        <div className="flex gap-2">
          <Link
            href={links.github}
            aria-label={title}
            target="_blank"
            className="text-muted-foreground mt-3 flex items-center rounded-full border border-black bg-zinc-800 px-3 py-1 text-sm text-white
             dark:border-white dark:bg-zinc-200 dark:text-black"
          >
            <Icons.githubOutline className="mr-2 size-4" />
            Source
          </Link>
          <Link
            href={links.preview}
            aria-label={title}
            target="_blank"
            className=" mt-3 flex items-center rounded-full border border-black bg-zinc-800 px-3
             py-1 text-sm text-white
             dark:border-white dark:bg-zinc-200 dark:text-black "
          >
            <GlobeIcon className="mr-2 size-4" />
            Live Site
          </Link>
        </div>
      </div>
      <p className="text-muted-foreground mb-2 mt-3">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span className="rounded-full border px-3 py-1 text-sm" key={tech}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};
