export const profile = {
  name: 'Luis Adrián',
  initials: 'LA',
  email: 'lm0336172@gmail.com',
  github: 'https://github.com/luisadrian1302',
  linkedin: 'https://www.linkedin.com/in/luis-adrian-1a2b81223/',
  role: { es: 'Desarrollador Full Stack', en: 'Full Stack Developer' },
  university: 'Universidad Tecnológica de Tecámac',
  company: 'VLIM Soluciones Integrales en TIC',
};

export const skills = [
  {
    title: 'Frontend',
    technologies: ['React', 'Vue.js', 'TypeScript', 'JavaScript', 'HTML / CSS'],
  },
  {
    title: 'Backend',
    technologies: ['Express.js', 'Spring Boot', 'PHP', 'APIs REST', 'WebSockets'],
  },
  { title: 'Mobile', technologies: ['React Native', 'Flutter'] },
  {
    title: { es: 'Datos y arquitectura', en: 'Data & architecture' },
    technologies: ['PostgreSQL', 'MySQL', 'Clean Architecture', 'SOLID'],
  },
  {
    title: { es: 'Despliegues', en: 'Deployments' },
    technologies: ['Dev / QA / Prod'],
  },
];

export const experience = [
  {
    period: { es: '2024 — Actualidad', en: '2024 — Present' },
    title: { es: 'Full Stack Developer Jr.', en: 'Full Stack Developer Jr.' },
    organization: profile.company,
    description: {
      es: 'Desarrollo aplicaciones web y móviles e implemento servicios backend para proyectos de gestión empresarial y logística. En Trackit, mis responsabilidades también abarcan el despliegue del proyecto y la gestión de sus bases de datos por entorno.',
      en: 'I develop web and mobile applications and implement backend services for business management and logistics projects. On Trackit, my responsibilities also include project deployments and managing its databases across environments.',
    },
    responsibilities: {
      es: [
        'Desarrollo de APIs y endpoints e integración con las aplicaciones cliente.',
        'Despliegue de Trackit en desarrollo, QA y producción.',
        'Gestión de las bases de datos del proyecto en cada entorno.',
      ],
      en: [
        'Development of APIs and endpoints and integration with client applications.',
        'Trackit deployments across development, QA and production.',
        'Management of the project’s databases in each environment.',
      ],
    },
    tags: ['React', 'Vue.js', 'React Native', 'Express.js', 'PHP'],
  },
  {
    period: { es: '2024', en: '2024' },
    title: { es: 'Becario de desarrollo', en: 'Development intern' },
    organization: profile.company,
    description: {
      es: 'Primeras colaboraciones en proyectos profesionales: desarrollo de funcionalidades, integración de servicios y corrección de errores.',
      en: 'First contributions to professional projects: feature development, service integration and bug fixes.',
    },
    responsibilities: { es: [], en: [] },
    tags: ['PHP', 'JavaScript', 'MySQL'],
  },
];

export const certificates = [
  { name: 'SCRUM Study', year: '2024', file: 'certificates/scrum.pdf' },
  { name: 'Spring Boot', year: '2024', file: 'certificates/spring.pdf' },
];
