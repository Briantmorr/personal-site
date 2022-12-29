// TODO: Add Athletic Skills, Office Skills,

const skills = [
  {
    title: 'Javascript',
    competency: 4,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Java',
    competency: 5,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Bash',
    competency: 5,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'Spring Boot',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'Gradle',
    competency: 4,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'React',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'PostgreSQL',
    competency: 4,
    category: ['Databases'],
  },
  {
    title: 'MySQL',
    competency: 3,
    category: ['Databases'],
  },
  {
    title: 'MongoDB',
    competency: 2,
    category: ['Databases'],
  },
  {
    title: 'Redis',
    competency: 2,
    category: ['Databases'],
  },
  {
    title: 'Git',
    competency: 5,
    category: ['Tools'],
  },
  {
    title: 'Kubernetes',
    competency: 4,
    category: ['Tools', 'Cloud Development'],
  },
  {
    title: 'Docker',
    competency: 3,
    category: ['Tools', 'Cloud Development'],
  },
  {
    title: 'Kafka',
    competency: 3,
    category: ['Tools', 'Cloud Development'],
  },
  {
    title: 'Python',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'PHP',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Django',
    competency: 2,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'HTML + CSS',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'GraphQL',
    competency: 2,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'Postman',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Amazon Web Services',
    competency: 2,
    category: ['Cloud Development'],
  },
  {
    title: 'Google Cloud Platform',
    competency: 3,
    category: ['Cloud Development'],
  },
  {
    title: 'Microsoft Azure',
    competency: 2,
    category: ['Cloud Development'],
  },
  {
    title: 'Jenkins',
    competency: 2,
    category: ['Cloud Development'],
  },
  {
    title: 'Prometheus',
    competency: 3,
    category: ['Cloud Development', 'Monitoring'],
  },
  {
    title: 'Loki',
    competency: 3,
    category: ['Cloud Development', 'Monitoring'],
  },
  {
    title: 'Grafana',
    competency: 2,
    category: ['Cloud Development', 'Monitoring'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
