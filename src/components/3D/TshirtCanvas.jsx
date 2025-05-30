import React, { useRef } from 'react'
import { Canvas } from "@react-three/fiber"
import { Environment, Center, PresentationControls } from '@react-three/drei'
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';
import Shirt from './Shirt';


const Backdrop = () => {
  const shadows = useRef();

  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={100}
      alphaTest={0.75}
      scale={8}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, -1.8, 0]}  
      opacity={0.02} 
    >
      <RandomizedLight 
        amount={6}
        radius={12}
        intensity={1.5}
        ambient={0.4}
        position={[8, 8, -12]}
      />
      <RandomizedLight 
        amount={4}
        radius={8}
        intensity={0.8}
        ambient={0.3}
        position={[-6, 6, -8]}
      />
    </AccumulativeShadows>
  )
}


const TshirtCanvas = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 4], fov: 45 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full h-full"
    >
  
      {/* <ambientLight intensity={0.7} /> */}
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={1.2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      {/* <pointLight position={[-5, 5, 5]} intensity={1.6} color="#ffffff" /> */}
      {/* <pointLight position={[5, -5, -5]} intensity={0.4} color="#f0f8ff" /> */}
      
      <Environment preset="apartment" />


      <PresentationControls
        global
        rotation={[0, 0, 0]}
        azimuth={[-Math.PI / 3, Math.PI / 3]} 
        polar={[-Math.PI / 12, Math.PI / 12]}  
      >
        <Center>
          <Shirt />
        </Center>
      </PresentationControls>

      {/* <Backdrop /> */}
    </Canvas>
  )
}

export default TshirtCanvas;

