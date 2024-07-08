// contexts/ProjectContext.js
import React, { createContext, useContext } from "react";

const ProjectContext = createContext([]);

const projectData = [
  {
    image: "/work/5.png",
    category: "Next.js",
    name: "Portfolio Website",
    description:
      "Website built with Next.js, Tailwind CSS,Framer Motion Shadcn and React Hooks.",
    link: "https://marius-portfolio-kappa.vercel.app/",
    github: "https://github.com/mariusherlea/marius-portfolio",
  },

  {
    image: "/work/6.png",
    category: "Next.js",
    name: "Food Recipe App",
    description:
      "NextLevel Food - share food recipes, mongodb for recipe data, next.js, aws for image hosting.",
    link: "/",
    github: "/https://github.com/mariusherlea/food-recipe",
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
