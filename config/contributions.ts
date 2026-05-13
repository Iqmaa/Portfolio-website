export interface contributionsInterface {
  repo: string;
  contibutionDescription: string;
  repoOwner: string;
  link: string;
}

export const contributionsUnsorted: contributionsInterface[] = [ //add links  //remove private details in resume
  {
    repo: "Free-code-camp",
    contibutionDescription:
      "Contributed to the freecodecamp publication",
    repoOwner: "FreeCodeCamp",
    link: "https://www.freecodecamp.org/news/author/Iqma/",
  },
  // {
  //   repo: "hacktoberfest-chaoss",
  //   contibutionDescription:
  //     "wrote articles for the chaoss blog",
  //   repoOwner: "CHAOSS Africa",
  //   link: "",
  // },
  {
    repo: "hacktoberfest-mautic",
    contibutionDescription:
      "Helped to improve Mautic's documentation",
    repoOwner: "Mautic",
    link: "https://github.com/mautic/mautic-community-handbook/pull/230",
  },
    {
    repo: "hacktoberfest-UmbracoDocs",
    contibutionDescription:
      "Helped to improve umbraco's documentation",
    repoOwner: "Umbraco",
    link: "https://github.com/umbraco/UmbracoDocs/pull/6501",
  },
];

export const featuredContributions: contributionsInterface[] =
  contributionsUnsorted.slice(0, 3);
