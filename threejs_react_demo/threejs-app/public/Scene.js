/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Loïc Norgeot (https://sketchfab.com/norgeotloic)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/of-planes-and-satellites-db8f1c8cba3b464993e216acbf4a69b9
title: Of Planes and Satellites
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group scale={0.04}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <lineSegments geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} />
            <lineSegments geometry={nodes.mesh_1.geometry} material={nodes.mesh_1.material} />
            <lineSegments geometry={nodes.mesh_2.geometry} material={nodes.mesh_2.material} />
            <lineSegments geometry={nodes.mesh_3.geometry} material={nodes.mesh_3.material} />
            <lineSegments geometry={nodes.mesh_4.geometry} material={nodes.mesh_4.material} />
            <lineSegments geometry={nodes.mesh_5.geometry} material={nodes.mesh_5.material} />
            <mesh geometry={nodes.mesh_6.geometry} material={materials.earth} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
