// src/data/jobDescriptions.ts

export type JobDescription = {
  title: string;
  type: string;
  experience: string;
  vacancy: number;
  skills: string;
  responsibilities: string[];
  applyLink: string;
  note?: string;
};

export type JobSlug =
  | "automation-tester"
  | "react-native-developer"
  | "mern-stack-developer"
  | "node-js-developer"
  | "devops-engineer"
  | "bdm"
  | "wordpress-developer"
  | "graphic-designer";

const jobDescriptions: Record<JobSlug, JobDescription> = {
  "automation-tester": {
    title: "Automation (Selenium) Tester",
    type: "Full Time",
    experience: "1–3 Years",
    vacancy: 1,
    skills: "Selenium, Java/Python, CI/CD, TestNG, Jenkins",
    responsibilities: [
      "Design and maintain Selenium test scripts",
      "Work closely with dev teams to integrate automated testing",
      "Develop and maintain CI pipelines for test automation",
      "Log defects and track resolution in JIRA",
      "Write test cases, strategies, and documentation",
    ],
    applyLink: "/apply",
  },

  "react-native-developer": {
    title: "React Native Developer",
    type: "Full Time",
    experience: "1–2 Years of Experience",
    vacancy: 1,
    applyLink: "/apply",
    note: "Prefer immediate joiner",
    skills: "Native, iOS, Android, State Management",
    responsibilities: [
      "Experience in designing and developing high-quality mobile applications for both iOS and Android using the React Native framework.",
      "Proficiency in JavaScript and familiarity with REST, AJAX, JSON, Web Service and native build tools such as XCode or Android Studio is a plus.",
      "Optimize application performance by identifying and resolving performance bottlenecks.",
      "Work closely with cross-functional teams, including product managers and backend developers, to define project requirements and deliver solutions within timelines.",
      "Collaborate with UI/UX designers to create pixel-perfect user interfaces that align with design specifications.",
      "Strong problem-solving skills and ability to work effectively in a team-oriented environment.",
      "Excellent communication skills to collaborate with team members effectively.",
    ],
  },

  "mern-stack-developer": {
    title: "Mern Stack Developer",
    type: "Full Time Experience",
    experience: "1-2 Years of Experience",
    vacancy: 1,
    note: "Prefer immediate joiner",
    skills: "Redux, Reactjs Workflow, MongoDB, API, Node JS, AWS",
    applyLink: "/apply",
    responsibilities: [
      "Design, develop and maintain robust and scalable web applications using the MERN stack.",
      "Strong in front or back end of MERN Stack (Mongo DB + Mongoose, Express, React or Node JS) using Javascript.",
      "Docker & containerisation, CI/CD pipeline design & build",
      "Work closely with UI/UX designers to translate wireframes and mockups into interactive applications.",
      "Strong understanding of AWS, JavaScript, HTML5, CSS3 and responsive design principles.",
      "Troubleshoot, debug and optimize code to ensure high performance and reliability of applications.",
      "Implement security measures and data protection protocols in line with industry best practices.",
      "Stay updated on emerging trends and technologies in web development to enhance skills and improve project outcomes.",
      "Strong problem-solving skills and ability to work effectively in a team-oriented environment.",
      "Excellent communication skills to collaborate with team members effectively.",
    ],
  },

  "node-js-developer": {
    title: "Node JS Developer",
    type: "Full Time Experience",
    experience: "1–2 Years of Experience",
    vacancy: 1,
    note: "Prefer immediate joiner",
    skills: "MongoDB, API, Node JS, Microservices, Expressjs, Nextjs, Javascript",
    applyLink: "/apply",
    responsibilities: [
      "Develop and maintain server-side network components to ensure optimal performance.",
      "Collaborate with front-end developers to integrate user-facing elements with server-side logic.",
      "Design and implement high-performance applications, ensuring responsiveness to front-end requests.",
      "Write reusable, testable and efficient code while adhering to best practices.",
      "Implement security protocols and data protection measures to safeguard applications.",
      "Conduct diagnostic tests, troubleshoot defects and provide ongoing technical support.",
      "Document processes and prepare reports on Node.js applications and database schemas.",
      "Strong problem-solving skills and ability to work effectively in a team-oriented environment.",
      "Excellent communication skills to collaborate with team members effectively.",
    ],
  },

  "devops-engineer": {
    title: "DevOps Engineer",
    type: "Full Time",
    experience: "3–5 Years",
    vacancy: 1,
    skills: "CI/CD, Docker, Kubernetes, AWS, Jenkins",
    responsibilities: [
      "Manage cloud infrastructure and deployments",
      "Automate CI/CD pipelines",
      "Monitor system reliability",
      "Ensure infrastructure security and compliance",
    ],
    applyLink: "/apply",
  },

  bdm: {
    title: "BDM",
    type: "Full Time",
    experience: "3+ Years",
    vacancy: 1,
    skills: "Sales, CRM, Client Relationship, Lead Generation",
    responsibilities: [
      "Identify and pursue new business opportunities",
      "Develop client relationships",
      "Meet sales targets",
      "Present proposals and negotiate deals",
    ],
    applyLink: "/apply",
  },

  "wordpress-developer": {
    title: "WordPress Developer",
    type: "Full Time",
    experience: "1–2 Years",
    vacancy: 1,
    skills: "WordPress, PHP, HTML, CSS, MySQL",
    responsibilities: [
      "Develop custom WordPress themes and plugins",
      "Maintain and optimize WordPress websites",
      "Ensure mobile responsiveness and SEO best practices",
    ],
    applyLink: "/apply",
  },

  "graphic-designer": {
    title: "Graphic Designer",
    type: "Full Time",
    experience: "1–2 Years",
    vacancy: 1,
    skills: "Photoshop, Illustrator, Figma, Canva",
    responsibilities: [
      "Design visuals for web, social media, and print",
      "Collaborate with marketing and development teams",
      "Maintain brand consistency",
      "Adapt designs based on feedback",
    ],
    applyLink: "/apply",
  },
};

export default jobDescriptions;

// Optional helpers
export const jobSlugs = Object.keys(jobDescriptions) as JobSlug[];

export const getJob = (slug: string): JobDescription | undefined =>
  (jobDescriptions as Record<string, JobDescription | undefined>)[slug];

export const isJobSlug = (slug: string): slug is JobSlug =>
  slug in jobDescriptions;
