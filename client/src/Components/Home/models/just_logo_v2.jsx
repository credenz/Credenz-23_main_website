/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 newlogo.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function JustLogoV2(props) {
  const { nodes, materials } = useGLTF('/models/justLogo/newlogo.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Base.geometry} material={nodes.Base.material} position={[0.05, 0.15, -4.27]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 1.04]} />
    </group>
  )
}

useGLTF.preload('/models/justLogo/newlogo.glb')
