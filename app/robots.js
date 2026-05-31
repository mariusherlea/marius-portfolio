//app/robots.js
export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap:
      "https://marius-portfolio-kappa.vercel.app/sitemap.xml",
  };
}