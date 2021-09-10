import React from "react"
import { Link } from "gatsby";
import Layout from "../components/Layout";
import WebDev from "../images/hero.inline.svg";
import Box from "../images/box.inline.svg";
import { StaticImage } from "gatsby-plugin-image";
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

export default function Home(props) {
  const [pause, setPause] = React.useState(false)
  const timer = React.useRef()
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    duration: 1000,
    dragStart: () => {
      setPause(true)
    },
    dragEnd: () => {
      setPause(false)
    },
  })

  React.useEffect(() => {
    sliderRef.current.addEventListener("mouseover", () => {
      setPause(true)
    })
    sliderRef.current.addEventListener("mouseout", () => {
      setPause(false)
    })
  }, [sliderRef])

  React.useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next()
      }
    }, 5000)
    return () => {
      clearInterval(timer.current)
    }
  }, [pause, slider])

  return (
    <Layout>
      <div className="my-20 space-y-40">
        <div className="flex items-center w-full">
          <div className="flex-1">
            <div className="w-full space-y-6">
              <div className="">
                <h2 className="text-[120px] font-bold text-primary filter drop-shadow-secondary">Hello!</h2>
                <p className="max-w-xl text-4xl font-medium leading-snug text-gray-800">
                  I'm Subtain Farooq, a <span className="text-background-">Web Developer</span> from Pakistan.
                </p>
              </div>
              <div className="flex space-x-3">
                <Link to="/" className="px-6 py-2 text-xl font-medium text-center duration-100 ease-linear bg-white rounded-full w-44 transition-color border-3 text-primary border-primary hover:bg-primary hover:text-white">Portfolio</Link>
                <Link to="/" className="px-6 py-2 text-xl font-medium text-center duration-100 ease-linear bg-white rounded-full w-44 transition-color border-3 text-secondary border-secondary hover:bg-secondary hover:text-white">Hire Me</Link>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <WebDev />
          </div>
        </div>
        <div className="flex flex-col items-end justify-end w-full space-y-12">
          <div className="flex items-center justify-end w-full max-w-4xl px-10 py-8 bg-secondary">
            <h2 className="font-bold leading-tight text-right text-white text-7xl">Good <span className="">design</span><br /> makes life better.</h2>
          </div>
          <p className="max-w-4xl text-2xl leading-snug text-justify text-gray-600">
            Expert Web Designers and Web Developers trained in the digital industry who offer a bespoke, professional and trustworthy service.
          </p>
        </div>
        <div className="w-full">
          <div className="flex justify-between">
            <div className="flex flex-col justify-end flex-shrink-0 space-y-4">
              <h2 className="max-w-4xl text-tertiary uppercase font-semibold text-[100px] leading-none">
                Selected Work
              </h2>
              <div>
                <p className="text-4xl text-gray-700">It's all about the experience</p>
                <Link to="" className="inline-block mt-2 text-xl text-tertiary hover:text-primary">View all projects</Link>
              </div>
            </div>
            {/* <div className="self-end w-full max-w-sm pt-28">
              <Box />
            </div> */}
          </div>
        </div>
        <div ref={sliderRef} className="w-full h-full keen-slider">
          <div className="keen-slider__slide number-slide1">
            <div className="relative max-w-4xl py-20 mx-auto">
              <div className="flex items-center">
                <div className="z-10 w-full max-w-xs">
                  <h3 className="text-5xl font-medium leading-tight text-gray-900">
                    Landig Page Design
                  </h3>
                  <p className="mt-3 text-lg text-gray-600 uppercase">Website</p>
                  <p className="text-sm text-secondary">Feb 2020</p>
                  <Link to="/" className="inline-block mt-8 text-sm text-tertiary">View Project</Link>
                </div>
                <div className="absolute w-full max-w-md p-5 mx-auto left-[170px] h-[450px] bg-primary bg-opacity-90 shadow-secondary z-0">
                </div>
                <div className="z-10 w-full">
                  <StaticImage className="w-full" src="../images/laptop.png" alt="A dinosaur" />
                </div>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide number-slide2">
            <div className="relative max-w-4xl py-20 mx-auto">
              <div className="flex items-center">
                <div className="z-10 w-full max-w-xs">
                  <h3 className="text-5xl font-medium leading-tight text-gray-900">
                    Landig Page Design
                  </h3>
                  <p className="mt-3 text-lg text-gray-600 uppercase">Website</p>
                  <p className="text-sm text-secondary">Feb 2020</p>
                  <Link to="/" className="inline-block mt-8 text-sm text-tertiary">View Project</Link>
                </div>
                <div className="absolute w-full max-w-md p-5 mx-auto left-[170px] h-[450px] bg-primary bg-opacity-90 shadow-secondary z-0">
                </div>
                <div className="z-10 w-full">
                  <StaticImage className="w-full" src="../images/laptop.png" alt="A dinosaur" />
                </div>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide number-slide3">
            <div className="relative max-w-4xl py-20 mx-auto">
              <div className="flex items-center">
                <div className="z-10 w-full max-w-xs">
                  <h3 className="text-5xl font-medium leading-tight text-gray-900">
                    Landig Page Design
                  </h3>
                  <p className="mt-3 text-lg text-gray-600 uppercase">Website</p>
                  <p className="text-sm text-secondary">Feb 2020</p>
                  <Link to="/" className="inline-block mt-8 text-sm text-tertiary">View Project</Link>
                </div>
                <div className="absolute w-full max-w-md p-5 mx-auto left-[170px] h-[450px] bg-primary bg-opacity-90 shadow-secondary z-0">
                </div>
                <div className="z-10 w-full">
                  <StaticImage className="w-full" src="../images/laptop.png" alt="A dinosaur" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
