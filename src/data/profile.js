export const profile = {
  name: 'Shreeya Agarwal',
  location: 'Delhi',
  email: 'shreeya.agarwal.2005@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/shreeya-agarwal-frontend/',
    github: 'https://github.com/EngShreeya',
  },
  tagline:
    'Developer building responsive web experiences with a love for motion, typography, and interaction design.',
  about: [
    `I’m a B.Tech CS student who enjoys crafting clean, interactive frontends and shipping practical products.`,
    `I’m drawn to brutalist clarity + futuristic polish: strong grids, bold type, and micro-interactions that communicate hierarchy.`,
  ],
  highlights: [
    { label: 'B.Tech CS (AKTU)', value: 'ABES Engineering College • 2023–2027 • CGPA 8.15' },
    { label: 'Dataverse', value: 'Joint Secretary • Sept 2024–Present' },
    { label: 'Focus', value: 'React, UI engineering, motion design' },
  ],
  skills: {
    categories: [
      {
        key: 'frontend',
        label: 'Frontend',
        items: [
          { name: 'React', level: 78 },
          { name: 'JavaScript', level: 80 },
          { name: 'HTML5', level: 85 },
          { name: 'CSS3', level: 75 },
        ],
      },
      {
        key: 'languages',
        label: 'Languages',
        items: [
          { name: 'Java', level: 72 },
          { name: 'C', level: 60 },
          { name: 'C++ (basic)', level: 45 },
        ],
      },
      {
        key: 'tools',
        label: 'Tools',
        items: [
          { name: 'Git / GitHub', level: 75 },
          { name: 'VS Code', level: 85 },
          { name: 'Power BI', level: 55 },
        ],
      },
    ],
    marquee: [
      'React',
      'JavaScript',
      'UI Engineering',
      'Framer Motion',
      'Tailwind',
      'GitHub',
      'Accessibility',
      'Performance',
      'Interaction Design',
      'Brutalist',
      'Futuristic',
    ],
  },
  projects: [
    {
      title: 'Movie Vault',
      period: '2025',
      description:
        'A modern movie discovery and management web application with search, filtering, and favorites functionality.',
      stack: ['React', 'JavaScript', 'Tailwind', 'TMDB API'],
      hrefs: { live: '', github: 'https://github.com/EngShreeya/Movie_Vault' },
    },
    {
      title: 'Travel Blog Website',
      period: 'Jan 2025',
      description:
        'Responsive travel blog with destinations, stories, tips, and featured posts.',
      stack: ['HTML', 'CSS', 'JavaScript'],
      hrefs: { live: '', github: '' },
    },
    {
      title: 'Drum Kit Website',
      period: 'May 2025',
      description:
        'Interactive drum kit with keyboard/mouse input and real-time audio feedback.',
      stack: ['HTML', 'CSS', 'JavaScript'],
      hrefs: { live: '', github: 'https://github.com/EngShreeya/Drum_Kit' },
    },
    {
      title: 'Currency Converter',
      period: 'Jun 2025',
      description:
        'Currency converter with real-time exchange-rate API for accurate conversions.',
      stack: ['HTML', 'CSS', 'JavaScript', 'API'],
      hrefs: { live: '', github: '' },
    },
  ],
  timeline: [
    {
      type: 'education',
      title: 'B.Tech in Computer Science (AKTU)',
      org: 'ABES Engineering College',
      time: 'Oct 2023 — Jul 2027',
      meta: 'CGPA 8.15',
    },
    {
      type: 'education',
      title: 'Class 12th (CBSE)',
      org: 'Gyanodaya Public Sr. Sec. School',
      time: '2022',
      meta: '81%',
    },
    {
      type: 'education',
      title: 'Class 10th (CBSE)',
      org: 'Nirmala Convent School',
      time: '2020',
      meta: '92%',
    },
    {
      type: 'experience',
      title: 'Joint Secretary',
      org: 'Dataverse (Technical Club)',
      time: 'Sept 2024 — Present',
      meta: 'Organized coding events, workshops, and tech initiatives.',
    },
    {
      type: 'experience',
      title: 'Member (Events Dept)',
      org: 'Enigma Coding Club',
      time: 'Sept 2024 — Oct 2025',
      meta: 'Supported logistics, coordination, and student engagement.',
    },
  ],
  certificates: [
    { title: 'CSS Certificate', org: 'HackerRank', time: 'Apr 2025' },
    { title: 'Data Analytics', org: 'Deloitte (Forage)', time: 'Apr 2025' },
  ],
}

