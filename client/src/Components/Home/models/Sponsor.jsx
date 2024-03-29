/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 sponsor.glb
*/

import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'

export default function Sponsor(props) {
  const { nodes, materials } = useGLTF('/models/sponsor/pubmatic.glb')
  const pubmaticTexture = useTexture('/models/sponsor/pubmatic.png')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube.geometry} material={nodes.Cube.material} position={[-3.57, 2.41, 5.54]} >
      <meshBasicMaterial map={pubmaticTexture} map-flipY={false} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/models/sponsor/pubmatic.glb')
