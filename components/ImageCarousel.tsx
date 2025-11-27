"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const images = [
  "/IMG_1.jpg",
  "/IMG_2.jpg",
  "/IMG_3.jpg",
  "/IMG_4.jpg",
  "/IMG_5.jpg",
]

export function ImageCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )

  return (
    <section className="mx-3">
        <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-5xl mx-auto mb-10"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem key={index}>
            <div className="relative aspect-video">
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                fill
                className="rounded-xl object-cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden lg:flex" />
      <CarouselNext className="hidden lg:flex" />
        </Carousel>
    </section>
  )
}