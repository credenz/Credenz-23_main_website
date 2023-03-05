import { OrbitControls, Stars, Environment } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { CubeTextureLoader } from 'three'
import React from 'react'
import Logo from './models/Logo'
import Scene from './models/Scene'
import { easing } from "maath"
import { useFrame } from '@react-three/fiber'
import { Logo3 } from './models/Logo_v3'
import LogoV4 from './models/Logo_v4'
import LogoV5 from './models/Logo_v5'

export default function Experience() {

  function Rig() {
    return useFrame((state, delta) => {
      easing.damp3(state.camera.position, [0 + state.mouse.x / 1, 1.5 + state.mouse.y / 1, 11], 0.2, delta)
    })
  }
  return (
    <>
        {/* <OrbitControls /> */}
        {/* <Environment attach="background" files="models/credenz/hdri.hdr" /> */}
        
        <Environment
          background // can be true, false or "only" (which only sets the background) (default: false)
          blur={0} // blur factor between 0 and 1 (default: 0, only works with three 0.146 and up)
          files={['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png']}
          path="/models/cubemap/"
          preset={null}
          scene={undefined} // adds the ability to pass a custom THREE.Scene, can also be a ref
          encoding={undefined} // adds the ability to pass a custom THREE.TextureEncoding (default: THREE.sRGBEncoding for an array of files and THREE.LinearEncoding for a single texture)
        />
        {/* <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade speed={1} color={"orange"}/> */}
        {/* <color attach="background" args={['black']} /> */}
        {/* <directionalLight 
            castShadow 
            shadow-mapSize-height={512}
            shadow-mapSize-width={512} 
            color="white" 
            intensity={.2} 
            position={[1, 1, 1]} 
        /> */}
        {/* <pointLight color="purple" intensity={1} position={[0, 1000, -1000]} /> */}
        <ambientLight intensity={10}/>
        {/* <Scene /> */}
        {/* <Logo /> */}
        {/* <Logo3 /> */}
        {/* <LogoV4 /> */}
        <LogoV5 />
        <Rig />
        {/* <SkyBox /> */}
    </>
  )
}

function SkyBox() {
  const { scene } = useThree();
  const loader = new CubeTextureLoader();
  // The CubeTextureLoader load method takes an array of urls representing all 6 sides of the cube.
  const texture = loader.load([
    "models/cubemap/px.jpg",
    "models/cubemap/nx.jpg",
    "models/cubemap/py.jpg",
    "models/cubemap/ny.jpg",
    "models/cubemap/pz.jpg",
    "models/cubemap/nz.jpg"
  ]);

  // Set the scene background property to the resulting texture.
  scene.background = texture;
  return null;
}
