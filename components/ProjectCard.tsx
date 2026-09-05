"use client";

import { Project } from "../dataProvider/ProjectData";

type Props = {
  project: Project;
};

const ProjectCard = ({ project }: Props) => {
  return (
    <article
      className="
        group flex h-full min-h-[540px] flex-col overflow-hidden rounded-2xl
        border border-slate-200 bg-white shadow-sm
        transition duration-300
        hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl

        dark:border-white/10 dark:bg-white/[0.03]
        dark:hover:border-white/20
      "
    >
      {/* CONTENT */}
      <div className="flex flex-1 flex-col px-6 py-8 xl:px-7 xl:py-9">
        {/* Category */}
        <p
          className="
            mb-2 text-xs font-medium text-slate-500
            dark:text-white/60
          "
        >
          {project.category}
        </p>

        {/* Title */}
        <h3
          className="
            mb-3 text-xl font-semibold leading-tight text-slate-900
            dark:text-white
          "
        >
          {project.name}
        </h3>

        {/* Description */}
        <p
          className="
            mb-4 line-clamp-3 text-sm leading-6 text-slate-600
            dark:text-white/70
          "
        >
          {project.description}
        </p>

        {/* Highlights */}
        <ul
          className="
            mb-5 space-y-2 text-sm text-slate-700
            dark:text-white/80
          "
        >
          {project.highlights.slice(0, 3).map((item, i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Technologies */}
        <div className="mb-6 flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="
                h-fit rounded-full border border-slate-200
                px-3 py-1 text-xs text-slate-600
                dark:border-white/10 dark:text-white/70
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-auto flex items-center gap-4">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-full bg-accent px-4 py-2
                text-sm font-medium text-yellow
                transition hover:opacity-90
              "
            >
              Live Demo
            </a>
          )}

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-sm font-medium text-slate-700 underline
              underline-offset-4 transition hover:text-accent
              dark:text-white dark:hover:text-accent
            "
          >
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;