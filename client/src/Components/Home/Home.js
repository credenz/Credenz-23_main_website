import { Canvas } from '@react-three/fiber'
import { Environment, Html, useProgress } from '@react-three/drei'
import React, { Suspense, useState } from 'react'
import Experience from './Experience'
import Temp from './Temp'
import Loader from '../loader/Loader'
import './Home.css'
import './toggle.css'

export default function Home() {
  const [explore3D, setExplore3D] = useState(false)
  return (
    <>
    <Canvas className='canvas' camera={{fov: 50,}}>
        
        <Suspense fallback={<R3FLoader />}>
          <Experience />
          {/* <Environment files="models/credenz/hdri.hdr" background/> */}
          <Environment files="models/v7/textures/hdri4.hdr" />
          
          {/* <Temp /> */}
        </Suspense>
    </Canvas>

    {/* <input type="checkbox" id="switch" onChange={(event) => {
      setExplore3D(event.target.checked)
      console.log(explore3D)
      
    }}/><label for="switch">Toggle</label> */}

    </>
  )
}
function R3FLoader() {
  const { active, progress, errors, item, loaded, total } = useProgress()
  // return <Html center>{progress} % loaded</Html>
  return <Html ><Loader props={progress}/></Html>
}



  
