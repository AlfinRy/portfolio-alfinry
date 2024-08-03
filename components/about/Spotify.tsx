"use client"

import { useGetDataSpotify } from "@/hooks/useGetDataSpotify"
import { LogoSpotify } from "../LogoIcon"
import Image from "next/image"
import Link from "next/link"
import TypingAnimation from "../ui/typing-animation"

export default function Spotify() {
  const { data, error, isLoading } = useGetDataSpotify()

  if (isLoading || error)
    return (
      <div
        className={`inline-flex min-w-[250px] rounded-xl bg-zinc-200 p-3 pr-3 dark:bg-zinc-800 md:pr-10`}
      >
        <div className="w-[75px] animate-pulse overflow-hidden rounded-lg p-5 sm:w-[100px]">
          <LogoSpotify className="h-8 w-8" />
        </div>

        <div className="mx-5 flex items-center justify-center">
          <p className="animate-pulse text-center text-xl font-bold text-black dark:text-white sm:text-base">
            Not Playing Music.....
          </p>
          {/* <TypingAnimation
            className="animate-pulse text-center text-xl font-bold text-black dark:text-white sm:text-base"
            text="Not Playing Music....."
          /> */}
          {/* <div className="mb-5 mt-1">
            <div className="w-28 animate-pulse rounded-full bg-zinc-300 p-2 dark:bg-zinc-800 sm:w-40"></div>
          </div>
          <div className="mb-2 w-32 animate-pulse rounded-full bg-zinc-300 p-3 dark:bg-zinc-800 sm:w-48">
          </div>
          <div className="w-40 animate-pulse rounded-full bg-zinc-300 p-2 dark:bg-zinc-800 sm:w-52"></div> */}
        </div>
      </div>
    )

  if (data)
    return (
      <div className="flex min-w-[250px] max-w-full items-center justify-start rounded-xl bg-zinc-200 p-3 pr-3 dark:bg-zinc-800 md:pr-10">
        <Link href={data.href} target="_blank" rel="noopener noreferrer">
          <div className="relative w-[75px] overflow-hidden rounded-lg sm:w-[100px]">
            <Image
              src={data?.albumArt.url}
              alt="Album art"
              width={100}
              height={100}
            />
            <div className="absolute bottom-0 right-3 z-20 w-6">
              <LogoSpotify className="h-8 w-8" />
            </div>
          </div>
        </Link>

        <div className="mx-5 overflow-x-hidden">
          <h3 className="mb-3 text-xs font-semibold sm:text-sm">
            {data.currentlyPlaying ? "LISTENING TO SPOTIFY" : "LAST PLAYED"}
          </h3>
          <a
            href={data.href}
            target="_blank"
            rel="noopener noreferrer"
            className="line-clamp-1 text-base font-bold hover:line-clamp-none hover:animate-marquee hover:whitespace-nowrap hover:underline sm:text-lg"
          >
            {data.name}
          </a>
          <div className="line-clamp-1 text-sm font-semibold hover:line-clamp-none hover:animate-marquee hover:whitespace-nowrap sm:text-base">
            By
            {data?.artists.map((artist, i) => (
              <span key={`artist${i}`} className="ml-1">
                <a
                  className="hover:cursor-pointer hover:underline"
                  href={artist.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {artist.name}
                </a>
                {i === data.artists.length - 1 ? "" : ","}
              </span>
            ))}
          </div>
        </div>
      </div>
    )
}
