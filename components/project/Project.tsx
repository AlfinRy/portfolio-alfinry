import { projects } from "@/lib/projectData"
import ProjectCard from "./ProjectCard"
import ProjectTitleAnimate from "./ProjectTitleAnimate"
import ProjectButton from "./ProjectButton"
import AnimateTitle from "../about/AnimateTitle"
import ProjectGlobeAnimate from "./ProjectGlobeAnimate"

export default function Project() {
  return (
    <section
      id="projects"
      className="z-[20] mx-auto mt-24 flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]"
    >
      {/* <ProjectTitleAnimate /> */}
      <div className="mx-36 flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <div className="mb-10 flex w-full items-center justify-between gap-x-2">
          <AnimateTitle
            title={"Recent Projects"}
            className="text-left text-3xl font-bold leading-[0.9em] tracking-tighter md:text-4xl lg:text-5xl"
            wordSpace="mr-[14px]"
            charSpace="mr-[0.0001em]"
          />
          <ProjectGlobeAnimate />
        </div>
        <div className="mb-24 grid w-[100%] grid-cols-1 grid-rows-2 gap-x-6 gap-y-6 lg:w-[80%] lg:max-w-[1200px] lg:grid-cols-1">
          {projects.slice(0, 3).map((project, index) => (
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
      </div>
      <ProjectButton />
    </section>
  )
}
