import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import React from 'react'
import Experience from './Experience'
import Temp from './Temp'
import './Home.css'

export default function Home() {
  return (
    <Canvas className='canvas'>
        <Experience />
        <Environment files="models/credenz/hdri.hdr" background/>
        
        {/* <Temp /> */}
    </Canvas>
  )
}
