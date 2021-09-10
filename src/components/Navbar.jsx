import React from "react";
import { Link } from "gatsby";
import Logo from "../images/logo.inline.svg";

export default function Navbar() {
  return (
      <div className="w-full">
          <div className="px-5 mx-auto max-w-screen-2xl sm:px-8">
                <nav className="flex items-center justify-between py-4">
                    <Link to="/" className="w-28">
                        <Logo/>
                    </Link>
                    <div className="flex flex-col space-y-0.5 text-lg font-semibold tracking-wide text-primary">
                        <Link to="/" activeClassName="text-tertiary">Home</Link>
                        <Link to="/work"   activeClassName="text-tertiary">Work</Link>
                        <Link to="/contact" activeClassName="text-tertiary">Hire Me</Link>
                    </div>
                </nav>
          </div>
      </div>
  )
}
