"use client"

// import { Canvas, useFrame} from "react-three-fiber"
import Model from "../jemCanvas/JemCanvas"
import { Suspense, useEffect, useState } from "react"
// import { OrbitControls, Preload, useGLTF } from "@react-three/drei"



export default function HomeHeadSection() {
  // function MyRotatingBox() {
  //   const myMesh = React.useRef();

  //   useFrame(({ clock }) => {
  //     const a = clock.getElapsedTime();
  //     myMesh.current.rotation.x = a;
  //   });
  // }
  return (
    <section className=" relative bg-img-2 w-full h-screen mx-auto" >
      <div className="absolute inset-0 top-[40] max-w-7xl mx-auto flex-row items-start gap-5 ml-9 mr-9 grid grid-cols-[1fr,40%] ">
        <div className=" absolute bg-slate-300 "></div>
        <div className="cursor-auto prevent-select ">
          <p className="mb-3 text-gray-200 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-black first-letter:mr-3 first-letter:float-left">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
          <p className="text-gray-200 ">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</p>
        </div>
        <div className="h-70 cursor-grab active:cursor-grabbing">

          <Model />
        </div>

      </div>

    </section>
  )
}
