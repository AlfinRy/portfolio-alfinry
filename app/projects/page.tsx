"use client"

import AnimateTitle from "@/components/about/AnimateTitle"
import ProjectGlobeAnimate from "@/components/project/ProjectGlobeAnimate"
import ProjectCard from "@/components/moreProject/ProjectsCard"
import ProjectButton from "@/components/moreProject/ProjectsButton"
import { projects } from "@/lib/projectData"

export default function moreProject() {
  return (
    <main
      data-scroll-container
      className="bg-noise flex min-h-screen w-full flex-col items-center bg-transparent bg-repeat p-4 lg:p-24"
    >
      <div className="mb-10 flex w-full items-center justify-between gap-x-2 md:mb-16">
        <AnimateTitle
          title={"All Projects"}
          className="text-left text-[40px] font-bold leading-[0.9em] tracking-tighter sm:text-[45px] md:text-[60px] lg:text-[80px]"
          wordSpace="mr-[14px]"
          charSpace="mr-[0.0001em]"
        />
        <ProjectGlobeAnimate />
      </div>
      <div className="mb-14 mt-10 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            tech={project.tech}
            repo={project.repo}
            projectLink={project.linkProject}
          />
        ))}
      </div>
      <ProjectButton />
    </main>
  )
}
