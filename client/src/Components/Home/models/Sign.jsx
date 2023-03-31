/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 v8.glb
*/

import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { useNavigate } from "react-router-dom";

export default function Sign(props) {
  const { nodes, materials } = useGLTF("/models/v7/scene.glb");
  const navTexture = useTexture("/models/v7/textures/nav.png");

  const navigate = useNavigate()

  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])
  

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Nav001.geometry}
        material={nodes.Nav001.material}
        position={[-3.57, 2.01, 5.54]}
        rotation={[0, 0.61, 0]}
        scale={0.8}
        onClick={() => navigate("/explore")} 
        onPointerOver={() => {setHovered(true)}}
        onPointerOut={() => {setHovered(false)}}
      >
        <meshBasicMaterial map={navTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.Nav_003.geometry}
        material={nodes.Nav_003.material}
        position={[-3.57, 1.3, 5.54]}
        rotation={[0, 0.61, 0]}
        scale={0.8}
        onClick={() => navigate("/sessions")} 
        onPointerOver={() => {setHovered(true)}}
        onPointerOut={() => {setHovered(false)}}
      >
        <meshBasicMaterial map={navTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.Nav_004.geometry}
        material={nodes.Nav_004.material}
        position={[-3.57, 0.98, 5.54]}
        rotation={[0, 0.61, -3.08]}
        scale={0.8}
        onClick={() => navigate("/contact")} 
        onPointerOver={() => {setHovered(true)}}
        onPointerOut={() => {setHovered(false)}}
      >
        <meshBasicMaterial map={navTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.Nav_002.geometry}
        material={nodes.Nav_002.material}
        position={[-3.57, 1.69, 5.54]}
        rotation={[0, 0.61, 0]}
        scale={0.8}
        onClick={() => navigate("/events")} 
        onPointerOver={() => {setHovered(true)}}
        onPointerOut={() => {setHovered(false)}}
      >
        <meshBasicMaterial map={navTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.Nav_005.geometry}
        material={nodes.Nav_005.material}
        position={[-3.57, 0.6, 5.54]}
        rotation={[0, 0.61, -0.04]}
        scale={0.8}
        onClick={() => navigate("/about")} 
        onPointerOver={() => {setHovered(true)}}
        onPointerOut={() => {setHovered(false)}}
      >
        <meshBasicMaterial map={navTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.NavStand.geometry}
        material={nodes.NavStand.material}
        position={[-3.52, 2.4, 5.56]}
        rotation={[0, 0.61, 0]}
        scale={0.8}
      >
        <meshBasicMaterial map={navTexture} map-flipY={false} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/v7/scene.glb");