/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 pubmatic2.glb
*/

import React, { useEffect, useRef, useState } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'

export function Pubmatic2(props) {
  const { nodes, materials } = useGLTF('/models/sponsor/pubmatic2.glb')
  const pubmaticTexture = useTexture('/models/sponsor/pubmatic2.png')

  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])
  
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube.geometry} material={nodes.Cube.material} position={[-3.57, 2.41, 5.54]} scale={hovered
      ? 1.1 : 1}
        onClick={() => window.open("https://pubmatic.com", "_blank")} 
        onPointerOver={() => {setHovered(true)}}
        onPointerOut={() => {setHovered(false)}}
      >
        <meshBasicMaterial map={pubmaticTexture} map-flipY={false} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/models/sponsor/pubmatic2.glb')
