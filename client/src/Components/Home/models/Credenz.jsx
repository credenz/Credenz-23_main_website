/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 credenz.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/credenz.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Text001.geometry} material={nodes.Text001.material} position={[0.05, 0.15, -0.44]} rotation={[Math.PI / 2, 0, 0]} scale={0.72} />
    </group>
  )
}

useGLTF.preload('/credenz.glb')
