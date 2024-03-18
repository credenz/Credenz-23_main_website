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
import JustLogo from './models/just_logo'
import JustLogoV2 from './models/just_logo_v2'
import { JustLogoV3 } from './models/just_logo_v3'
import Sponsor from './models/Sponsor'
import { Pubmatic2 } from './models/Pubmatic2'
import { V1 } from './models/credenz24/V1'

export default function Experience({explore3D, isMouseDown}) {
  const [isSnapped, setSnpped] = useState(false)
  const [rigDampSpeed, setRigSpeed] = useState(1.5)
  const initialCameraPosition = {x: 0, y: 1.5, z: 11}
  const [cameraPosition, setCameraPosition] = useState(initialCameraPosition)

  function Rig() {
    return useFrame((state, delta) => {
      state.camera.lookAt(0, 0, 0)
      easing.damp3(state.camera.position, [cameraPosition.x + state.mouse.x / 1, cameraPosition.y + state.mouse.y / 1, cameraPosition.z], rigDampSpeed, delta)
    })
  }

  setTimeout(() => {
    setRigSpeed(0.5)
  },4000)

  useEffect(() => {
    // console.log(explore3D)
    if(explore3D){
      
    }
  }, [explore3D])




  function MobileController(){

    useFrame((state, delta) => {
      // console.log(state.camera.position)
      // if(!isMouseDown){
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
  function PCOrbitController(){
    let stopDamp = false;
    setTimeout(() => {
      stopDamp = true;
    }, 3000)
    useFrame((state, delta) => {
      // console.log(state.camera.position)
      // if(!isSnapped){
        !stopDamp && easing.damp3(state.camera.position, [15,12,13], 2, delta)

        // {x: 15.464951184826836, y: 12.210116761292216, z: 13.56001786712231, __damp: {…}}
      //   setSnpped(true)
      // }
    })

    
  
    return <OrbitControls 
    // minAzimuthAngle={(-Math.PI / 180) * 180}
    // maxAzimuthAngle={(Math.PI / 180) * 180}
    minPolarAngle={(Math.PI / 180) * 30}
    maxPolarAngle={(Math.PI / 180) * 80}
    // // enableZoom={isMobile ? false : true}
    // enableZoom={false}
    enableDamping
    maxDistance={30}
    minDistance={13}
    // enablePan={false}
    // makeDefault
    />
  }
    const ptLight = useRef()
    const [isPhone, setIsPhone] = useState(isMobile)

    useEffect(() => {
      setIsPhone(isMobile)
    }, [])

    function CamControlDispatcher(){
      if (explore3D){
        // console.log("pcorbitcontroller")
        return <PCOrbitController />
      }
      if(isPhone){
        // console.log("mobile controller")
        return <MobileController />

      }else{
        // console.log("rig")
        return <Rig />
      }
    }
  return (
    <>
        
        {/* <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade speed={1} color={"orange"}/> */}
        <color attach="background" args={['black']} />
        
        <ambientLight intensity={0.5}/>
        {/* <LogoV7 /> */}
        <V1 />
        {/* <Sign /> */}

        {/* {isPhone ? <MobileController /> : <Rig />} */}
        {/* {console.log(isPhone)} */}
        {/* <OrbitControls /> */}
        <CamControlDispatcher />
        {/* {explore3D ? <Html center><h1  >Explore 3D</h1></Html> : null} */}
        

        {/* <Soon/> */}
        {/* <Sponsor /> */}
        {/* <Pubmatic2 /> */}
        {/* <JustLogo /> */}
        {/* <JustLogoV2 /> */}
        {/* <JustLogoV3 /> */}


        
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

