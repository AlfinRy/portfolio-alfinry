"use client"

import { useEffect, useState } from "react"
import { Cloud, ICloud } from "react-icon-cloud"

export const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
}

export type DynamicCloudProps = {
  iconSlugs: string[]
}

export default function IconCloud({ iconSlugs }: DynamicCloudProps) {
  const [images, setImages] = useState<string[]>([])

  useEffect(() => {
    // Gunakan CDN simpleicons langsung untuk mendapatkan warna asli
    const imageUrls = iconSlugs.map(
      (slug) => `https://cdn.simpleicons.org/${slug}`
    )
    setImages(imageUrls)
  }, [iconSlugs])

  const renderedIcons = images.map((src, index) => (
    <a
      key={index}
      href="#"
      onClick={(e) => e.preventDefault()}
      style={{ cursor: "pointer" }}
    >
      <img
        src={src}
        height={42}
        width={42}
        alt={iconSlugs[index]}
      />
    </a>
  ))

  return (
    // @ts-ignore
    <Cloud {...cloudProps}>
      <>{renderedIcons}</>
    </Cloud>
  )
}
