import { useGLTF } from '@react-three/drei'
import React from 'react'

export default function Scene() {
    const logo = useGLTF('models/credenz/logo.glb')
    console.log(logo)
  return (
    <>
        <primitive object = {logo.scene} />
    </>
  )
}
