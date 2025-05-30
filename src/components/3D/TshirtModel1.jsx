import React from 'react'
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import { useFrame } from '@react-three/fiber';
import { Decal, useGLTF, useTexture } from '@react-three/drei';
import state from '../../store/state';

export function TshirtModel() {
  const snap = useSnapshot(state);
  
  // Load your GLB model
  const { nodes, materials } = useGLTF('/tshirt/tshirt.glb');

  // Safe texture loading - only if logo is enabled and path exists
  let logoTexture = null;
  if (snap.isLogoTexture && snap.logoDecal && snap.logoDecal !== '') {
    try {
      logoTexture = useTexture(snap.logoDecal);
    } catch (error) {
      console.log('Texture loading failed:', error);
      logoTexture = null;
    }
  }

  // Color changes
  useFrame((state, delta) => {
    if (materials.Shirt && materials.Shirt.color) {
      easing.dampC(materials.Shirt.color, snap.color, 0.25, delta);
    }
  });

  return (
    <group scale={0.01} position={[-0.5,0,0]} dispose={null}>
      <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
        <mesh 
          name="Object_2" 
          geometry={nodes.Object_2.geometry} 
          material={materials.Shirt}
          castShadow
          receiveShadow
        >
          {/* Only show logo if texture loaded successfully */}
          {logoTexture && (
            <Decal 
              position={[0, 0.04, 0.15]}
              rotation={[0, 0, 0]}
              scale={0.15}
              map={logoTexture}
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
  );
}

useGLTF.preload('/tshirt/tshirt.glb');