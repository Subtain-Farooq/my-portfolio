import React from "react"
import Layout from "../components/Layout";
import LinkedIn from "../images/linkedin.inline.svg";
import GitHub from "../images/github.inline.svg";
import Skype from "../images/skype.inline.svg";
import Discord from "../images/discord.inline.svg";
import Fiverr from "../images/fiverr.inline.svg";

export default function Contact() {
  //const data = useStaticQuery(query)
  //const {allStrapiProject:{nodes:projects},} = data
  //console.log(projects)
  return (
    <Layout>
      <div className="w-full my-20 space-y-20">
        <div className="flex items-center">
          <h2 className="text-6xl font-bold text-secondary">
            Get in Touch
          </h2>
        </div>
        <div className="flex justify-between w-full">
            <div className="w-2/5">
                <div className="">
                    <div className="">
                        <p className="mb-2 text-xl font-bold text-gray-700">Reach me at</p>
                        <a href="mailto:subtainfrq@gmail.com" className="text-4xl font-semibold text-primary">subtainfrq@gmail.com</a>
                        <div className="flex mt-1.5">
                            <p className="mr-2 font-semibold text-gray-800">What's App</p>
                            <a href="https://api.whatsapp.com/send?phone=+923007998354" className="text-xl font-semibold opacity-80 text-primary">+92 300 7998 354</a>
                        </div>
                        <p className="max-w-lg mt-5 text-base text-gray-600">
                        Nice to meet you! If you want to keep in touch, send me a message using my email or phone details above, or use this form right here! Let's talk about design projects
                        </p>
                        <div className="flex mt-8 space-x-6">
                        <a href="" className="fill-current text-[#1dbf73] w-9 h-9"><Fiverr/></a>
                            <a href="" className="w-12 h-12 text-gray-800 fill-current"><Discord/></a>
                            <a href="" className="text-gray-500 fill-current w-11 h-11"><LinkedIn/></a>
                            <a href="" className="w-12 h-12 text-gray-800 fill-current"><GitHub/></a>
                            <a href="" className="w-10 h-10 text-gray-500 fill-current"><Skype/></a>    
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-3/5">
                <div className="p-5">
                    <form className="space-y-5">
                        <input name="name" type="text" className="w-full px-5 py-3 text-lg font-semibold text-gray-500 placeholder-gray-700 bg-gray-200 focus:outline-none" placeholder="Full Name" />
                        <input name="email" type="email" className="w-full px-5 py-3 text-lg font-semibold text-gray-500 placeholder-gray-700 bg-gray-200 focus:outline-none" placeholder="Your Email" />
                        <textarea name="message" placeholder="Message" className="w-full h-56 px-5 py-3 text-lg font-semibold text-gray-500 placeholder-gray-700 bg-gray-200 focus:outline-none"></textarea>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </Layout>
  )
}
