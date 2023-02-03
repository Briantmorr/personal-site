// TODO Add a couple lines about each project
const data = [
  {
    title: 'Automating Security Triaging',
    subtitle: 'Bash script Automation',
    image: '/images/projects/vulnerability_triage.jpeg',
    date: '2022-02-01',
    desc:
      ' A bash scipt to simplify security scanning for Java Gradle projects.'
      + ' As security lead, I spent significant time triaging vulnerabilities. And vulnerability auditing commands are tedious.'
      + ' I decided to write an automated script that scans and presents gradle modules to the user and abstracts away much of the manual effort.'
      + ' Improved triaging speed by over 70%.',
  },
  {
    title: 'Postman login Automation',
    subtitle: 'Postman Tooling Automation',
    image: '/images/projects/postman_script.jpeg',
    date: '2022-02-01',
    desc:
      ' I noticed a need for automation in our API debugging process.'
      + ' The script I wrote initially allowed developers to save time when debugging APIs.'
      + ' However, it is now used to provision login for integration tests in all our product\'s environments.'
      + ' What started out as a simple automation task, turned out to be quite challenging, since our login process requires almost a dozen redirects.',
  },
  {
    title: 'Seeding Performance Load Testing',
    subtitle: 'Automated creationg of Database dummy data',
    image: '/images/projects/performance_seeding_1.jpeg',
    date: '2022-02-01',
    desc:
      ' While trying to solve our service\'s need for performance testing. I noticed a major opportunity to get drastly improved testing results.'
      + ' There are no testing tools providing the ability to easily seed testing records at scale.'
      + ' I ideated and delivered a tool capable of dynamically seeding a Database with 100k+ records in seconds with minimal developer configuration.'
      + ' I later refined and pitched this tool for the SAP innovation challenge, making it to the final 25.',
  },
  {
    title: '3D printed Rover',
    subtitle: 'Software, Hardware, and hardwork',
    image: '/images/projects/rover.jpg',
    date: '2021-09-01',
    desc:
      'This project combined my skills in Software, CAD, 3d Printing, Arduino, and Electical Circuits.'
      + " Solving power delivery was challenging. I needed to cut a 16v lipo down to 12v to meet my motor controller's specifications",
  },
  {
    title: 'Nature Connect',
    subtitle: '2017 LFZ Hackaton',
    link: 'https://natureconnect.briantmorris.com/',
    image: '/images/projects/natureconnect.png',
    date: '2018-3-01',
    desc:
      'Won 1st prize in the LFZ hackathon. I was excited to ideate and deliver the feature of developing an AI for our game.'
      + ' It was so rewarding to finally get the AI working in the last hours of the hackathon.',
  },
  {
    title: 'Part Pig',
    subtitle: 'Proof of Concept for a Startup',
    link: 'https://partpig.briantmorris.com/',
    image: '/images/projects/partpig.png',
    date: '2018-05-20',
    desc:
      'Proof of Concept for a Startup. '
      + 'A web app built to facilitate the buying and selling of used car parts.'
      + ' PartPig is an ecommerce platform designed to bring the buyer and the seller together by focusing on User Interface and Experience (UI/UX).',
  },
];

export default data;
