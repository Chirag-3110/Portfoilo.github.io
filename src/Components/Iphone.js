/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: SDC PERFORMANCE™️ (https://sketchfab.com/3Duae)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/free-iphone-13-pro-2021-a35156d91cf44e70a2fdfeade54ae0b2
title: (FREE) iPhone 13 Pro 2021
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/iphone.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI /2, 0, -90]} scale={0.60}>
        <group rotation={[Math.PI /2, 0, 0]}>
          <group position={[-0.1, 2.50, -0.26]} scale={0.08}>
            <mesh geometry={nodes.Object_4.geometry} material={materials['Material.001']} />
            <mesh geometry={nodes.Object_5.geometry} material={materials.Black} />
            <mesh geometry={nodes.Object_6.geometry} material={materials.Back} />
            <mesh geometry={nodes.Object_7.geometry} material={materials.GOLD} />
            <mesh geometry={nodes.Object_8.geometry} material={materials.BARRES} />
            <mesh geometry={nodes.Object_9.geometry} material={materials.Labber} />
            <mesh geometry={nodes.Object_10.geometry} material={materials.GLASS} />
            <mesh geometry={nodes.Object_11.geometry} material={materials.Lenscover} />
            <mesh geometry={nodes.Object_12.geometry} material={materials.material} />
            <mesh geometry={nodes.Object_13.geometry} material={materials.Display} />
            <mesh geometry={nodes.Object_14.geometry} material={materials['Lens.2']} />
            <mesh geometry={nodes.Object_15.geometry} material={materials.material_11} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/iphone.gltf')
