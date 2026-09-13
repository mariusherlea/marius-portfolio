import ProjectsClient from "./ProjectsClient";

export const metadata = {
  title: "Projects | Marius Herlea",
  description:
    "Explore the web and mobile development projects built by Marius Herlea using Next.js, React, TypeScript, React Native, Strapi, PostgreSQL, Prisma, and Stripe.",

  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}