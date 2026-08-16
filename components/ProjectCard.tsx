"use client";

import { Project } from "../dataProvider/ProjectData";

type Props = {
  project: Project;
};

const ProjectCard = ({ project }: Props) => {
  return (
<article className="group flex h-full min-h-[540px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-sm transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-xl">
      {/* CONTENT */}
      <div className="flex flex-1 flex-col px-6 py-8 xl:px-7 xl:py-9">
        <p className="mb-2 text-xs font-medium text-white/60">
          {project.category}
        </p>

        <h3 className="mb-3 text-xl font-semibold leading-tight">
          {project.name}
        </h3>

        <p className="mb-4 line-clamp-3 text-sm leading-6 text-white/70">
          {project.description}
        </p>

        <ul className="mb-5 space-y-2 text-sm text-white/80">
          {project.highlights.slice(0, 3).map((item, i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mb-6 flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="h-fit rounded-full border border-white/10 px-3 py-1 text-xs text-white/70"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-4">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-yellow transition hover:opacity-90"
            >
              Live Demo
            </a>
          )}

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium underline underline-offset-4 transition hover:text-accent"
          >
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;