/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Required for GitHub Pages deployment
  output: "export",

  // 2. Mandatory because GitHub Pages has no image optimization server
  images: {
    unoptimized: true,
  },

  // 3. Replace 'your-repo-name' with your actual repository name 
  // (e.g., if your URL is iqmaa.github.io/portfolio, use "/portfolio")
  basePath: "/your-repo-name",

  // Note: headers() is ignored by "output: export" on GitHub Pages,
  // but keeping it here won't break the build.
  async headers() {
    return [
      {
        source: "/api/sb-contact",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,DELETE,PATCH,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;