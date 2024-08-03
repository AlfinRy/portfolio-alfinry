"use client"

import { motion, useAnimation, useInView } from "framer-motion"
import { useRouter } from "next/navigation"
import { useEffect, useRef } from "react"
import { Button } from "../ui/button"
import { projectCardAnimation } from "./animationCard"
import MagneticEffect from "../providers/MagneticEffect"

export default function ProjectButton() {
  const router = useRouter()

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
      aria-hidden="true"
      variants={projectCardAnimation}
      className="mb-10 flex flex-col items-center justify-center gap-4"
    >
      <h2 className="text-center text-2xl font-bold md:text-3xl lg:text-5xl">
        Back to Home
      </h2>
      <MagneticEffect>
        <Button size="lg" variant="outline" onClick={() => router.push("/")}>
          Back
        </Button>
      </MagneticEffect>
    </motion.div>
  )
}
