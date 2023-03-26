import { OrbitControls, Stars, Environment, Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { CubeTextureLoader } from "three";
import React from "react";
import Model1 from "./models/v1";
import { easing } from "maath";
import Model2 from "./models/v2";
import { MobileView, BrowserView, isMobile } from "react-device-detect";
import next from "./components/next";

export default function Experience() {
  function Rig() {
    return useFrame((state, delta) => {
      easing.damp3(
        state.camera.position,
        [0 + state.mouse.x / 1, 1.5 + state.mouse.y / 1, 30],
        0.2,
        delta
      );
      easing.damp3(
        state.camera.rotation,
        [
          0,
          (-Math.PI / 180) * 0 + ((2 * Math.PI) / 180) * 4 * state.mouse.x,
          0,
        ],
        0.2,
        delta
      );
      console.log(state.mouse.x);
    });
  }

  return (
    <>
      <OrbitControls
        minAzimuthAngle={(-Math.PI / 180) * 20}
        maxAzimuthAngle={(Math.PI / 180) * 20}
        minPolarAngle={(Math.PI / 180) * 60}
        maxPolarAngle={(Math.PI / 180) * 120}
        // enableZoom={isMobile ? false : true}
        enableZoom={false}
        enableDamping
        enablePan={false}
        makeDefault
        // maxDistance={85}
        // minDistance={30}
      />
      {/* <Rig /> */}
      <ambientLight />
      <Model2 />
    </>
  );
}
