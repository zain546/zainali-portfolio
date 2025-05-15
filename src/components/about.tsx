'use client';

import { motion } from 'framer-motion';

import { SectionHeading } from '@/components/section-heading';
import { Skills } from '@/components/skills';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      id="about"
      className="my-10 flex w-full scroll-mt-28 flex-col items-center md:mb-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading heading="About Me" />
      <div className="mt-5 max-w-2xl text-center leading-7">
        <p className="mb-4 text-justify">
          Hi! I&apos;m a Full Stack Developer with a strong focus on the{' '}
          <strong>MERN </strong>
          stack and <strong>Next.js</strong>. I began my programming journey in
          2021 right after completing my intermediate studies. With a growing
          passion for technology, I pursued a 🎓{' '}
          <strong>Bachelor&apos;s</strong> degree in Computer Science to
          strengthen my foundation and take my skills to the next level.
          Currently, I&apos;m working on a full-stack project for a company
          called called <strong>Xenara AI</strong>, where I&apos;m gaining
          hands-on experience building real-world applications. I enjoy working
          on both the front-end and back-end, turning ideas into functional,
          user-friendly products. products. Looking ahead, my goals are to
          become a Lead Software Software Engineer and eventually launch my own
          tech company. I’m always eager collaborate, and create meaningful
          digital solutions.
        </p>
        <p>
          I&apos;m open to Job opportunities where I can contribute, learn and
          grow. If you have a good opportunity that matches my skills and
          experience then don&apos;t hesitate to contact me.
        </p>
      </div>
      <Skills />
    </motion.section>
  );
};
