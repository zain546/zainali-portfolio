'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

import { Button } from '@/components/button';
import { Icons } from '@/components/icons';
import { ColourfulText } from '@/components/ui/colourful-text';
import { useSectionInView } from '@/hooks/use-section-in-view';
export const Intro = () => {
  const { ref } = useSectionInView('Home');

  return (
    <section
      ref={ref}
      id="home"
      className="my-10 flex scroll-mt-96 flex-col items-center gap-5 text-center sm:mt-28"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: 'tween',
          duration: 0.2,
        }}
      >
        <Link
          href="#contact"
          className="flex items-center gap-3 rounded border px-3 py-1"
        >
          <span className="relative flex size-2">
            <span className="absolute flex size-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative flex size-2 rounded-full bg-green-400"></span>
          </span>
          <span className="font-mono text-sm">Available for work!</span>
        </Link>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-heading max-w-3xl text-4xl font-extrabold md:text-5xl"
      >
        Hi I&#39;m{' '}
        <span className="bg-gradient-to-r from-rose-700 to-pink-600 bg-clip-text text-transparent">
          {/* <motion.img
            src="https://www.ensembletech.in/wp-content/uploads/2018/07/portfolio-background.jpg"
            className="pointer-events-none absolute inset-0 size-full object-cover [mask-image:radial-gradient(circle,transparent,black_80%)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 1 }}
          /> */}
          <ColourfulText text="Zain" />
        </span>{' '}
        <span>👋</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        className="text-muted-foreground max-w-xl text-justify"
      >
        I’m a passionate{' '}
        <span className="relative font-medium">
          <span className="relative z-10">Full Stack Engineer</span>
          <span
            aria-hidden="true"
            className="absolute -inset-1 z-0 rounded bg-gradient-to-r from-indigo-500/20 via-sky-500/20 to-emerald-500/20 blur-sm"
          ></span>
        </span>{' '}
        have over a 3 years of experience specializing in the MERN stack and
        Next.js. I enjoy building responsive web applications that solve
        real-world problems with clean code and smooth user experiences — from
        front-end design to back-end logic.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        className="flex flex-row gap-2"
      >
        <div className="flex items-center gap-4">
          <Button asChild size="default" variant="default">
            <Link href="#contact">
              Get in touch <Icons.arrowRight className="ml-2 size-4" />
            </Link>
          </Button>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" asChild>
              <Link
                href="https://www.linkedin.com/in/zainali546/"
                aria-label="Linkedin"
                target="_blank"
              >
                <Icons.linkedin className="size-5" />
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link
                href="https://github.com/zain546"
                aria-label="Github"
                target="_blank"
              >
                <Icons.github className="size-5" />
              </Link>
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
