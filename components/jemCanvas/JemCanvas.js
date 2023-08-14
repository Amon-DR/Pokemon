import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { Canvas, useFrame } from "react-three-fiber"
import { OrbitControls, Preload } from "@react-three/drei"
import { Suspense, useEffect, useState } from "react"



export default function Model() {

    return (
        <Canvas
            // frameloop="demand"
            shadows
            camera={{ position: [20, 3, 5], fov: 50 }}
            gl={{ preserveDrawingBuffer: true }}

        >
            <ambientLight intensity={0.5} />
            <directionalLight position={[-50, 12, 25]} intensity={4} color={"rgb(180,90,20)"} />


            <directionalLight position={[-10, -100, 200]} intensity={1} color={"rgb(200,100,255)"}
            />


            <Suspense>
                <OrbitControls

                    enableDamping={true}
                    autoRotateSpeed={5}
                    enableZoom={false}
                    autoRotate={true}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2} />
                <Models />
            </Suspense>
            <Preload all />
        </Canvas>
    )
}


function Models(props) {
    const { nodes, materials } = useGLTF("/canvas/Barytes.glb");
    const myMesh = useRef();
    useFrame(({ clock}) => {
        myMesh.current.position.y = Math.sin(clock.getElapsedTime())
      })
    //   useFrame(({ clock }) => {
    //      myMesh.current.rotation.y = Math.sin(clock.getElapsedTime());
    //     ;
    //   });
    return (
        <group {...props} dispose={null}>

            <mesh 
            ref={myMesh}
                castShadow
                receiveShadow
                geometry={nodes.Barytes1.geometry}
                material={nodes.Barytes1.material}
                scale={0.4}
            />
            <hemisphereLight color={"white"} intensity={1} />
            <pointLight intensity={30} position={[0, 0, 0]} />

        </group>
    );
}


useGLTF.preload("/Barytes.glb");
