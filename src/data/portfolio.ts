/**
 * Central portfolio data for Pampana Veerendra.
 */

export type Palette = {
  from: string;
  via: string;
  to: string;
  accent: string;
};

export const profile = {
  fullName: 'Pampana Veerendra',
  displayName: 'Veerendra Pampana',
  firstName: 'VEERENDRA',
  seriesTag: 'THE SERIES',
  originalLabel: 'A VEERENDRA ORIGINAL',

  role: 'AI/ML Student & Full-Stack Developer',

  tagline: [
    'Artificial Intelligence',
    'Machine Learning',
    'Full-Stack Development',
  ],

  intro:
    'A B.Tech Artificial Intelligence and Machine Learning student passionate about building practical AI solutions and modern web applications. I enjoy working with Python, machine learning, frontend development and databases.',

  location: 'Andhra Pradesh, India',

  email: 'p.veerendra5369@gmail.com',

  links: {
    linkedin: 'https://www.linkedin.com/in/veerendra-pampana-34aa66256/',
    github: 'https://github.com/veerendra-pampana',
  },

  resumePdf: '/assets/Veerendra_Resume.pdf',

  portrait: {
    src: '/assets/veerendra.png',
    srcSet: '',
    alt: 'Anime-style portrait of Pampana Veerendra',
  },

  interests: [
    'Artificial Intelligence',
    'Machine Learning',
    'Web Development',
    'UI/UX Design',
  ],
};

/* ================= EDUCATION ================= */

export const education = [
  {
    school: 'Parul University',
    place: 'Gujarat, India',
    degree:
      'Bachelor of Technology — Artificial Intelligence and Machine Learning',
    period: '2024 – Present',
    score: 'CGPA 7.2/10',
  },
  {
    school: 'Aditya University',
    place: 'Andhra Pradesh, India',
    degree: 'Polytechnic Diploma in Computer Engineering',
    period: '2021 – 2024',
    score: '79.94%',
  },
];

/* ================= EXPERIENCE ================= */

export const experience = [
  {
    company: 'Thiranex',
    role: 'Web Development Intern',
    place: 'Remote',
    period: 'May 2026 – Jun 2026',
    points: [
      'Gained hands-on exposure to real-time web application development.',
      'Applied structured problem-solving and debugging across the development lifecycle.',
      'Collaborated on development tasks involving coding, testing and issue resolution.',
    ],
  },
  {
    company: 'Oasis Infobyte',
    role: 'Python Intern',
    place: 'Remote',
    period: 'September 2025 – October 2025',
    points: [
      'Completed Python internship tasks including a BMI Calculator with a Tkinter interface.',
      'Worked with SQLite, CSV export and Matplotlib.',
      'Developed a Password Generator using Python.',
    ],
  },
  {
    company: 'City Online AP Pvt. Ltd.',
    role: 'Computer Networking Intern',
    place: 'Andhra Pradesh, India',
    period: 'December 2023 – May 2024',
    points: [
      'Gained practical exposure to computer networking configuration and troubleshooting.',
      'Worked with system maintenance and network support activities.',
    ],
  },
];

/* ================= PROJECTS ================= */

export type Metric = {
  value: string;
  label: string;
};

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'fake-currency-detection',
    title: 'Fake Currency Detection',
    year: '2026',
    genre: 'AI • Machine Learning • Computer Vision',

    logline:
      'An image-based system designed to identify real currency notes, fake notes and non-currency images.',

    stack: [
      'Python',
      'TensorFlow',
      'Keras',
      'OpenCV',
      'Flask',
      'HTML',
      'CSS',
    ],

    build: [
      'Developed a three-class image classification workflow for fake currency, real currency and non-currency images.',
      'Used a CNN model with TensorFlow/Keras and OpenCV-based image processing.',
      'Built a Flask web interface for uploading images and displaying predictions.',
    ],

    features: [
      'Three-class image classification',
      'Image upload and prediction through Flask',
      'Image preprocessing with OpenCV',
      'CNN model training and validation',
      'Prediction result display',
    ],

    metrics: [],

    palette: {
      from: '#2a0610',
      via: '#7a0f24',
      to: '#0b0710',
      accent: '#ff3d5a',
    },

    motif: 'shield',
  },

  {
    id: 'credit-card-fraud-detection',
    title: 'Credit Card Fraud Detection',
    year: '2026',
    genre: 'Machine Learning • FinTech',

    logline:
      'A machine-learning project focused on identifying potentially fraudulent credit-card transactions.',

    stack: [
      'Python',
      'Machine Learning',
      'scikit-learn',
      'Pandas',
    ],

    build: [
      'Worked on a machine-learning workflow for classifying potentially fraudulent transactions.',
      'Explored transaction data preprocessing and model evaluation.',
    ],

    features: [
      'Transaction data preprocessing',
      'Fraud classification',
      'Model evaluation',
    ],

    metrics: [],

    palette: {
      from: '#1a0d02',
      via: '#8a4a07',
      to: '#0a0806',
      accent: '#ffb547',
    },

    motif: 'flow',
  },

  {
    id: 'car-price-predictor',
    title: 'Car Price Predictor',
    year: '2026',
    genre: 'Machine Learning • Prediction',

    logline:
      'A machine-learning project that estimates car prices from vehicle-related input features.',

    stack: [
      'Python',
      'Machine Learning',
      'Pandas',
      'scikit-learn',
    ],

    build: [
      'Worked with a car dataset to build a price-prediction workflow.',
      'Explored data preparation, model training and prediction.',
    ],

    features: [
      'Dataset preprocessing',
      'Regression-based prediction',
      'Price estimation',
    ],

    metrics: [],

    palette: {
      from: '#04121f',
      via: '#0f4c6e',
      to: '#05080d',
      accent: '#4cc9ff',
    },

    motif: 'tenants',
  },

  {
    id: 'online-shopping-application',
    title: 'Online Shopping Application',
    year: '2026',
    genre: 'Full-Stack • Web Development',

    logline:
      'A full-stack web application concept for an online shopping experience.',

    stack: [
      'HTML',
      'CSS',
      'JavaScript',
      'Node.js',
      'Express.js',
      'MongoDB',
    ],

    build: [
      'Worked on a web application using frontend and backend technologies.',
      'Explored application routing, server-side functionality and database integration.',
    ],

    features: [
      'Web-based user interface',
      'Backend application logic',
      'Database integration',
    ],

    metrics: [],

    palette: {
      from: '#120822',
      via: '#3d1a6e',
      to: '#07060c',
      accent: '#b98bff',
    },

    motif: 'flow',
  },
];

/* ================= ACHIEVEMENTS ================= */

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [];

/* ================= CERTIFICATIONS ================= */

export type Certification = {
  issuer: string;
  name: string;
  link: string;
};

export const certifications: Certification[] = [];

/* ================= SKILLS ================= */

export type Skill = {
  name: string;
  mono: string;
  note?: string;
};

export type SkillCategory = {
  id: string;
  title: string;
  subtitle: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    subtitle: 'Languages used for development',

    skills: [
      { name: 'Python', mono: 'Py' },
      { name: 'Java', mono: 'Jv' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'C', mono: 'C' },
    ],
  },

  {
    id: 'frontend',
    title: 'Frontend Development',
    subtitle: 'Interfaces and web experiences',

    skills: [
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'React', mono: 'Re' },
    ],
  },

  {
    id: 'backend',
    title: 'Backend Development',
    subtitle: 'Server-side development',

    skills: [
      { name: 'Flask', mono: 'Fl' },
      { name: 'Node.js', mono: 'No' },
      { name: 'Express.js', mono: 'Ex' },
    ],
  },

  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    subtitle: 'Model development and computer vision',

    skills: [
      { name: 'TensorFlow', mono: 'Tf' },
      { name: 'Keras', mono: 'Kr' },
      { name: 'scikit-learn', mono: 'Sk' },
      { name: 'OpenCV', mono: 'Cv' },
    ],
  },

  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Data storage and management',

    skills: [
      { name: 'MySQL', mono: 'My' },
      { name: 'MongoDB', mono: 'Mg' },
      { name: 'SQLite', mono: 'Sq' },
    ],
  },

  {
    id: 'tools',
    title: 'Development Tools',
    subtitle: 'Development workflow',

    skills: [
      { name: 'Git', mono: 'Gt' },
      { name: 'GitHub', mono: 'Gh' },
      { name: 'VS Code', mono: 'Vs' },
      { name: 'Streamlit', mono: 'St' },
    ],
  },
];

/* ================= SKILL EVIDENCE ================= */

export const skillEvidence: Record<string, string[]> = {
  Python: [
    'Fake Currency Detection',
    'Credit Card Fraud Detection',
    'Car Price Predictor',
    'Oasis Infobyte Internship',
  ],

  Java: ['Programming language'],

  JavaScript: ['Web development'],

  HTML: ['Portfolio and web development'],

  CSS: ['Portfolio and web development'],

  React: ['Frontend development'],

  Flask: ['Fake Currency Detection'],

  'Node.js': ['Online Shopping Application'],

  'Express.js': ['Online Shopping Application'],

  TensorFlow: ['Fake Currency Detection'],

  Keras: ['Fake Currency Detection'],

  'scikit-learn': ['Machine-learning projects'],

  OpenCV: ['Fake Currency Detection'],

  MySQL: ['Database experience'],

  MongoDB: ['Online Shopping Application'],

  SQLite: ['BMI Calculator'],

  Git: ['Development workflow'],

  GitHub: ['Development workflow'],

  'VS Code': ['Development environment'],

  Streamlit: ['Application development'],
};

/* ================= JOURNEY ================= */

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = {
  from: '#24060b',
  via: '#6e0d1d',
  to: '#09070a',
  accent: '#ff3d5a',
};

const amber: Palette = {
  from: '#1c1003',
  via: '#6b3c06',
  to: '#0a0806',
  accent: '#ffb547',
};

const ocean: Palette = {
  from: '#04121f',
  via: '#0f4c6e',
  to: '#05080d',
  accent: '#4cc9ff',
};

const violet: Palette = {
  from: '#120822',
  via: '#3d1a6e',
  to: '#07060c',
  accent: '#b98bff',
};

const jade: Palette = {
  from: '#03150f',
  via: '#0d5a40',
  to: '#050a08',
  accent: '#46e3a8',
};

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Beginning',
    period: 'Diploma',

    synopsis:
      'The foundation years of learning, problem-solving and technology.',

    episodes: [
      {
        code: 'S01 E01',
        title: 'The Foundation',
        description:
          'Completed a diploma at Aditya Polytechnic College.',
        tags: ['Diploma', 'Technology'],
        runtime: 'Diploma',
        palette: amber,
      },
    ],
  },

  {
    number: 2,
    title: 'Into AI & ML',
    period: 'B.Tech – Present',

    synopsis:
      'Pursuing a Bachelor of Technology in Artificial Intelligence and Machine Learning at Parul University.',

    episodes: [
      {
        code: 'S02 E01',
        title: 'The AIML Student',
        description:
          'Learning artificial intelligence, machine learning and software development as part of the B.Tech AIML programme.',
        tags: ['B.Tech', 'AI & ML'],
        runtime: 'Present',
        palette: violet,
      },

      {
        code: 'S02 E02',
        title: 'The Problem Solver',
        description:
          'Building practical projects involving Python, machine learning, computer vision and web development.',
        tags: ['Python', 'Machine Learning', 'Projects'],
        runtime: 'Ongoing',
        palette: jade,
      },
    ],
  },

  {
    number: 3,
    title: 'Learning by Building',
    period: 'Internships',

    synopsis:
      'Gaining practical exposure through Python development and computer networking internships.',

    episodes: [
      {
        code: 'S03 E01',
        title: 'The Python Intern',
        description:
          'Completed Python internship tasks at Oasis Infobyte, including a BMI Calculator and Password Generator.',
        tags: ['Python', 'Tkinter', 'SQLite'],
        runtime: 'Oasis Infobyte',
        palette: ocean,
      },

      {
        code: 'S03 E02',
        title: 'The Network Trainee',
        description:
          'Gained hands-on exposure to networking configuration, troubleshooting and system maintenance.',
        tags: ['Networking', 'Troubleshooting'],
        runtime: 'City Online AP Pvt. Ltd.',
        palette: crimson,
      },
    ],
  },

  {
    number: 4,
    title: 'Building Projects',
    period: '2026',

    synopsis:
      'Developing AI/ML and full-stack projects through practical implementation.',

    episodes: [
      {
        code: 'S04 E01',
        title: 'The Currency Validator',
        description:
          'Fake Currency Detection using a CNN model, TensorFlow/Keras, OpenCV and Flask.',
        tags: ['Python', 'TensorFlow', 'OpenCV', 'Flask'],
        runtime: 'Final-year project',
        palette: crimson,
      },

      {
        code: 'S04 E02',
        title: 'The ML Explorer',
        description:
          'Exploring machine-learning applications such as credit-card fraud detection and car-price prediction.',
        tags: ['Machine Learning', 'Python'],
        runtime: 'Projects',
        palette: amber,
      },

      {
        code: 'S04 E03',
        title: 'The Web Developer',
        description:
          'Working on full-stack web application development and database integration.',
        tags: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
        runtime: 'Projects',
        palette: ocean,
      },
    ],
  },

  {
    number: 5,
    title: "What's Next",
    period: 'Now streaming',

    synopsis:
      'Continuing to grow in AI, machine learning, full-stack development and UI/UX design.',

    episodes: [
      {
        code: 'S05 E01',
        title: 'The Next Chapter',
        description:
          'Exploring advanced AI/ML concepts, modern frontend development and real-world software projects.',
        tags: ['AI', 'Machine Learning', 'Full-Stack', 'UI/UX'],
        runtime: 'In progress',
        palette: violet,
      },
    ],
  },
];

/* ================= TOP PICKS ================= */

export type TopPick = {
  label: string;
  title: string;
  detail: string;
  palette: Palette;
};

export const topPicks: TopPick[] = [
  {
    label: 'Featured project',
    title: 'Fake Currency Detection',
    detail: 'Final-year AI/ML project',
    palette: crimson,
  },

  {
    label: 'AI & ML',
    title: 'Computer Vision',
    detail: 'TensorFlow • Keras • OpenCV',
    palette: ocean,
  },

  {
    label: 'Programming',
    title: 'Python',
    detail: 'Machine learning and application development',
    palette: amber,
  },

  {
    label: 'Internship',
    title: 'Oasis Infobyte',
    detail: 'Python development internship',
    palette: violet,
  },

  {
    label: 'Networking',
    title: 'City Online AP',
    detail: 'Computer networking internship',
    palette: jade,
  },

  {
    label: 'Current focus',
    title: 'Full-Stack Development',
    detail: 'Building modern web applications',
    palette: ocean,
  },
];

/* ================= INTRO SLIDES ================= */

export type IntroSlide = {
  kicker: string;
  title: string;
  lines: string[];
  chips?: string[];
};

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · AI & ML',
    lines: [
      'Parul University',
      'Artificial Intelligence and Machine Learning',
    ],
    chips: ['AIML'],
  },

  {
    kicker: 'Skills',
    title: 'Building with code.',
    lines: [
      'Python, Java, JavaScript',
      'React, Flask, Node.js, Express.js',
      'TensorFlow, Keras, OpenCV, MySQL, MongoDB',
    ],
    chips: ['Python', 'React', 'TensorFlow', 'Flask'],
  },

  {
    kicker: 'Internships',
    title: 'Learning through experience.',
    lines: [
      'Python Intern · Oasis Infobyte',
      'Computer Networking Intern · City Online AP Pvt. Ltd.',
    ],
  },

  {
    kicker: 'Projects',
    title: 'Ideas into applications.',
    lines: [
      'Fake Currency Detection — CNN, TensorFlow, OpenCV',
      'Credit Card Fraud Detection — Machine Learning',
      'Car Price Predictor — Machine Learning',
    ],
  },

  {
    kicker: 'Current mission',
    title: 'The next chapter.',
    lines: [
      'AI & ML · Full-Stack Development · UI/UX Design',
    ],
  },
];

/* ================= PROFILE SELECTOR ================= */

export type ProfileId =
  | 'veerendra'
  | 'recruiter'
  | 'developer'
  | 'creative';

export type SectionId =
  | 'about'
  | 'journey'
  | 'originals'
  | 'picks'
  | 'skills'
  | 'moments'
  | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'veerendra',
    name: 'Veerendra Pampana',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: [
      'about',
      'journey',
      'originals',
      'picks',
      'skills',
      'moments',
      'story',
    ],
  },

  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, projects and skills first',
    color: '#4cc9ff',
    order: [
      'story',
      'moments',
      'skills',
      'originals',
      'about',
      'journey',
      'picks',
    ],
  },

  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, technologies and GitHub first',
    color: '#46e3a8',
    order: [
      'originals',
      'skills',
      'journey',
      'moments',
      'about',
      'picks',
      'story',
    ],
  },

  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story and highlights first',
    color: '#ffb547',
    order: [
      'journey',
      'picks',
      'originals',
      'moments',
      'about',
      'skills',
      'story',
    ],
  },
];

/* ================= SECTION METADATA ================= */

export const sectionMeta: Record<
  SectionId,
  {
    nav: string;
    card: string;
    meta: string;
    palette: Palette;
  }
> = {
  about: {
    nav: 'About',
    card: 'About Me',
    meta: 'Education and training',
    palette: violet,
  },

  journey: {
    nav: 'Journey',
    card: 'My Journey',
    meta: `${seasons.length} Seasons • ${seasons.reduce(
      (count, season) => count + season.episodes.length,
      0,
    )} Episodes`,
    palette: amber,
  },

  originals: {
    nav: 'Originals',
    card: 'My Projects',
    meta: `${projects.length} Projects`,
    palette: crimson,
  },

  picks: {
    nav: 'Top Picks',
    card: 'Top Picks',
    meta: 'Featured work and interests',
    palette: jade,
  },

  skills: {
    nav: 'Skills',
    card: 'My Skills',
    meta: `${skillCategories.length} Categories`,
    palette: ocean,
  },

  moments: {
    nav: 'Moments',
    card: 'My Achievements',
    meta: `${achievements.length} Achievements • ${certifications.length} Certifications`,
    palette: crimson,
  },

  story: {
    nav: 'Resume',
    card: 'The Full Story',
    meta: 'Resume and experience',
    palette: violet,
  },
};