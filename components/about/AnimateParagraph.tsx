"use client"
import { cn } from "@/lib/utils"
import {
  motion,
  progress,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion"
import { useEffect, useRef } from "react"

export default function AnimateParagraph({ paragraph }) {
  const element = useRef(null)
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  })

  const words = paragraph.split(" ")
  return (
    <p
      className="flex flex-wrap text-justify text-lg font-medium leading-none tracking-wide text-foreground md:text-xl"
      ref={element}
    >
      {words.map((word, i) => {
        const start = i / words.length
        const end = start + 1 / words.length
        return (
          <Word key={i} range={[start, end]} progress={scrollYProgress}>
            {word}
          </Word>
        )
      })}
    </p>
  )
}

const Word = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0, 1])
  return (
    <span className="relative mr-3 mt-3">
      <span className="absolute opacity-[0.1]">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  )
}

// interface AnimateParagraphProps {
//   paragraph: string
//   className?: string
//   delay?: number
// }

// export default function AnimateParagraph({
//   paragraph,
//   className,
//   delay,
// }: AnimateParagraphProps) {
//   const ref = useRef(null)
//   const ctrls = useAnimation()
//   const inView = useInView(ref)

//   useEffect(() => {
//     if (inView) {
//       ctrls.start("visible")
//     }
//   }, [ctrls, inView])

//   const AnimationParagraph = {
//     hidden: {
//       opacity: 0,
//       y: `1em`,
//     },
//     visible: {
//       opacity: 1,
//       y: `0em`,
//       transition: {
//         duration: 1.8,
//         delay: delay,
//         ease: [0.2, 0.65, 0.3, 0.9],
//       },
//     },
//   }

//   return (
//     <p className={cn("text-sm", className)}>
//       <motion.span
//         ref={ref}
//         aria-hidden="true"
//         initial="hidden"
//         animate={ctrls}
//         variants={AnimationParagraph}
//       >
//         {paragraph}
//       </motion.span>
//     </p>
//   )
// }
