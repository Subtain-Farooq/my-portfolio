import React from "react"
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";

export default function Work() {
  //const data = useStaticQuery(query)
  //const {allStrapiProject:{nodes:projects},} = data
  //console.log(projects)
  return (
    <Layout>
      <div className="w-full my-20 space-y-20">
        <div className="flex items-center justify-between">
          <h2 className="text-6xl font-bold text-secondary">
            Selected Work
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-x-12 gap-y-16">
          <div className="flex flex-col">
            <div className="w-full h-[550px] object-top">
              <StaticImage

                placeholder="blurred"
                loading="lazy"
                src="../images/p1.png"
                imgClassName=" object-top" className="w-full h-full" alt="A dinosaur" />
            </div>
            <div className="py-7">
              <h2 className="text-3xl font-semibold text-gray-700">Book Publishing Portal</h2>
              <p className="my-3 text-base text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vulputate pellentesque orci et rutrum.</p>
              <a href="/" className="inline-block mt-4 text-tertiary">View Project</a>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="w-full h-[550px] object-top">
              <StaticImage

                placeholder="blurred"
                loading="lazy"
                src="../images/p2.png"
                imgClassName=" object-top" className="w-full h-full" alt="A dinosaur" />
            </div>
            <div className="py-7">
              <h2 className="text-3xl font-semibold text-gray-700">Book Publishing Portal</h2>
              <p className="my-3 text-base text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vulputate pellentesque orci et rutrum.</p>
              <a href="/" className="inline-block mt-4 text-tertiary">View Project</a>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="w-full h-[550px] object-top">
              <StaticImage

                placeholder="blurred"
                loading="lazy"
                src="../images/p3.png"
                imgClassName="object-top" className="w-full h-full" alt="A dinosaur" />
            </div>
            <div className="py-7">
              <h2 className="text-3xl font-semibold text-gray-700">Book Publishing Portal</h2>
              <p className="my-3 text-base text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vulputate pellentesque orci et rutrum.</p>
              <a href="/" className="inline-block mt-4 text-tertiary">View Project</a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
