// contexts/ProjectContext.js
import React, { createContext, useContext } from "react";

const ProjectContext = createContext([]);

const projectData = [
  {
    image: "/work/ecom.png",
    category: "Next.js",
    name: "E-commerce web app",
    description:
      "E-commerce built with Next.js, Strapi as backend and Stripe for payment.",
    link: "/",
    github: "https://github.com/mariusherlea/ecommerce-frontend",
  },
  {
    image: "/work/blog.png",
    category: "Next.js",
    name: "Blog App",
    description:
      "Blog webpage with Strapi as back-end and Next.js as front-end",
    link: "/",
    github: "https://github.com/mariusherlea/my-blog-frontend",
  },
];

export const ProjectProvider = ({ children }) => {
  return (
    <ProjectContext.Provider value={projectData}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjects = () => {
  return useContext(ProjectContext);
};
