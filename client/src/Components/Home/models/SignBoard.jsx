/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 .\\SignBoard.glb
*/

import React, { useEffect, useRef, useState } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import { useNavigate } from "react-router-dom";

export default function SignBoard(props) {
  const { nodes, materials } = useGLTF('models/nav/SignBoard.glb')
  const texture = useTexture('models/nav/signboard.png')

  const navigate = useNavigate()

  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])

  return (
    <group {...props} dispose={null}>
      <mesh 
        geometry={nodes.Cube.geometry} 
        material={materials['SignBoard Display']} 
        position={[-2.65, 0.75, 6.39]} 
        
      >
        <meshBasicMaterial map={texture} map-flipY={false}/>
      </mesh>
      <mesh 
        geometry={nodes.Cube004.geometry} 
        material={materials['SignBoard Display']} 
        position={[-2.39, 1.49, 6.59]}
        onClick={() => navigate("/events")} 
        onPointerOver={() => {setHovered(true)}}
        onPointerOut={() => {setHovered(false)}}
      >
        <meshBasicMaterial map={texture} map-flipY={false}/>
      </mesh>
      <mesh 
        geometry={nodes.Cube007.geometry} 
        material={materials['SignBoard Display']} 
        position={[-2.39, 1.09, 6.59]} 
        onClick={() => navigate("/about")} 
        onPointerOver={() => {setHovered(true)}}
        onPointerOut={() => {setHovered(false)}}
      >
        <meshBasicMaterial map={texture} map-flipY={false}/>
      </mesh>
      <mesh 
        geometry={nodes.Cube008.geometry} 
        material={materials['SignBoard Display']} 
        position={[-2.39, 0.74, 6.59]} 
        onClick={() => navigate("/contact")} 
        onPointerOver={() => {setHovered(true)}}
        onPointerOut={() => {setHovered(false)}}
      >
        <meshBasicMaterial map={texture} map-flipY={false}/>
      </mesh>
      <mesh 
        geometry={nodes.Cube009.geometry} 
        material={materials['SignBoard Display']} 
        position={[-2.39, 0.34, 6.59]} 
        onClick={() => navigate("/registration")} 
        onPointerOver={() => {setHovered(true)}}
        onPointerOut={() => {setHovered(false)}}
      >
        <meshBasicMaterial map={texture} map-flipY={false}/>
      </mesh>
    </group>
  )
}

useGLTF.preload('models/nav/SignBoard.glb')
