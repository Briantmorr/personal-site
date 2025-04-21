// TODO: Add Athletic Skills, Office Skills,

const skills = [
  {
    title: 'Neural Networks',
    competency: 4,
    category: ['AI / ML'],
  },
  {
    title: 'LLMs',
    competency: 5,
    category: ['AI / ML'],
  },
  {
    title: 'Decision Trees',
    competency: 3,
    category: ['AI / ML'],
  },
  {
    title: 'Deep Learning',
    competency: 4,
    category: ['AI / ML'],
  },
  {
    title: 'Conversational Agents',
    competency: 4,
    category: ['AI / ML'],
  },
  {
    title: 'Langchain',
    competency: 2,
    category: ['AI / ML'],
  },
  {
    title: 'RAG',
    competency: 3,
    category: ['AI / ML'],
  },
  {
    title: 'Python (Tensorflow, Keras)',
    competency: 4,
    category: ['Programming'],
  },
  {
    title: 'Java',
    competency: 3,
    category: ['Programming'],
  },
  {
    title: 'Javascript',
    competency: 4,
    category: ['Programming'],
  },
  {
    title: 'SQL (PostgreSQL)',
    competency: 4,
    category: ['Programming'],
  },
  {
    title: 'Bash',
    competency: 3,
    category: ['Programming'],
  },
  {
    title: 'REST APIs',
    competency: 5,
    category: ['Programming'],
  },
  {
    title: 'Kafka',
    competency: 5,
    category: ['Data Engineering'],
  },
  {
    title: 'Pandas',
    competency: 4,
    category: ['Data Engineering'],
  },
  {
    title: 'Databricks',
    competency: 3,
    category: ['Data Engineering'],
  },
  {
    title: 'Spark',
    competency: 3,
    category: ['Data Engineering'],
  },
  {
    title: 'Query Optimization',
    competency: 4,
    category: ['Data Engineering'],
  },
  {
    title: 'AWS SageMaker',
    competency: 3,
    category: ['Cloud & DevOps'],
  },
  {
    title: 'Google Cloud',
    competency: 3,
    category: ['Cloud & DevOps'],
  },
  {
    title: 'Docker',
    competency: 3,
    category: ['Cloud & DevOps'],
  },
  {
    title: 'CI/CD (Jenkins, Github Actions)',
    competency: 3,
    category: ['Cloud & DevOps'],
  },
  {
    title: 'Kubernetes',
    competency: 4,
    category: ['Cloud & DevOps'],
  },
  {
    title: 'Observability (Grafana, Prometheus, Dynatrace, Loki)',
    competency: 3,
    category: ['Cloud & DevOps'],
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
