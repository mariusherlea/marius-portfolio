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
  category: "Mobile / Algorithms",
  name: "TruckMate — Smart Navigation & Route Optimization for Professional Drivers",

  description:
    "A cross-platform mobile application designed for professional truck drivers to discover, organize, and optimize routes between essential points of interest such as truck parking, fuel stations, restaurants, showers, and service locations.",

  highlights: [
    "Developed an interactive map-based mobile application for professional drivers using React Native, Expo, TypeScript, Google Maps, and React Native Maps",

    "Implemented intelligent POI clustering to efficiently display multiple locations while maintaining a clean and responsive map experience",

    "Integrated Google Routes API to calculate real road distances and travel times between points of interest instead of relying on straight-line geographical distances",

    "Built a road-distance matrix system capable of evaluating routes between multiple POIs using real road infrastructure",

    "Implemented route optimization using a TSP-based algorithm to determine an optimized order for visiting multiple points of interest",

    "Added an interactive optimized-route panel displaying the calculated POI sequence and total road distance",

    "Designed reusable map components, interactive markers, cluster navigation, location cards, and modular TypeScript architecture",

    "Refactored the application into reusable components, hooks, algorithms, services, utilities, and data modules to improve scalability and maintainability"
  ],

  tech: [
    "React Native",
    "Expo",
    "TypeScript",
    "Google Maps",
    "Google Routes API",
    "React Native Maps",
    "TSP Route Optimization",
    "Map Clustering"
  ],

  
  github: "https://github.com/mariusherlea/poi-map-mobile-sdk53"
},
 {
  image: "/work/storepulse.png",
  category: "SaaS",
 

name: "StorePulse — eCommerce Analytics & Forecasting SaaS",

description:
  "A production-style full-stack SaaS platform for eCommerce analytics, revenue intelligence, trend analysis, and data-driven forecasting.",

highlights: [
  "Built a full-stack SaaS analytics platform for tracking revenue, orders, customers, and average order value",
  "Implemented quantitative revenue analysis using historical sales data and trend detection",
  "Developed a 30-day revenue forecasting engine based on linear regression",
  "Added data-driven growth analysis and forecast projections for eCommerce performance",
  "Designed scalable dashboard architecture with reusable components and dynamic analytics",
  "Implemented authentication, PostgreSQL data persistence, and Prisma ORM",
],

tech: [
  "Next.js",
  "TypeScript",
  "PostgreSQL",
  "Prisma",
  "Auth.js",
  "Tailwind CSS",
  "Recharts",
  "Linear Regression",
  "Quantitative Analytics",
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