import AboutGlobeAnimate from "./AboutGlobeAnimate"
import AnimateParagraph from "./AnimateParagraph"
import AnimateTitle from "./AnimateTitle"
import ExperienceTitle from "./ExperienceTitleAnimate"
import Spotify from "./Spotify"
import IconCloud from "../ui/icon-cloud"
import ExperienceAnimate from "./ExperienceAnimate"
import { experiences } from "@/lib/experienceData"
import SpotifyTitleAnimate from "./SpotifyTitleAnimate"

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "express",
  "mongodb",
  "vercel",
  "git",
  "github",
  "visualstudiocode",
  "figma",
  "laravel",
  "codeigniter",
  "php",
  "ejs",
  "json",
  "jquery",
  "mysql",
  "bootstrap",
  "tailwindcss",
  "go",
  "nodedotjs",
  "nextdotjs",
  "jenkins",
  "docker",
  "redis",
  "postman",
  "sonarqube",
  "postgresql",
  "amazonaws"
]

export default function About() {
  return (
    <section
      id="about"
      className="relative mb-10 flex min-h-screen w-full items-center justify-center overflow-hidden"
    >
      <div className="mx-36 flex w-[90%] flex-col items-start justify-center lg:max-w-[1212.8px]">
        <div className="mb-5 flex w-full items-center justify-between gap-x-2">
          <AnimateTitle
            title={"About Me"}
            className="text-left text-3xl font-bold leading-[0.9em] tracking-tighter md:text-4xl lg:text-5xl"
            wordSpace="mr-[14px]"
            charSpace="mr-[0.0001em]"
          />
          <AboutGlobeAnimate />
        </div>

        <div className="mb-10 flex w-full flex-col gap-4 leading-relaxed tracking-wide md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16 lg:max-w-[100%] lg:text-base">
          <AnimateParagraph
            paragraph="Hi, I'm Alfin Reynaldi, a Web Developer focused on building scalable and production-ready web applications. I specialize in Laravel and React, with hands-on experience handling real-world systems — from feature development and debugging production issues to frontend migration and backend reliability improvements. I'm passionate about backend architecture, scalability, and building maintainable systems that grow with the product. 🚀"
          />
        </div>

        <div className="flex w-full flex-col justify-between gap-4 lg:max-w-[1200px] ">
          <ExperienceTitle />
          <div className="flex w-full flex-col gap-4 lg:flex-row">
            {experiences.map((experience, index) => (
              <ExperienceAnimate
                key={index}
                name={experience.name}
                position={experience.position}
                date={experience.date}
                body={experience.body}
              />
            ))}
          </div>
          <SpotifyTitleAnimate />
          <Spotify />
        </div>

        <div className="flex w-full flex-col justify-between gap-4 lg:max-w-[1200px] ">
          {/* <SkillTitle /> */}
          <div className="mt-10 flex w-full items-center justify-between gap-x-2">
            <AnimateTitle
              title={"Skill"}
              className="text-left text-3xl font-bold leading-[0.9em] tracking-tighter md:text-4xl lg:text-5xl"
              wordSpace="mr-[14px]"
              charSpace="mr-[0.0001em]"
            />
            <AboutGlobeAnimate />
          </div>
          <IconCloud iconSlugs={slugs} />
        </div>
      </div>
    </section>
  )
}
