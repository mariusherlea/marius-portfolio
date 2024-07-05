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
    link: "/",
    github: "/",
  },

  {
    image: "/work/6.png",
    category: "Next.js",
    name: "Food Recipe App",
    description:
      "NextLevel Food is a platform for foodies to share their favorite recipes with the world.",
    link: "/",
    github: "/",
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
