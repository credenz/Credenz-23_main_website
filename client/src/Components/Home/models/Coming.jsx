/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 Coming.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/Coming.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0.05, 0.15, -4.27]} scale={1.8}>
        <mesh geometry={nodes.CS.geometry} material={nodes.CS.material} scale={0.55} />
      </group>
    </group>
  )
}

useGLTF.preload('/Coming.glb')