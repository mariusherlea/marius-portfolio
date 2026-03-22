"use client";

import { createContext, useContext, ReactNode } from "react";

// ✅ Tip pentru proiect
export type Project = {
  image: string;
  category: string;
  name: string;
  description: string;
  highlights: string[];
  tech: string[];
  live: string;
  github: string;
};

// ✅ Datele tale
const projectData: Project[] = [
 {
  image: "/work/storepulse.png",
  category: "SaaS",
  name: "StorePulse — eCommerce Analytics SaaS",
  description:
    "A production-style full-stack SaaS dashboard for tracking eCommerce performance, revenue, and customer activity.",
  highlights: [
    "Authentication system with protected dashboard access",
    "KPI cards, sales charts, top products, and recent orders",
    "PostgreSQL database with Prisma ORM integration",
    "Scalable full-stack architecture built with Next.js"
  ],
  tech: [
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "Prisma",
    "Auth.js",
    "Tailwind CSS",
    "Recharts"
  ],
  live: "#",
  github: "https://github.com/mariusherlea/ecommerce-analytics-saas"
},
  {
    image: "/work/ecom.png",
    category: "Full-Stack",
    name: "Full-Stack eCommerce Platform",
    description:
      "A modern eCommerce application built with Next.js 15 and Strapi.",
    highlights: [
      "Dynamic product pages with server-side rendering",
      "Cart functionality using React Context",
      "Stripe payment integration",
      "Responsive UI with Tailwind CSS",
    ],
    tech: ["Next.js", "TypeScript", "Strapi", "Stripe", "Tailwind CSS"],
    live: "#",
    github: "https://github.com/mariusherlea/ecommerce-frontend",
  },
  {
    image: "/work/blog.png",
    category: "Full-Stack",
    name: "Blog Platform with SEO & CMS",
    description:
      "A content-driven blog built with Next.js and Strapi.",
    highlights: [
      "Server-side pagination",
      "SEO optimization (meta tags, slugs)",
      "Comment system with moderation",
      "Portable text rendering",
    ],
    tech: ["Next.js", "TypeScript", "Strapi", "REST API"],
    live: "#",
    github: "https://github.com/mariusherlea/my-blog-frontend",
  },
];

// ✅ Context tipat corect
const ProjectContext = createContext<Project[] | undefined>(undefined);

// ✅ Provider
export const ProjectProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ProjectContext.Provider value={projectData}>
      {children}
    </ProjectContext.Provider>
  );
};

// ✅ Custom hook SAFE
export const useProjects = () => {
  const context = useContext(ProjectContext);

  if (!context) {
    throw new Error("useProjects must be used within a ProjectProvider");
  }

  return context;
};