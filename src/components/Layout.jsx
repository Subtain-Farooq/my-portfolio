import React from "react"
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
      <div className="w-full">
          <Navbar />
          <main className="px-5 mx-auto max-w-screen-2xl sm:px-8">
            { children }
          </main>
          <Footer />
      </div>
  )
}
