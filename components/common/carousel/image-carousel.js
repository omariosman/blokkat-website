'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleImages, setVisibleImages] = useState([])

  useEffect(() => {
    updateVisibleImages(currentIndex)
  }, [currentIndex, images])

  const updateVisibleImages = (index) => {
    const imageCount = images.length
    const prev = (index - 1 + imageCount) % imageCount
    const next = (index + 1) % imageCount
    setVisibleImages([images[prev], images[index], images[next]])
  }

  const handleImageClick = (direction) => {
    setCurrentIndex((prevIndex) => {
      const newIndex = direction === 'left'
        ? (prevIndex - 1 + images.length) % images.length
        : (prevIndex + 1) % images.length
      return newIndex
    })
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden"> {/* Constrain carousel */}
      <div className="flex flex-row flex-nowrap justify-center items-center gap-4">
        {visibleImages.map((img, index) => (
          <div
            key={index}
            className={`flex-shrink-0 transition-all duration-300 ease-in-out ${
              index === 1
                ? 'w-[400px] h-[300px]'  // Set both width and height for main image
                : 'w-[200px] h-[200px] opacity-50 cursor-pointer hover:opacity-75' // Consistent size and opacity for side images
            }`}
            onClick={() => index !== 1 && handleImageClick(index === 0 ? 'left' : 'right')}
          >
            <Image
              src={img}
              width={300}
              height={200}
              alt={`Carousel image ${index + 1}`}
              // Removed fill prop, lets Next.js handle image sizing
              className="object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
      <button
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 z-10"
        onClick={() => handleImageClick('left')}
      >
        <ChevronLeft className="h-6 w-6 text-gray-800" />
      </button>
      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 z-10"
        onClick={() => handleImageClick('right')}
      >
        <ChevronRight className="h-6 w-6 text-gray-800" />
      </button>
    </div>
  )
}

export default ImageCarousel