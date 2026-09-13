//app/projects/page.jsx
"use client";
import React, { useState, useEffect } from "react";

import ProjectCard from "../../components/ProjectCard";
import { useProjects } from "../../dataProvider/ProjectData";

export const metadata = {
  title: "Projects | Marius Herlea",
  description:
    "Explore the web and mobile development projects built by Marius Herlea using Next.js, React, TypeScript, React Native, Strapi, PostgreSQL, Prisma, and Stripe.",

  alternates: {
    canonical: "/projects",
  },
};

const Projects = () => {
  const projectData = useProjects();
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");

  // Set categories
  useEffect(() => {
    if (projectData.length) {
      const uniqueCategories = [
        "all",
        ...new Set(projectData.map((item) => item.category)),
      ];
      setCategories(uniqueCategories);
    }
  }, [projectData]);

  // Filter projects
  const filteredProjects = projectData.filter(
    (project) =>
      activeCategory === "all" || project.category === activeCategory
  );

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          My Projects
        </h2>

        {/* 🔥 FILTER BUTTONS */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full border transition ${
                activeCategory === category
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* 🔥 PROJECT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;