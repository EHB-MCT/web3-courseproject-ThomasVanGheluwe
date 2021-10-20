import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import './App.css';



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
  <ambientLight intensity={0.5} />
  <Box />
  </Canvas>
  );
}


