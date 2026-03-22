"use client";
import React, { useState, useEffect } from "react";

import ProjectCard from "../../components/ProjectCard";
import { useProjects } from "../../dataProvider/ProjectData";

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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;