import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "Project-Surro",
    companyName: "Project Surro",
    type: "Robotics",
    category: ["Robotics"],
    shortDescription:
      "Developed a robot for autonomous CS surgeries using reinforcement learning ",
    websiteLink: "",
    githubLink: "",
    techStack: ["ROS2", "Gazebo", "Linux", "Fusion360", "C/C++"],
    startDate: new Date("2022-05-01"),
    endDate: new Date("2022-06-15"),
    companyLogoImg: "/projects/Surro/Arm overview 2.png", //personal or professional icon. change accordingly later
    pagesInfoArr: [
      {
        title: "Design",
        description: "Each component was designed and assembled using Fusion360",
        imgArr: [
          // "/projects/hindi-keyboard/web_1.png"
        ],
      },
      {
        title: "Training",
        description:
          "Training was done in the Mujoco simulator using videos from various caesarian section surgeries",
        imgArr: [
          // "/projects/hindi-keyboard/web_2.png", //put training pictures from mujoco
          // "/projects/hindi-keyboard/web_3.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Developed a robot that can autonomously perform surgeries without human input",
        "Robot can also perform surgical assistive tasks like equipment handling ?",
      ],
      bullets: [
        "Designed components in fusion",
        "gathered various videos of surgeries to train the robot",
        "Reinforcement learning done using mujoco for precise pgysics simulation",
      ],
    },
  },
  {
    id: "3D-designs",
    companyName: "3D Robot Designs",
    type: "Robotics",
    category: ["3D Modeling", "Robotics"],
    shortDescription:
      "Designed functional 3-Dimensionnal models in Fusion360 / Solidworks",
    githubLink: "https://github.com/",
    techStack: [
      "Fusion360",
      "Solidworks",
    ],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2025-12-01"),
    companyLogoImg: "/projects/3D Designs/Semi humanoid.png",
    pagesInfoArr: [
      {
        title: "3D Robot Designs",
        description:
          "Designed functional 3-Dimensionnal models in Fusion360 / Solidworks",
        imgArr: ["/projects/3D Designs/Arm overview 2.png", "/projects/3D Designs/All arm views.png", "/projects/3D Designs/Semi humanoid.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "I created multiple 3D designs in fusion",
        "Focused on not only aesthetics but also funcctionality and printing optimisation",
      ],
      bullets: [
        "Created functional 3d designed.",
        "Assembled design component by component and created animations for it",
      ],
    },
  },
  {
    id: "electronics-projects",
    companyName: "Electronics",
    type: "Robotics",
    category: ["Robotics", "Electronics"],
    shortDescription:
      "Electronics projects designed in simulation software then physically implementes",
    techStack: ["Arduino", "C/C++", "Python", "Tinkercad"],
    startDate: new Date("2024-04-01"),
    endDate: new Date("2024-10-01"),
    companyLogoImg: "/logo.png", //personal or professional icon. change accordingly later
    pagesInfoArr: [
      {
        title: "Smart walking stick",
        description:
          "Upgraded a walking stick with sensors for obstacle and pit detection and a subsequent alert system for more efficient environmental analysis for blind individuals",
        imgArr: ["/projects/Electronics/"],
      },
      {
        title: "Femmetech",
        description:
          "Led a group of secondary school students through electronics fundamentals and basic projects",
        imgArr: ["/projects/Electronics/LED.png", 
          "/projects/Electronics/led code.png", 
          "/projects/Electronics/Car.png",
          "/projects/Electronics/car code.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Designed various electronics projects using TinkerCAD, proteus and other relevant softwares",
        "Designed circuits, assembled them, and programmed them",
      ],
      bullets: [
        "Used tinkercad to design and simulate circuiits",
        "physically implemented all circuiits by soldering",
      ],
    },
  },
  {
    id: "CTF-streak",
    companyName: "CTF streak",
    type: "Cybersecurity",
    category: ["Reverse engineering", "Cryptography", "Penetration Testing"],
    shortDescription:
      "Solved 120+ Capture The Flag challenges on pico and TryHackMe",
    githubLink: "https://gist.github.com/Iqmaa?direction=asc&page=4&sort=created",
    websiteLink: "https://iqmacodes.hashnode.dev/lessons-from-completing-over-a-100-ctfs",
    techStack: [
      "cryptography",
      "Reverse engineering",
      "Web exploitation",
      "SQL injection",
    ],
    startDate: new Date("2023-06-01"),
    endDate: new Date("2023-12-01"),
    companyLogoImg: "/projects/CTFs/CTF logo.png",
    pagesInfoArr: [
      {
        title: "crypto",
        description:
          "Solved various cryptography CTFs with the help of cyberchef",
        imgArr: ["/projects/CTFs/cryptography.png"],
      },
      {
        title: "reverse",
        description:
          "Reverse engineered pdb files using IDA ",
        imgArr: ["/projects/CTFs/reveng.png"],
      },    ],
    descriptionDetails: {
      paragraphs: [
        "Learnt in-depth and improved my problem solving skills alongside various skills related to cryptography, reverse engineering, and web exploitation",
        "Solved 120+ Capture The Flag challenges and wrote an article about my experience https://iqmacodes.hashnode.dev/lessons-from-completing-over-a-100-ctfs",
      ],
      bullets: [
        "solved various web and cryptography challenges.",
        "Worked with diassemblers like IDA.",
      ],
    },
  },
  {
    id: "General-Tech-Blog",
    companyName: "General Tech Blog",
    type: "Technical Writing",
    category: ["Web Dev", "AI/ML", "Cybersecurity"],
    shortDescription:
      "Running an explanatory tech blogs with over a 1000 reads",
    websiteLink: "https://iqmacodes.hashnode.dev/",
    techStack: [
      "Python",
      "Linux",
      "HTML",
      "CSS",
      "Markdown",
    ],
    startDate: new Date("2021-07-01"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/projects/general blog/Blog.png",
    pagesInfoArr: [
      {
        title: "Tech blog",
        description:
          "Wrote articles on general tech topics like AI/ML, coding, and cybersecurity",
        imgArr: [
          "/projects/general blog/code_blog.webp",
        ],
      },
      {
        title: "Cybersecurity subsection",
        description:
          "Contains articles on CTFs, reverse engineering, and cryptography",
        imgArr: ["/projects/Rev-eng blog/weirdsnake.png"],
      },
      {
        title: "AI/ML subsection",
        description:
          "Articles on general ML topics and LLMs,",
        imgArr: [
          "/projects/general blog/nlp_blog.webp",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "30+ aricles on various topics",
        "1000+ total reads on various articles",
      ],
      bullets: [
        "SEO optimised articles",
        "Beautifully Designed article covers for brand consistency",
        "Contributing to the FreeCodeCamp publication",
      ],
    },
  },
  {
    id: "Reverse-engineering-blog",
    companyName: "Reverse engineering blog",
    type: "Technical Writing",
    category: ["Reverse engineering", "Cybersecurity"],
    shortDescription:
      "Developed a blog focused on reverse engineering",
    websiteLink: "https://iqmacodes.hashnode.dev/series/cybersecurity",
    techStack: ["CSS", "Javascript", "HTML", "Django", "Arduino"],
    startDate: new Date("2021-07-14"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/projects/Rev-eng blog/rev-eng blog.png",
    pagesInfoArr: [
      {
        title: "CTF reversing",
        description: "Reversing for CTF challenges",
        imgArr: ["/projects/Rev-eng blog/weirdsnake.png"], 
      },
      {
        title: "Code reversing",
        description: "reversing my own code",
        imgArr: ["/projects/Rev-eng blog/calculator.png", 
          "/projects/Rev-eng blog/hello world.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Utilised my knowledge of C/C++ , and assembly to reverse engineer files",
      ],
      bullets: [
        "Reading through and understanding disassembly",
        "Reverse engneered binary files using IDA",
      ],
    },
  },
  {
    id: "TMDB-Mintlify",
    companyName: "TMDB Mintlify Docs",
    type: "Technical Writing",
    category: ["Technical Writing"],
    shortDescription:
      "Created an API documentation for The Movie DataBase using Postman and Mintlify",
    websiteLink: "https://iqma-31aad55c.mintlify.app/api-reference/",
    techStack: ["Postman", "Mintlify"],
    startDate: new Date("2024-11-01"),
    endDate: new Date("2024-12-15"),
    companyLogoImg: "/projects/TMDB/TMDB logo.png",
    pagesInfoArr: [
      {
        title: "TMDB HomePage",
        description:
          "Main Introduction to TMDB page, and API authentication guide",
        imgArr: ["/projects/TMDB/TMDB intro.png", "/projects/TMDB/TMDB postman.png"],
      },
      {
        title: "API Reference",
        description:
          "In-depth API documentation",
        imgArr: ["/projects/TMDB/TMDB API 1.png", "/projects/TMDB/TMDB API 2.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Created a user-friendly project using postman and Mintlify",
        "Tested each endpoint and provided sample requests and responses for each",
      ],
      bullets: [
        "Created a user-friendly project using postman and Mintlify",
        "Tested each endpoint and provided sample requests and responses for each",
        "Created an OpenAPI spec file to make the documentation easy to move",
        "Converted the spec file and imported on Mintlify for better user experience",
        "Created a parameter definition page to make the documentation more comprehensive and beginner friendly",
        "Published the documentation and enhance my skills in API documentation",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
