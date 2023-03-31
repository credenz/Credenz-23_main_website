/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 Coming Soon.glb
*/

import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Soon(props) {
  const { nodes, materials } = useGLTF('/models/comingsoon/soon2.glb')
  const texture = useTexture("/models/comingsoon/soon.png")
  const soonRef = useRef()

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    soonRef.current.rotation.y = Math.cos(a ) * 0.2;
    // navGroup.current.rotation.x = a;
    // navGroup.current.rotation.z = a;
  });
  return (
    // <group {...props} dispose={null} ref={soonRef}>
    //   <mesh geometry={nodes.Text001.geometry} material={nodes.Text001.material} position={[0.05, 0.15, -4.27]} rotation={[Math.PI / 2, 0, 0]} scale={[0.67, 0.56, 0.56]} >
    //   <meshBasicMaterial   color={"white"}/>
    //   </mesh>    
    // </group>
      <group {...props} dispose={null} >
        <group position={[0.05, 0.15, -4.27]} scale={1.8}>
          <mesh geometry={nodes.CS.geometry} material={nodes.CS.material} scale={0.75} ref={soonRef}> 
          <meshBasicMaterial   color={"white"}/>
          </mesh>
        </group>
      </group>
  )
}

useGLTF.preload('/models/comingsoon/soon.glb')