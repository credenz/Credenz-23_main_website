import { Environment } from '@react-three/drei'
import React from 'react'

export default function Temp() {
  return (
    <>
        {/* <Environment files="models/credenz/golf.hdr" background/> */}
        <Environment preset='forest' background/>
    </>
  )
}
