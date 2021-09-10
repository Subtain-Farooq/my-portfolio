import React from "react";
import { Link } from "gatsby";
//import Fiverr from "./Fiverr";

export default function Footer(){
    return (
        <div className="w-full">
            <div className="px-5 py-24 mx-auto max-w-screen-2xl sm:px-8">
                <div className="flex items-center">
                    <div className="w-1/3">
                        <div className="flex flex-col space-y-8">
                            <p className="text-5xl text-gray-900">
                                Need a project?  
                            </p>
                            <div className="space-y-2">
                                <p className="text-lg text-gray-700">
                                    +92 300 7998 354
                                </p>
                                <p className="text-lg text-gray-700">
                                    subtainfrq@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/3">
                        <div className="flex justify-center w-full h-full">
                            <div className="flex flex-col justify-between space-y-6">
                                <Link to="/" className="text-lg text-gray-700">
                                    Linked In
                                </Link>
                                <Link to="/" className="text-lg text-gray-700">
                                    Fiverr
                                </Link>
                                <Link to="/" className="text-lg text-gray-700">
                                    Discord
                                </Link>
                                <Link to="/" className="text-lg text-gray-700">
                                    GitHub
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* <div className="w-1/3">
                        <div className="flex justify-end w-full">
                            <Fiverr />
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}