import React, { useEffect, Suspense, useRef } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useGLTF, PerspectiveCamera } from '@react-three/drei'
import './App.css';

const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(
     () => {
        const controls = new OrbitControls(camera, gl.domElement);
        controls.enableZoom = false;
        return () => {
          controls.dispose();
        };
     },
     [camera, gl]
  );
  return null;
};
//https://github.com/pmndrs/gltfjsx
function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <group rotation={[Math.PI / 2, 0, 0]}>
              <mesh geometry={nodes.mesh_0.geometry} material={materials.Eyes} />
              <mesh geometry={nodes.mesh_1.geometry} material={materials.Face} />
              <mesh geometry={nodes.mesh_2.geometry} material={materials.Face02} />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')






function Box() {
  return(
    <mesh>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="green" />
    </mesh>
  )
}


export default function App() {

  return (
  <Canvas>
  <ambientLight intensity={0.8} />
  <CameraController/>
  <Suspense fallback={null}>
        <Model />
      </Suspense>
  </Canvas>
  );
}


