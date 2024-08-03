import React, { useRef } from "react"
import Spotify from "./Spotify"
import TiktokEmbed from "./TiktokEmbed"
import DiscordServer from "./DiscordServer"
import ExperienceAnimate from "./ExperienceAnimate"
import ExperienceTitle from "./ExperienceTitleAnimate"
import { useAnimation, useInView, motion } from "framer-motion"
import { experiences } from "@/lib/experienceData"

export default function SocialMedia() {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref)
  const ctrls = useAnimation()

  React.useEffect(() => {
    if (inView) {
      ctrls.start("visible")
    }
  }, [ctrls, inView])

  const AnimationSocialMedia = {
    hidden: {
      opacity: 0,
      y: `1em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 1.8,
        delay: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      aria-hidden="true"
      initial="hidden"
      animate={ctrls}
      variants={AnimationSocialMedia}
      className="flex w-full flex-col gap-4 lg:flex-row"
    >
      {/* {experiences.map((experience, index) => (
        <ExperienceAnimate
          key={index}
          name={experience.name}
          position={experience.position}
          date={experience.date}
          body={experience.body}
        />
      ))} */}
      {/* <Spotify /> */}
      {/* <TiktokEmbed /> */}
      {/* <DiscordServer /> */}
    </motion.div>
  )
}
