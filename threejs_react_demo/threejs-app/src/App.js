import React, { useEffect, Suspense, useRef } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

import './App.css';

const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(
     () => {
        const controls = new OrbitControls(camera, gl.domElement);
        controls.touches.ONE = THREE.TOUCH.PAN;
        controls.touches.TWO = THREE.TOUCH.DOLLY_ROTATE;
        controls.enableZoom = false;
        return () => {
          controls.dispose();
        };
     },
     [camera, gl]
  );
  return null;
};
//https://github.com/pmndrs/gltfjsx  3D file moet in public folder zitten, commando runnen in public folder
// function Model({ ...props }) {
//   const group = useRef()
//   const { nodes, materials } = useGLTF('/scene.gltf')
//   useFrame(() => (group.current.rotation.y += 0.01));
//   return (
//     <group ref={group} {...props} dispose={null}>
//       <group rotation={[-Math.PI / 2, 0, 0]}>
//         <group rotation={[Math.PI / 2, 0, 0]}>
//           <group rotation={[-Math.PI / 2, 0, 0]}>
//             <group rotation={[Math.PI / 2, 0, 0]}>
//               <mesh geometry={nodes.mesh_0.geometry} material={materials.Eyes} />
//               <mesh geometry={nodes.mesh_1.geometry} material={materials.Face} />
//               <mesh geometry={nodes.mesh_2.geometry} material={materials.Face02} />
//             </group>
//           </group>
//         </group>
//       </group>
//     </group>
//   )
// }

// useGLTF.preload('/scene.gltf')
function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/scene.gltf')
  useFrame(() => (group.current.rotation.y += 0.01))
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group scale={0.08}>
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

//https://codesandbox.io/s/mount-transitions-forked-yfkv6?file=/src/App.js:4262-4278
function ControlOnMousePos() {
  const { camera, mouse } = useThree();
  camera.position.z = 0.8;
  const vec = new THREE.Vector3();
  return useFrame( () => camera.position.lerp(vec.set(mouse.x * 0.2, mouse.y * 0.2, camera.position.z), 0.04))
}





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
  {/* <CameraController/> */}
  <Suspense fallback={null}>
        <Model />
      </Suspense>
      <ControlOnMousePos />
  </Canvas>
  );
}


