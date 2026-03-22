//components/ProjectCard.tsx
"use client";

import { Project } from "../dataProvider/ProjectData";

type Props = {
  project: Project;
};

const ProjectCard = ({ project }: Props) => {
  return (
    <div className="border rounded-xl p-4 shadow-sm hover:shadow-md transition">
      <img
        src={project.image}
        alt={project.name}
        className="rounded-lg mb-4"
      />

      <h3 className="text-xl font-semibold mb-2">
        {project.name}
      </h3>

      <p className="text-muted-foreground mb-3">
        {project.description}
      </p>

      <ul className="text-sm mb-4 space-y-1">
        {project.highlights.map((item, i) => (
          <li key={i}>• {item}</li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech, i) => (
          <span
            key={i}
            className="text-xs px-2 py-1 bg-gray-200 rounded"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-3">
        <a
          href={project.live}
          target="_blank"
          className="underline"
        >
          Live Demo
        </a>
        <a
          href={project.github}
          target="_blank"
          className="underline"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;