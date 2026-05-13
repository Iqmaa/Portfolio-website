import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@Iqmaa",
    icon: Icons.gitHub,
    link: "https://github.com/Iqmaa",
  },
  {
    name: "LinkedIn",
    username: "Iqma",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/Iqma",
  },
  {
    name: "Twitter",
    username: "@Iqma__",
    icon: Icons.twitter,
    link: "https://x.com/Iqma__",
  },
  {
    name: "Gmail",
    username: "Iqma",
    icon: Icons.gmail,
    link: "mailto:hikmaholawore@gmail.com",
  },
];
