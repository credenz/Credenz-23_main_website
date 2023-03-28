import { Canvas } from '@react-three/fiber'
import { Environment, Html, useProgress } from '@react-three/drei'
import React, { Suspense } from 'react'
import Experience from './Experience'
import Temp from './Temp'
import Loader from '../loader/Loader'
import './Home.css'

export default function Home() {
  return (
    <Canvas className='canvas' camera={{fov: 50,}}>
        
        <Suspense fallback={<R3FLoader />}>
          <Experience />
          {/* <Environment files="models/credenz/hdri.hdr" background/> */}
          <Environment files="models/v7/textures/hdri4.hdr" />
          
          {/* <Temp /> */}
        </Suspense>
    </Canvas>
  )
}
function R3FLoader() {
  const { active, progress, errors, item, loaded, total } = useProgress()
  // return <Html center>{progress} % loaded</Html>
  return <Html center><Loader props={progress}/></Html>
}



  
