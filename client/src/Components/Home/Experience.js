import { OrbitControls, Stars, Environment, useHelper, GizmoHelper, Html } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { CubeTextureLoader } from 'three'
import React, { useEffect, useRef, useState } from 'react'
import Logo from './models/Logo'
import Scene from './models/Scene'
import { easing } from "maath"
import { useFrame } from '@react-three/fiber'
import { Logo3 } from './models/Logo_v3'
import LogoV4 from './models/Logo_v4'
import LogoV5 from './models/Logo_v5'
import SignBoard from './models/SignBoard'
import LogoV6 from './models/Logo_v6'
import { LogoV7 } from './models/Logo_v7'
import {isMobile} from 'react-device-detect';
import Sign from './models/Sign'
import Soon from './models/Soon'

export default function Experience() {
  const [isSnapped, setSnpped] = useState(false)
  const [rigDampSpeed, setRigSpeed] = useState(1.5)

  function Rig() {
    return useFrame((state, delta) => {
      easing.damp3(state.camera.position, [0 + state.mouse.x / 1, 1.5 + state.mouse.y / 1, 11], rigDampSpeed, delta)
    })
  }

  setTimeout(() => {
    setRigSpeed(0.5)
  },4000)

  function MobileController(){

    useFrame((state, delta) => {
      // console.log(state.camera.position)
      // if(!isSnapped){
        easing.damp3(state.camera.position, [-3,4,21], 2, delta)
      //   setSnpped(true)
      // }
    })

    
  
    return <OrbitControls 
    minAzimuthAngle={(-Math.PI / 180) * 15}
    maxAzimuthAngle={(Math.PI / 180) * 15}
    minPolarAngle={(Math.PI / 180) * 60}
    maxPolarAngle={(Math.PI / 180) * 80}
    // enableZoom={isMobile ? false : true}
    enableZoom={false}
    enableDamping
    enablePan={false}
    makeDefault
    />
  }
    const ptLight = useRef()
    const [isPhone, setIsPhone] = useState(isMobile)

    useEffect(() => {
      setIsPhone(isMobile)
    }, [])

  return (
    <>
        
        <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade speed={1} color={"orange"}/>
        <color attach="background" args={['black']} />
        
        <ambientLight intensity={100}/>
        <LogoV7 />
        <Sign />

        {isPhone ? <MobileController /> : <Rig />}
        {/* {console.log(isPhone)} */}
        {/* <OrbitControls /> */}

        

        <Soon />


        
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

