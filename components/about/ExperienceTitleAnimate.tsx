"use client"

import { useAnimation, useInView, motion } from "framer-motion"
import { Sparkles } from "lucide-react"
import { useEffect, useRef } from "react"

export default function ProjectTitleAnimate() {
  const ref = useRef(null)
  const isInView = useInView(ref)

  const ctrls = useAnimation()

  useEffect(() => {
    if (isInView) {
      ctrls.start("visible")
    }
  }, [ctrls, isInView])

  const projectTitleAnimation = {
    hidden: {
      opacity: 0,
      y: -150,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.8,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      animate={ctrls}
      initial="hidden"
      aria-hidden="true"
      variants={projectTitleAnimation}
      className="flex w-full items-center"
    >
      <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">Experience</h2>
      <h2 className="invisible ml-36 text-2xl font-bold md:text-3xl lg:visible lg:text-4xl">
        Spotify
      </h2>
      {/* <Sparkles className="h-9 w-9 md:h-11 md:w-11 lg:h-16 lg:w-16" /> */}
    </motion.div>
  )
}
