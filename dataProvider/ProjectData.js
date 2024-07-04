// contexts/ProjectContext.js
import React, { createContext, useContext } from "react";

const ProjectContext = createContext([]);

const projectData = [
  {
    image: "/work/4.png",
    category: "react js",
    name: "Ceva Website",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "next js",
    name: "Altcdeva Website",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "vanilla js",
    name: "Si mai Website",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "html css",
    name: "Vai viata lui Website",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
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
