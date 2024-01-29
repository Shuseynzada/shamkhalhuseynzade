import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  figma,
  icpc,
  magazine,
  comingsoon,
  typescript
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Competitive Programmer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "ReactJS",
    icon: reactjs,
  },
  {
    name: "TypeScript",
    icon: typescript
  },
  {
    name: "TailwindCSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  }
];

const experiences = [
  {
    title: "International Competition Participant in Georgia",
    company_name: "The International Collegiate Programming Contest",
    icon: icpc,
    iconBg: "#383E56",
    date: "December 2022",
    points: [
      "Met with the talented minds arount the world",
      "Solved challenging problems in the areas of Data Structures and Algorithms",
      "Implemented accumulated deep knowledge from C++ and Phyton ",
    ],
  },
  {
    title: "International Competition Participant in Georgia",
    company_name: "The International Collegiate Programming Contest",
    icon: icpc,
    iconBg: "#383E56",
    date: "December 2022",
    points: [
      "Met with the talented minds arount the world",
      "Solved challenging problems in the areas of Data Structures and Algorithms",
      "Implemented accumulated deep knowledge from C++ and Phyton ",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "ADAli Magazine",
    icon: magazine,
    iconBg: "#383E56",
    date: "September 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with other team members including designers, project managers, and other developers to create high-quality products.",
      "Assisted fellow designers in the inner production of the web-page",
    ],
  }
];

const projects = [
  {
    name: "Coming soon",
    description:
      "Stay in touch",
    tags: [
      {
        name: "",
        color: "",
      }
    ],
    image: comingsoon,
    source_code_link: "https://github.com/Shuseynzada",
  }
];

export { services, technologies, experiences, projects };
