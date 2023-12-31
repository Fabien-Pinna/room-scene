/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 public/model/room.gltf -o src/components/Room.jsx -k 
*/

import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'

import * as THREE from 'three'

export function Room(props) {
  const { nodes, materials } = useGLTF('./model/room.gltf')
  const texture = useTexture('./model/baked.jpg')
  texture.flipY = false
  texture.colorSpace = THREE.SRGBColorSpace

  const textureMaterial = new THREE.MeshBasicMaterial({ map: texture })

  return (
    <group {...props} dispose={null}>
      <mesh name="Plane" geometry={nodes.Plane.geometry} material={textureMaterial} />
      <mesh name="floor" geometry={nodes.floor.geometry} material={textureMaterial} />
      <mesh name="desk" geometry={nodes.desk.geometry} material={textureMaterial} />
      <mesh name="officeChair" geometry={nodes.officeChair.geometry} material={textureMaterial} />
      <mesh name="computer" geometry={nodes.computer.geometry} material={textureMaterial} />
      <mesh name="lamp" geometry={nodes.lamp.geometry} material={textureMaterial} />
      <mesh name="accoustic-guitar" geometry={nodes['accoustic-guitar'].geometry} material={textureMaterial} />
      <mesh name="plant2" geometry={nodes.plant2.geometry} material={textureMaterial} />
      <mesh name="robot-henk" geometry={nodes['robot-henk'].geometry} material={textureMaterial} />
      <mesh name="robot-toy" geometry={nodes['robot-toy'].geometry} material={textureMaterial} />
      <mesh name="shelf" geometry={nodes.shelf.geometry} material={textureMaterial} />
      <mesh name="alien" geometry={nodes.alien.geometry} material={textureMaterial} />
      <mesh name="plant1" geometry={nodes.plant1.geometry} material={textureMaterial} />
      <mesh name="mic" geometry={nodes.mic.geometry} material={textureMaterial} />
      <mesh name="keyboard" geometry={nodes.keyboard.geometry} material={textureMaterial} />
      <mesh name="rug" geometry={nodes.rug.geometry} material={textureMaterial} />
      <mesh name="mouse1" geometry={nodes.mouse1.geometry} material={textureMaterial} />
      <mesh name="monitor1" geometry={nodes.monitor1.geometry} material={textureMaterial} />
      <mesh name="monitor2" geometry={nodes.monitor2.geometry} material={textureMaterial} />
      <mesh name="computer-keyboard" geometry={nodes['computer-keyboard'].geometry} material={textureMaterial} />
      <mesh name="electricGuitar" geometry={nodes.electricGuitar.geometry} material={textureMaterial} />
    </group>
  )
}

useGLTF.preload('./model/room.gltf')
