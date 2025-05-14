export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const projectsData = [
  {
    image: '/images/project-2.webp',
    title: 'Next-starter',
    description:
      'A Next.js starter template, packed with features like TypeScript, Tailwind CSS, Next-auth, Eslint, Stripe, testing tools and more.',
    technologies: ['Next.js', 'Tailwind', 'Shadcn/ui', 'Next-auth', 'Prisma'],
    links: {
      preview: 'https://next-starter-skolaczk.vercel.app',
      github: 'https://github.com/Skolaczk/next-starter',
      githubApi: 'https://api.github.com/repos/Skolaczk/next-starter',
    },
  },
  {
    image: '/images/project-1.webp',
    title: 'SocialHub',
    description:
      'SocialHub is a next-generation social media app developed using Next.js and Nest.js.',
    technologies: ['Next.js', 'TypeScript', ' Nest.js', 'Tailwind', 'Prisma'],
    links: {
      preview: 'https://socialhub-ms.vercel.app/',
      github: 'https://github.com/Skolaczk/SocialHub',
      githubApi: 'https://api.github.com/repos/Skolaczk/SocialHub',
    },
  },
] as const;

export const experiencesData = [
  {
    title: 'Web developer intern',
    company: 'WEB-BOX, Tarnobrzeg PL',
    description:
      'During this internship, I focused on two key areas: creating Wordpress plugins and managing website content, plugins, and settings.',
    period: '2023',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Wordpress'],
  },
  {
    title: 'Frontend developer intern',
    company: 'Chop-chop, remote',
    description:
      'During my internship at Chop-Chop, I collaborated with an experienced IT team, focusing on tasks in Next.js. This experience provided valuable insights into teamwork and advanced my proficiency in Next.js.',
    period: '2024',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
  },
  {
    title: 'Frontend developer',
    company: 'Freelancing, remote',
    description:
      'As a freelancer, I specialized in graphic design using Figma and website development using Next.js with Sanity CMS. I undertook projects independently, from design conceptualization to final implementation, ensuring client satisfaction.',
    period: '2023 - present',
    technologies: ['Next.js', 'TypeScript', 'Sanity', 'Tailwind'],
  },
] as const;

// skillsData.ts
export const skillsData = [
  // Foundational Technologies
  {
    alt: 'HTML5',
    src: 'https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white',
  },
  {
    alt: 'CSS',
    src: 'https://img.shields.io/badge/-CSS-1572B6?style=flat-square&logo=css3&logoColor=white',
  },
  {
    alt: 'JavaScript',
    src: 'https://img.shields.io/badge/-JavaScript-F7DF1C?style=flat-square&logo=javascript&logoColor=black',
  },
  {
    alt: 'TypeScript',
    src: 'https://img.shields.io/badge/-TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white',
  },

  // Frontend Development
  {
    alt: 'React',
    src: 'https://img.shields.io/badge/-React-45b8d8?style=flat-square&logo=react&logoColor=white',
  },
  {
    alt: 'Next.js',
    src: 'https://img.shields.io/badge/-Next.js-000000?style=flat-square&logo=next.js&logoColor=white',
  },
  {
    alt: 'React Query',
    src: 'https://img.shields.io/badge/-React%20Query-FF4154?style=flat-square&logo=react-query&logoColor=white',
  },
  {
    alt: 'Zustand',
    src: 'https://img.shields.io/badge/-Zustand-FF5F00?style=flat-square&logo=zustand&logoColor=white',
  },
  {
    alt: 'Zod',
    src: 'https://img.shields.io/badge/-Zod-2E5F9E?style=flat-square&logo=zod&logoColor=white',
  },

  // Backend Development
  {
    alt: 'Node.js',
    src: 'https://img.shields.io/badge/-Node.js-43853d?style=flat-square&logo=node.js&logoColor=white',
  },
  {
    alt: 'Express.js',
    src: 'https://img.shields.io/badge/-Express.js-000000?style=flat-square&logo=express&logoColor=white',
  },
  {
    alt: 'NestJS',
    src: 'https://img.shields.io/badge/-NestJS-ea2845?style=flat-square&logo=nestjs&logoColor=white',
  },
  {
    alt: 'Prisma',
    src: 'https://img.shields.io/badge/-Prisma-2D3748?style=flat-square&logo=prisma&logoColor=white',
  },
  {
    alt: 'MongoDB',
    src: 'https://img.shields.io/badge/-MongoDB-13aa52?style=flat-square&logo=mongodb&logoColor=white',
  },
  {
    alt: 'Redis',
    src: 'https://img.shields.io/badge/-Redis-DC382D?style=flat-square&logo=redis&logoColor=white',
  },

  // Styling and UI Libraries
  {
    alt: 'Bootstrap',
    src: 'https://img.shields.io/badge/-bootstrap-7953b3?style=flat-square&logo=javascript&logoColor=white',
  },
  {
    alt: 'Tailwind CSS',
    src: 'https://img.shields.io/badge/-Tailwind%20CSS-06B6D4?style=flat-square&logo=tailwind-css&logoColor=white',
  },
  {
    alt: 'Material UI',
    src: 'https://img.shields.io/badge/-Material%20UI-0081CB?style=flat-square&logo=material-ui&logoColor=white',
  },
  {
    alt: 'Chakra UI',
    src: 'https://img.shields.io/badge/-Chakra%20UI-319795?style=flat-square&logo=chakra-ui&logoColor=white',
  },
  {
    alt: 'Daisy UI',
    src: 'https://img.shields.io/badge/-Daisy%20UI-7A5E99?style=flat-square&logo=daisyui&logoColor=white',
  },
  {
    alt: 'Styled Components',
    src: 'https://img.shields.io/badge/-Styled_Components-db7092?style=flat-square&logo=styled-components&logoColor=white',
  },
  {
    alt: 'Radix UI',
    src: 'https://img.shields.io/badge/-Radix_UI-0D0D0D?style=flat-square&logo=react&logoColor=white',
  },

  // DevOps and Deployment
  {
    alt: 'Kubernetes',
    src: 'https://img.shields.io/badge/-Kubernetes-326CE5?style=flat-square&logo=kubernetes&logoColor=white',
  },
  {
    alt: 'AWS',
    src: 'https://img.shields.io/badge/-AWS-FF9900?style=flat-square&logo=amazonaws&logoColor=white',
  },

  // Tools
  {
    alt: 'Git',
    src: 'https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white',
  },
  {
    alt: 'GitHub Actions',
    src: 'https://img.shields.io/badge/-GitHub%20Actions-2088FF?style=flat-square&logo=github-actions&logoColor=white',
  },
  {
    alt: 'npm',
    src: 'https://img.shields.io/badge/-NPM-CB3837?style=flat-square&logo=npm&logoColor=white',
  },
  {
    alt: 'Yarn',
    src: 'https://img.shields.io/badge/-Yarn-2C8EBB?style=flat-square&logo=Yarn&logoColor=white',
  },
  {
    alt: 'Prettier',
    src: 'https://img.shields.io/badge/-Prettier-F7B93E?style=flat-square&logo=prettier&logoColor=white',
  },
  {
    alt: 'ESLint',
    src: 'https://img.shields.io/badge/-ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white',
  },
  {
    alt: 'Postman',
    src: 'https://img.shields.io/badge/-Postman-FF6C37?style=flat-square&logo=Postman&logoColor=white',
  },
  {
    alt: 'Slack',
    src: 'https://img.shields.io/badge/-Slack-4A154B?style=flat-square&logo=Slack&logoColor=white',
  },
];
