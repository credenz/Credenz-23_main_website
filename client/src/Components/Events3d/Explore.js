import { Canvas } from '@react-three/fiber'
import React from 'react'
import Experience from './Experience'
import './Explore.css'
import {isMobile} from 'react-device-detect';
import Next from './components/next';

export default function Explore() {
    const camPosition = isMobile ? [0,0,65]:[0,0,30];
  return (
    <>
    <Canvas className='canvas' camera={{fov: 30, position:camPosition}}>
      
        <Experience/>
        {/* <Environment files="models/credenz/hdri.hdr" background/> */}
        
        {/* <Temp /> */}
        
    </Canvas>
    {/* <Next /> */}
    </>

  )
}
