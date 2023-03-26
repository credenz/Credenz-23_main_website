import { Canvas } from '@react-three/fiber'
import React from 'react'
import Experience from './Experience'
import './Explore.css'

export default function Explore() {
    
  return (
    <Canvas className='canvas' camera={{fov: 30, position:[0,0,30]}}>
        <Experience/>
        {/* <Environment files="models/credenz/hdri.hdr" background/> */}
        
        {/* <Temp /> */}
    </Canvas>
  )
}
