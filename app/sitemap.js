//app/sitemap.js
export default function sitemap() {
  return [
    {
      url: "https://marius-portfolio-kappa.vercel.app",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: "https://marius-portfolio-kappa.vercel.app/projects",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },

    {
      url: "https://marius-portfolio-kappa.vercel.app/contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://marius-portfolio-kappa.vercel.app/resume",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}