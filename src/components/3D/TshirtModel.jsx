import React from 'react'
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import { useFrame } from '@react-three/fiber';
import { Decal, useGLTF, useTexture } from '@react-three/drei';

import state from '../../store/state';

export function TshirtModel(props) {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF('/tshirt/scene.gltf');

  // Load textures using drei (single method, no conflicts)
  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);

  // Smooth color transitions
  useFrame((state, delta) => easing.dampC(materials.Shirt.color, snap.color, 0.25, delta));

  // Force re-render when state changes
  const stateString = JSON.stringify(snap);

  return (
    <group key={stateString} scale={0.02} {...props} dispose={null}>
      <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
        <mesh 
          name="Object_2" 
          geometry={nodes.Object_2.geometry} 
          material={materials.Shirt} 
          castShadow
          receiveShadow
        >
          {/* Logo Decal - Small, center chest */}
          {snap.isLogoTexture && (
            <Decal 
              position={[0, 0.04, 0.15]}
              rotation={[0, 0, 0]}
              scale={0.15}
              map={logoTexture}
              anisotropy={16}
              depthTest={false}
              depthWrite={true}
            />
          )}

          {/* Full Decal - Large, center shirt */}
          {snap.isFullTexture && (
            <Decal 
              position={[0, 0, 0]}
              rotation={[0, 0, 0]}
              scale={1}
              map={fullTexture}
              anisotropy={16}
              depthTest={false}
              depthWrite={true}
            />
          )}
        </mesh>
        
        <mesh 
          name="Object_3" 
          geometry={nodes.Object_3.geometry} 
          material={materials.Shirt}
          castShadow
          receiveShadow 
        />
      </group>
    </group>
  )
}

useGLTF.preload('/tshirt/scene.gltf')