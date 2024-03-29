/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 new_logo.glb
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Logo(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/credenz/new_logo.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature_Astronaut" position={[3.6, -2.67, 1.45]} rotation={[0, -0.51, 0]} scale={0.69}>
          <group name="root" position={[0, 0, -0.08]} rotation={[Math.PI / 2, 0, 0]}>
            <group name="hüfte" position={[0, 0.08, -1.3]} rotation={[-Math.PI / 2, 0, 0]}>
              <group name="brust" position={[0, 0.32, 0]}>
                <group name="kopf" position={[0, 0.63, 0]}>
                  <group name="kopf_end" position={[0, 1.3, 0]} />
                </group>
                <group name="schulterL" position={[0.79, 0.3, -0.08]} rotation={[-1.47, -0.02, -1.55]}>
                  <group name="unterarmL" position={[0, 0.28, 0]} rotation={[0.05, -0.12, -0.24]}>
                    <group name="handflächeL" position={[0, 0.36, 0]} rotation={[-0.08, 0, 0.04]}>
                      <group name="fingerL" position={[0, 0.36, 0]} rotation={[-Math.PI / 2, 1.51, Math.PI / 2]}>
                        <group name="fingerL_end" position={[0, 0.25, 0]} />
                      </group>
                      <group name="daumenL" position={[0, 0.36, 0]} rotation={[1.18, -0.86, -2.34]}>
                        <group name="daumenSpitzeL" position={[0, 0.26, 0]} rotation={[1.39, -0.93, -2.61]}>
                          <group name="daumenSpitzeL_end" position={[0, 0.22, 0]} />
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
                <group name="schulterR" position={[-0.79, 0.3, -0.08]} rotation={[-1.48, 0.02, 1.55]}>
                  <group name="unterarmR" position={[0, 0.25, 0]} rotation={[0.05, 0.1, 0.23]}>
                    <group name="handflächeR" position={[0, 0.38, 0]} rotation={[-0.07, 0, -0.03]}>
                      <group name="fingerR" position={[0, 0.36, 0]} rotation={[-Math.PI / 2, -1.51, -Math.PI / 2]}>
                        <group name="fingerR_end" position={[0, 0.25, 0]} />
                      </group>
                      <group name="daumenR" position={[0, 0.36, 0]} rotation={[1.06, 0.94, 2.46]}>
                        <group name="daumenSpitzeR" position={[0, 0.26, 0]} rotation={[1.31, 0.91, 2.67]}>
                          <group name="daumenSpitzeR_end" position={[0, 0.22, 0]} />
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
              </group>
              <group name="oberschenkelL" position={[0.31, -0.11, -0.06]} rotation={[3.03, 0, 0]}>
                <group name="unterschenkelL" position={[0, 0.35, 0]} rotation={[0.25, 0, 0]}>
                  <group name="fussL" position={[0, 0.74, 0]} rotation={[1.43, 0, -Math.PI]}>
                    <group name="fussL_end" position={[0, 0.49, 0]} />
                  </group>
                </group>
              </group>
              <group name="oberschenkelR" position={[-0.31, -0.11, -0.06]} rotation={[3.03, 0, 0]}>
                <group name="unterschenkelR" position={[0, 0.35, 0]} rotation={[0.25, 0, 0]}>
                  <group name="fussR" position={[0, 0.74, 0]} rotation={[1.43, 0, Math.PI]}>
                    <group name="fussR_end" position={[0, 0.49, 0]} />
                  </group>
                </group>
              </group>
            </group>
            <group name="targetarmL" position={[0.99, 0, -1.37]} rotation={[-Math.PI / 2, 1.45, -Math.PI]}>
              <group name="targetarmL_end" position={[0, 0.49, 0]} />
            </group>
            <group name="pivotferseL" position={[0.31, -0.2, -0.09]}>
              <group name="targetbeinL" position={[0, 0.99, -0.75]} rotation={[Math.PI, 0, Math.PI]}>
                <group name="targetbeinL_end" position={[0, 0.73, 0]} />
              </group>
              <group name="ikfussL" position={[0, 0.15, -0.02]} rotation={[Math.PI, 0, Math.PI]}>
                <group name="ikfussL_end" position={[0, 0.55, 0]} />
              </group>
            </group>
            <group name="pivotzehL" position={[0.31, 0.45, -0.11]} rotation={[Math.PI / 2, 0, Math.PI]}>
              <group name="pivotzehL_end" position={[0, 0.29, 0]} />
            </group>
            <group name="ikkopf" position={[0, 0.08, -2.24]} rotation={[-Math.PI / 2, 0, 0]}>
              <group name="ikkopf_end" position={[0, 1.52, 0]} />
            </group>
            <group name="targetarmR" position={[-0.99, 0, -1.37]} rotation={[-1.57, -1.45, -Math.PI]}>
              <group name="targetarmR_end" position={[0, 0.49, 0]} />
            </group>
            <group name="pivotferseR" position={[-0.31, -0.2, -0.09]}>
              <group name="targetbeinR" position={[0, 0.99, -0.75]} rotation={[Math.PI, 0, -Math.PI]}>
                <group name="targetbeinR_end" position={[0, 0.73, 0]} />
              </group>
              <group name="ikfussR" position={[0, 0.15, -0.02]} rotation={[Math.PI, 0, -Math.PI]}>
                <group name="ikfussR_end" position={[0, 0.55, 0]} />
              </group>
            </group>
            <group name="pivotzehR" position={[-0.31, 0.45, -0.11]} rotation={[Math.PI / 2, 0, Math.PI]}>
              <group name="pivotzehR_end" position={[0, 0.29, 0]} />
            </group>
            <group name="targethandL" position={[1.77, 0.06, -1.79]} rotation={[-1.77, -0.4, -Math.PI]}>
              <group name="targethandL_end" position={[0, 0.45, 0]} />
            </group>
            <group name="targethandR" position={[-1.77, 0.06, -1.79]} rotation={[-1.77, 0.4, -Math.PI]}>
              <group name="targethandR_end" position={[0, 0.45, 0]} />
            </group>
          </group>
          <group name="Astronaut" position={[0, 0, -0.08]} rotation={[1.1, -0.09, -1.72]} scale={[-0.26, -0.32, -0.26]}>
            <mesh name="Cylinder001" geometry={nodes.Cylinder001.geometry} material={materials.visier} />
            <mesh name="Cylinder001_1" geometry={nodes.Cylinder001_1.geometry} material={materials.Astronaut} />
          </group>
        </group>
        <group name="Terrain" position={[0.9, -2.77, -11.42]} scale={41.47}>
          <mesh name="Plane001" geometry={nodes.Plane001.geometry} material={materials.terrain} />
          <mesh name="Plane001_1" geometry={nodes.Plane001_1.geometry} material={materials.Master} />
        </group>
        <group name="Logo" position={[-0.58, 1.91, -13.78]} rotation={[Math.PI / 2, 0, 0]} scale={50.45}>
          <mesh name="Curve001" geometry={nodes.Curve001.geometry} material={materials.terrain} />
          <mesh name="Curve001_1" geometry={nodes.Curve001_1.geometry} material={materials.Master} />
        </group>
        <group name="Rock" position={[13.41, -3.86, -11.31]} rotation={[Math.PI / 2, 0, 3.11]} scale={2}>
          <mesh name="Cube002_Cube003" geometry={nodes.Cube002_Cube003.geometry} material={materials.terrain} />
          <mesh name="Cube002_Cube003_1" geometry={nodes.Cube002_Cube003_1.geometry} material={materials.Master} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/credenz/new_logo.glb')
