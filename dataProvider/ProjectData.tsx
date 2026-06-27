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
  live?: string;
  github: string;
};

// ✅ Datele tale
const projectData: Project[] = [
  {
  image: "/work/truckmate.png",
  category: "Mobile",
  name: "TruckMate — Smart Navigation for Professional Drivers",
  description:
    "A cross-platform mobile application that helps professional truck drivers discover essential points of interest such as truck parking, fuel stations, restaurants, showers, and service locations through an interactive map experience.",

  highlights: [
    "Developed a location-based mobile application with Google Maps integration and real-time map interaction",
    "Implemented intelligent marker clustering to efficiently display large numbers of locations while maintaining performance",
    "Designed custom map markers, interactive location cards, and smooth zoom-to-cluster navigation",
    "Built scalable architecture for future integration with backend services, user-generated content, and location management"
  ],

  tech: [
    "React Native",
    "Expo",
    "TypeScript",
    "Google Maps",
    "React Native Maps"
  ],

  
  github: "https://github.com/mariusherlea/poi-map-mobile-sdk53"
},
 {
  image: "/work/storepulse.png",
  category: "SaaS",
  name: "StorePulse — eCommerce Analytics SaaS",
  description:
    "A production-style full-stack SaaS dashboard for tracking eCommerce performance, revenue, and customer activity.",
  highlights: [
    "Built a SaaS-style analytics dashboard for tracking sales, performance, and user behavior",
    "Designed scalable UI for handling dynamic data and real-time updates",
    "Focused on clean architecture, reusable components, and performance optimization"
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
  live: "https://candid-pie-22ddca.netlify.app/",
  github: "https://github.com/mariusherlea/ecommerce-analytics-saas"
},
  {
    image: "/work/ecom.png",
    category: "Full-Stack",
    name: "Full-Stack eCommerce Platform",
    description:
      "A modern eCommerce application built with Next.js 15 and Strapi.",
    highlights: [
      "Developed a full eCommerce experience with product pages, cart, and checkout flow",
      "Integrated Stripe for secure payments and handled client-server data interactions",
      "Focused on user experience, state management, and scalable component structure",
    ],
    tech: ["Next.js", "TypeScript", "Strapi", "Stripe", "Tailwind CSS"],
    live: "https://ecommerce-frontend-otpz.vercel.app/",
    github: "https://github.com/mariusherlea/ecommerce-frontend",
  },
  {
    image: "/work/blog.png",
    category: "Full-Stack",
    name: "Blog Platform with SEO & CMS",
    description:
      "A content-driven blog built with Next.js and Strapi.",
    highlights: [
      "Built a content-driven platform with dynamic routing, comments, and pagination",
      "Implemented SEO features including slugs and structured content rendering",
      "Focused on performance, clean UI, and maintainable frontend architecture",
    ],
    tech: ["Next.js", "TypeScript", "Strapi", "REST API"],
    // live: "https://my-blog-frontend-lime.vercel.app/",
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