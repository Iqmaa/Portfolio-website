import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Python",
    description:
      "Develop versatile scripts, automation tools, and AI models with clean, readable, and efficient code.",
    rating: 5,
    icon: (props: any) => Icons.python({...props, style: {width: '50px', height:'40px', marginLeft:'-6px', marginTop:'-11px', marginBottom:'4px'}}), 
  },
  {
    name: "C/C++ \t",
    description:
      "Write high-performance, low-level software for systems where memory management and speed are critical.",
    rating: 5,
    icon: (props: any) => Icons.c({...props, style: {width: '40px', height:'40px', marginTop:'-8px',marginLeft:'-6px', marginBottom:'6px'}}), 
  },
  {
    name: "ROS2",
    description:
      "Architect distributed robotic systems using nodes, topics, and services for robust middleware communication.",
    rating: 4,
    icon: (props: any) => Icons.ros2({...props, style: {width: '50px', height:'40px', marginLeft:'-6px', marginTop:'-5px', marginBottom:'8px'}}), 
  },
  {
    name: "Gazebo",
    description:
      "Create high-fidelity 3D robotic simulations to test algorithms in physics-based virtual environments.",
    rating: 5,
    icon: (props: any) => Icons.gazebo({...props, style: {width: '50px', height:'40px', marginLeft:'-6px', marginTop:'-11px', marginBottom:'4px'}}), 
  },
  {
    name: "AutoCAD/Fusion360",
    description:
      "Design complex mechanical parts and assemblies using parametric 3D modeling and CAD/CAM workflows.",
    rating: 5,
    icon: (props: any) => Icons.autocad({...props, style: {width: '50px', height:'40px', marginLeft:'-6px', marginTop:'-1px', marginBottom:'0px'}}), 
  },
  {
    name: "Electronics",
    description:
      "Design and prototype circuit boards and soldering for hardware projects.",
    rating: 5,
    icon: (props: any) => Icons.soldering({...props, style: {width: '50px', height:'40px', marginLeft:'-6px', marginTop:'-1px', marginBottom:'0px'}}), 
  },
  {
    name: "Arduino",
    description:
      "Bridge the gap between software and hardware by programming microcontrollers to interact with sensors and actuators.",
    rating: 5,
    icon: (props: any) => Icons.arduino({...props, style: {width: '50px', height:'40px', marginLeft:'-6px', marginTop:'-11px', marginBottom:'4px'}}), 
  },
  {
    name: "IDA PRO",
    description:
      "Perform deep static and dynamic analysis to reverse engineer binary executables and uncover software logic.",
    rating: 5,
    icon: (props: any) => Icons.reversing({...props, style: {width: '50px', height:'40px', marginLeft:'-6px', marginTop:'-8px', marginBottom:'4px'}}), 
  },
  {
    name: "Javascript",
    description:
      "Create interactive and dynamic web experiences with the versatile scripting language.",
    rating: 5,
    icon: (props: any) => Icons.javascript({...props, style: {width: '50px', height:'40px', marginLeft:'-6px', marginTop:'-8px', marginBottom:'8px'}}), 
  },
  {
    name: "HTML 5",
    description:
      "Structure web content beautifully with the latest version of HyperText Markup Language. Frontend development",
    rating: 4,
    icon: (props: any) => Icons.html5({...props, style: {width: '50px', height:'40px', marginLeft:'-6px', marginTop:'-11px', marginBottom:'4px'}}), 
  },
  {
    name: "CSS 3",
    description:
      "Style web pages creatively with the latest iteration of Cascading Style Sheets. Frontend development",
    rating: 4,
    icon: Icons.css3,
  },
  {
    name: "Assembly",
    description:
      "Analyze low-level CPU instructions to understand malware and reverse engineer codes to exploit them.",
    rating: 4,
    icon: Icons.assembly,
  },
  {
    name: "Linux",
    description:
      "Navigate and manage Unix-based systems using command-line tools for security auditing, and development.",
    rating: 5,
    icon: (props: any) => Icons.linux({...props, style: {width: '50px', height:'90px', marginLeft:'-6px', marginTop:'-11px', marginBottom:'4px'}}),
  },
  {
    name: "Postman",
    description:
      "Document and test RESTful APIs by creating comprehensive collections and automated test scripts for developer use.",
    rating: 5,
    icon: (props: any) => Icons.postman({...props, style: {width: '50px', height:'40px', marginLeft:'-6px', marginTop:'-1px', marginBottom:'4px'}}), 
  },
  {
    name: "MKDocs & Mintlify",
    description:
      "Build high-quality documentation sites using Docs-as-Code workflows and Markdown.",
    rating: 5,
    icon: (props: any) => Icons.mintlify({...props, style: {width: '50px', height:'40px', marginLeft:'-6px', marginTop:'6px', marginBottom:'7px'}}),
  },
  {
    name: "Technical Wriitng",
    description:
      "Optimize technical content for search engines to increase visibility, authority, and organic traffic for developer resources",
    rating: 4,
    icon: (props: any) => Icons.seo({...props, style: {width: '50px', height:'40px', marginLeft:'-6px', marginTop:'-1px', marginBottom:'4px'}}), 
  },
  {
    name: "Bootstrap",
    description:
      "Quickly create responsive and appealing web designs using a popular CSS framework. Frontend development",
    rating: 4,
    icon: Icons.bootstrap,
  },
  {
    name: "PostgreSQL",
    description:
      "Manage and organize relational databases efficiently for data-driven applications.",
    rating: 3,
    icon: Icons.postgresql,
  },
  {
    name: "Canva",
    description:
      "Create professional designs for articles using graphic design tools and templates.",
    rating: 5,
    icon: (props: any) => Icons.canva({...props, style: {width: '50px', height:'40px', marginLeft:'-6px', marginTop:'4px', marginBottom:'4px'}}), 
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
