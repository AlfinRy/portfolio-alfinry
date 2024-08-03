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
      className="relative z-10 flex h-[500px] w-full flex-col items-stretch justify-start overflow-hidden rounded-3xl border border-foreground/20 bg-zinc-200 p-8 dark:bg-zinc-800"
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
          className="absolute -bottom-2 right-0 z-0 w-[75%] object-contain lg:bottom-0 lg:max-w-full"
        />
      </motion.div>
      <h3 className="text-2xl font-bold leading-none text-foreground">
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
      <p className="mt-2 text-justify text-xs text-foreground/60 lg:text-sm">
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
        className="mt-2 flex flex-wrap gap-2"
      >
        {tech.map((tech, index) => (
          <p
            key={index}
            className="cursor-pointer rounded-md bg-foreground/10 px-2 py-1 text-sm text-foreground/60 transition-colors hover:bg-foreground/20"
          >
            {tech}
          </p>
        ))}
      </motion.div>
      <motion.div
        ref={ref}
        animate={ctrls}
        initial="hidden"
        variants={projectCardLinksAnimation}
        aria-hidden="true"
        className="mt-4 flex items-center gap-x-2"
      >
        <Link
          href={repo}
          target="_blank"
          className="rounded-full bg-foreground p-2 transition-all duration-300 ease-in-out hover:bg-foreground/50"
          aria-label="Open Github Repo"
        >
          <GithubIcon className="h-6 w-6 text-zinc-100 dark:text-zinc-800 md:h-8 md:w-8" />
        </Link>
        {projectLink && (
          <Link
            href={projectLink}
            target="_blank"
            className="rounded-full bg-foreground p-2 transition-all duration-300 ease-in-out hover:bg-foreground/50"
            aria-label="Open Live Demo"
          >
            <LinkIcon className="h-6 w-6 text-zinc-100 dark:text-zinc-800 md:h-8 md:w-8" />
          </Link>
        )}
      </motion.div>
      <BorderBeam size={150} />
    </motion.div>
  )
}
