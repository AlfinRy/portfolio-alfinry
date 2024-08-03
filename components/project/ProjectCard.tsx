import { GithubIcon, LinkIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { BorderBeam } from "../ui/border-beam"

import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"
import {
  projectCardAnimation,
  projectCardDescriptionAnimation,
  projectCardImageAnimation,
  projectCardLinksAnimation,
  projectCardTechAnimation,
  projectCardTitleAnimation,
} from "./animationCard"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tech: string[]
  repo: string
  projectLink: string
}

export default function ProjectCard({
  title,
  description,
  image,
  tech,
  repo,
  projectLink,
}: ProjectCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref)
  const ctrls = useAnimation()

  useEffect(() => {
    if (isInView) {
      ctrls.start("visible")
    }
  }, [ctrls, isInView])

  return (
    <motion.div
      ref={ref}
      animate={ctrls}
      initial="hidden"
      variants={projectCardAnimation}
      aria-hidden="true"
      className="relative z-10 h-[400px] w-full items-stretch justify-center overflow-hidden rounded-xl border border-foreground/20 bg-zinc-200 dark:bg-zinc-800"
    >
      <motion.div
        ref={ref}
        animate={ctrls}
        initial="hidden"
        variants={projectCardImageAnimation}
        aria-hidden="true"
      >
        <Image
          width={1000}
          height={600}
          src={image}
          alt={title}
          className="absolute -bottom-2 right-0 w-[85%] object-contain md:w-[60%] lg:max-w-[55%]"
        />
      </motion.div>
      <motion.div
        ref={ref}
        animate={ctrls}
        initial="hidden"
        variants={projectCardLinksAnimation}
        aria-hidden="true"
        className="absolute left-0 top-0 ml-8 mt-6 flex items-center justify-center gap-4 lg:ml-14 lg:mt-10"
      >
        <Link
          href={repo}
          target="_blank"
          className="rounded-full bg-foreground p-2 transition-all duration-300 ease-in-out hover:bg-foreground/50"
          aria-label="Open Github Repo"
        >
          <GithubIcon className="h-6 w-6 text-zinc-100 dark:text-zinc-800 md:h-8 md:w-8 lg:h-10 lg:w-10" />
        </Link>
        {projectLink && (
          <Link
            href={projectLink}
            target="_blank"
            className="rounded-full bg-foreground p-2 transition-all duration-300 ease-in-out hover:bg-foreground/50"
            aria-label="Open Live Demo"
          >
            <LinkIcon className="h-6 w-6 text-zinc-100 dark:text-zinc-800 md:h-8 md:w-8 lg:h-10 lg:w-10" />
          </Link>
        )}
      </motion.div>

      <div className="absolute left-10 top-20 mb-10 ml-0 text-foreground lg:top-32">
        <h3 className="max-w-[90%] text-4xl font-bold leading-none text-foreground md:leading-none lg:max-w-[450px] lg:text-5xl lg:leading-none">
          <motion.span
            ref={ref}
            animate={ctrls}
            initial="hidden"
            variants={projectCardTitleAnimation}
            aria-hidden="true"
          >
            {title}
          </motion.span>
        </h3>
        <p className="mt-4 w-[75%] max-w-[454px] text-xs font-semibold text-foreground/50">
          <motion.span
            ref={ref}
            animate={ctrls}
            initial="hidden"
            variants={projectCardDescriptionAnimation}
            aria-hidden="true"
          >
            {description}
          </motion.span>
        </p>
        <motion.div
          ref={ref}
          animate={ctrls}
          initial="hidden"
          variants={projectCardTechAnimation}
          aria-hidden="true"
          className="mt-3 flex gap-4"
        >
          {tech.map((tech, index) => (
            <p
              key={index}
              className="text-xs font-semibold text-foreground/50 md:text-sm"
            >
              {tech}
            </p>
          ))}
        </motion.div>
      </div>
      <BorderBeam size={150} />
    </motion.div>
  )
}
