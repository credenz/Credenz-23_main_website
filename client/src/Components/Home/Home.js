import { Canvas } from '@react-three/fiber'
import { Environment, Html, useProgress } from '@react-three/drei'
import React, { Suspense, useEffect, useState } from 'react'
import Experience from './Experience'
import Temp from './Temp'
import Loader from '../loader/Loader'
import './Home.css'
import './toggle.css'
import R3FLoader from './R3FLoader'

export default function Home() {
  const [explore3D, setExplore3D] = useState(false)
  const [isMouseDown, setIsMouseDown] = useState(false)
  const [showCheck, setShowCheck] = useState(false)

  const { loaded } = useProgress()

  useEffect(() => {
    // console.log(loaded, "loaded")
    if (loaded >= 47) { // 45 as console log shows 46
      // console.log('loaded')
      setShowCheck(true)
    }
  }, [loaded])
  // useEffect(() => {}, [explore3D])
  return (
    <>
    {showCheck && 
    // <input className='toggle' type="checkbox" id="switch" checked={explore3D} onChange={(event) => {
    //   setExplore3D(event.target.checked)
    //   console.log(explore3D)
      
    // }}/>
      <div className='toggle-div'>
  <label class="label">
  <div class="toggle">
    <input class="toggle-state" type="checkbox" name="check" value="check" checked={explore3D} onChange={(event) => {
       setExplore3D(event.target.checked)
    //  console.log(explore3D)
      
     }}/>
    <div class="indicator"></div>
  </div>
  <div class="label-text">Explore 3D</div>
</label>
</div>

    
    }
    {/* <label for="switch">Toggle</label> */}
    <Canvas className='canvas' camera={{fov: 50,}} >
    {/* onMouseDown={() => setIsMouseDown(true)} onMouseUp={() => setIsMouseDown(false)} */}
        
        <Suspense fallback={<R3FLoader />}>
          <Experience explore3D={explore3D} isMouseDown={isMouseDown}/>
          {/* <Environment files="models/credenz/hdri.hdr" background/> */}
          <Environment files="models/v7/textures/hdri4.hdr" />
          
          {/* <Temp /> */}
        </Suspense>
    </Canvas>

    

    </>
  )
}
// function R3FLoader() {
//   const { active, progress, errors, item, loaded, total } = useProgress()
//   // return <Html center>{progress} % loaded</Html>
//   return <Html center><Loader props={progress}/></Html>
// }



  
