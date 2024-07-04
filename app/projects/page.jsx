"use client";
import React, { useState, useEffect } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";
import { useProjects } from "@/dataProvider/ProjectData";

const Projects = () => {
  const projectData = useProjects();
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all projects");

  // Update categories based on projectData
  useEffect(() => {
    if (projectData.length) {
      const uniqueCategories = [
        "all projects",
        ...new Set(projectData.map((item) => item.category)),
      ];
      setCategories(uniqueCategories);
    }
  }, [projectData]);

  const filteredProjects = projectData.filter(
    (project) =>
      activeCategory === "all projects" || project.category === activeCategory
  );

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My projects
        </h2>
        {/* Tabs */}
        <Tabs defaultValue={activeCategory} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => (
              <TabsTrigger
                onClick={() => setActiveCategory(category)}
                key={index}
                value={category}
                className="capitalize w-[162px] md:w-auto"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          {/* Tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => (
              <TabsContent key={index} value={activeCategory}>
                <ProjectCard project={project} />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
