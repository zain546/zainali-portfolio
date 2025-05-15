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
    <div className="flex h-full flex-col justify-between rounded border p-4 shadow-sm transition-shadow hover:shadow-md ">
      {/* Fixed Aspect Ratio Image */}
      <div className="aspect-video w-full overflow-hidden rounded">
        <Image
          src={image}
          alt={title}
          width={600}
          height={390}
          className="object-fit size-full"
        />
      </div>

      {/* Title & Description */}
      <div className="mt-4 flex flex-col gap-2">
        <h3 className="text-xl font-medium">{title}</h3>
        <p className="text-muted-foreground line-clamp-3 text-sm">
          {description}
        </p>
      </div>

      {/* Technologies */}
      <div className="mt-4 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span className="rounded-full border px-3 py-1 text-sm" key={tech}>
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="mt-4 flex gap-2">
        <Link
          href={links.github}
          aria-label={`${title} GitHub`}
          target="_blank"
          className="text-muted-foreground flex items-center rounded-full border border-black bg-zinc-800 px-3 py-1 text-sm text-white dark:border-white dark:bg-zinc-200 dark:text-black"
        >
          <Icons.githubOutline className="mr-2 size-4" />
          Source
        </Link>
        <Link
          href={links.preview}
          aria-label={`${title} Live Preview`}
          target="_blank"
          className="flex items-center rounded-full border border-black bg-zinc-800 px-3 py-1 text-sm text-white dark:border-white dark:bg-zinc-200 dark:text-black"
        >
          <GlobeIcon className="mr-2 size-4" />
          Live Site
        </Link>
      </div>
    </div>
  );
};
