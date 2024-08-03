"use client"

import { motion } from "framer-motion"
import HeroText from "./HeroText"
import ParallaxText from "./ParallaxText"
import HeroGraphic from "./HeroGraphic"
import DigitalGlobe from "../DigitalGlobe"

export default function Hero() {
  return (
    <motion.section
      id="hero"
      className="h-screen w-full"
      initial="initial"
      animate="animate"
    >
      <div className="flex h-full w-full flex-col items-center justify-center">
        <HeroGraphic />
        <HeroText />
        <div className="mt-10 w-full overflow-hidden">
          <ParallaxText direction={500} baseVelocity={-1}>
            Junior Backend Developer
          </ParallaxText>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute left-0 top-[39%] hidden h-[87px] w-[200px] flex-col items-start justify-center rounded-br-full rounded-tr-full bg-zinc-800 px-2 dark:bg-zinc-800 dark:bg-opacity-80 lg:flex"
      >
        <p className="text-sm font-medium text-zinc-200 dark:text-zinc-200">
          Locate in
        </p>
        <p className="text-sm font-medium text-zinc-200 dark:text-zinc-200">
          Bogor,
        </p>
        <p className="text-sm font-medium text-zinc-200 dark:text-zinc-200">
          Indonesia.
        </p>
        <DigitalGlobe className="absolute right-3 top-[13%]" />
      </motion.div>
    </motion.section>
  )
}
