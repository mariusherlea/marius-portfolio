"use client";

import Link from "next/link";
import { Button } from "./ui/button";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import ProjectCard from "./ProjectCard";
import { useProjects } from "@/dataProvider/ProjectData";

const Work = () => {
  const projectData = useProjects();

  return (
   <section className="relative mt-16 mb-12 overflow-hidden xl:mt-20 xl:mb-20">
      <div className="container mx-auto">
        <div className="grid items-center gap-12 xl:grid-cols-[380px_1fr]">
          {/* TEXT */}
          <div className="mx-auto flex w-full max-w-[400px] flex-col items-center text-center xl:mx-0 xl:items-start xl:text-left">
            <h2 className="section-title mb-4">Latest Projects</h2>

            <p className="subtitle mb-8">
              Proud to showcase some of my latest projects.
            </p>

            <Link href="/projects">
              <Button>All projects</Button>
            </Link>
          </div>

          {/* CAROUSEL */}
          <div className="relative min-w-0">
            <Swiper
              className="!pb-14"
              slidesPerView={1}
              spaceBetween={20}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                },
              }}
              modules={[Pagination]}
              pagination={{
                clickable: true,
              }}
            >
              {projectData.slice(0, 4).map((project, index) => (
                <SwiperSlide key={index} className="!h-auto">
                  <ProjectCard project={project} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;