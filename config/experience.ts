import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [ //add logos and links
  {
    id: "aurora",
    position: "Robotics Intern (Competitive Robotics & Research)",
    company: "Aurora Robotics",
    location: "Lagos, Nigeria",
    startDate: new Date("2026-04-01"),
    endDate: "Present",
    description: [
      "Served as a robotics engineering intern on the research team and competitive robotics team",
    ],
    achievements: [
      "Served as a robotics engineering intern on the research team and competitive robotics team",
    ],
    skills: ["Python", "C/C++", "Arduino", "Linux", "Electronics", "ROS2", "Tinkercad", "Fusion360", "Gazebo"],
    companyUrl: "https://www.linkedin.com/company/aurora-robotics-in/",
    logo: "/experience/aurora_robotics_logo.jfif",
  },
  {
    id: "uds",
    position: "Engineering Intern (Robotics)",
    company: "Unilag Design Studio",
    location: "Lagos, Nigeria",
    startDate: new Date("2025-04-01"),
    endDate: new Date("2026-04-01"),
    description: [
      "Served as a robotics engineering intern at the Unilag Design Studio where i represented the studio in competitions",
      "served as mentor in various engineering traininiig initiatives for young females gettiing into tech and engineering",
    ],
    achievements: [
      "Served as a robotics engineering intern at the Unilag Design Studio where i represented the studio in competitions",
      "served as mentor in various engineering traininiig initiatives for young females gettiing into tech and engineering",
    ],
    skills: ["Python", "C/C++", "Arduino", "Linux", "Electronics", "ROS2", "Tinkercad", "Fusion360", "Gazebo"],
    companyUrl: "https://www.linkedin.com/company/unilag-design-studio/posts/?feedView=all",
    logo: "/experience/unilag_engineering_design_studio_logo.jfif",
  },
  {
    id: "RAIN",
    position: "Campus Co-Lead (Ambassador)",
    company: "Robotics and Artificial Intelligence Network",
    location: "Kwara, Nigeria",
    startDate: new Date("2023-10-01"),
    endDate: new Date("2024-03-01"),
    description: [
      "served as the co-lead for my campus branch",
      "held trainings and workshops for engineering enthusiasts",
    ],
    achievements: [
      "spoke at various events to increase awarness of engineering and robotics",
      "Assisting beginners with projects",
      "Collaborated with other initiatives to train people in robotics and embedded systems",
    ],
    skills: ["Python", "Arduino", "Electronics"],
    companyUrl: "https://www.linkedin.com/company/103610588/admin/dashboard/",
    logo: "/experience/RAIN_logo.jfif",
  },
  {
    id: "zuri",
    position: "Web Developer Intern",
    company: "Zuri",
    location: "Kwara, Nigeria",
    startDate: new Date("2021-07-01"),
    endDate: new Date("2022-07-01"),
    description: [
      "Developed websites using HTML, CSS, and Bootstrap.",
      "Helped in content writing for the sites pages",
    ],
    achievements: [
      "Developed the login and signup pages of the site.",
      "Developed the landing page integrating carousels to improve user experience",
      "Performed research on other vendor apps to improve project PIZE",
      "Worked with other teams as the assistant team lead to meet deliverables and deadlines"
    ],
    skills: [
      "HTML",
      "CSS",
      "Javascript",
    ],
    companyUrl: "https://www.linkedin.com/company/zuri-team/posts/?feedView=all",
    logo: "/experience/zuri_team_logo.jfif",
  },
];
