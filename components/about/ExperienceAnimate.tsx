import { cn } from "@/lib/utils"
import Marquee from "../ui/marquee"

interface ExperienceAnimateProps {
  name: string
  position: string
  date: string
  body: string
}

export default function ExperienceAnimate({
  name,
  position,
  date,
  body,
}: ExperienceAnimateProps) {
  return (
    <figure
      className={cn(
        "relative w-full cursor-pointer overflow-hidden rounded-xl border p-4 lg:w-80",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="flex flex-col">
          <figcaption className="text-sm font-bold dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium">{position}</p>
          <p className="text-xs font-medium dark:text-white/40">{date}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  )
}
