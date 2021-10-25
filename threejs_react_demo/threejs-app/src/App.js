import React, { useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";
import './App.css';

const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(
     () => {
        const controls = new OrbitControls(camera, gl.domElement);
        controls.minDistance = 3;
        controls.maxDistance = 20;
        return () => {
          controls.dispose();
        };
     },
     [camera, gl]
  );
  return null;
};


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
  <CameraController/>
  <ambientLight intensity={0.5} />
  <Box />
  </Canvas>
  );
}


