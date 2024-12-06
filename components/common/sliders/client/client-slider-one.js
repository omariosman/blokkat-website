"use client"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function ClientSliderOne() {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 4000,
    cssEase: "linear",
    pauseOnHover: false,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  }

  const partners = [
    "/images/partners/arabs-in-blockchain.png",
    "/images/partners/chainlink.svg",
    "/images/partners/1inch.svg",
    "/images/partners/cartesi.svg",
    "/images/partners/storj.svg",
    "/images/partners/pizzadao.png",
    //"/images/partners/greek-campus.jpg",
  ]

  return (
    <div className="w-full bg-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="heading-partners-1 text-white text-xl">
            Together, we build, educate, and innovate.
          </h3>
          <h4 className="heading-partners-2 text-white text-xl">
            Meet our previous partners
          </h4>
        </div>
        <div className="overflow-hidden">
          <Slider {...settings}>
            {partners.map((partner, index) => (
              <div key={index} className="px-4">
                <div className="partner-img-holder">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={partner} alt={`Partner ${index + 1}`} className="max-h-full w-auto" />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

