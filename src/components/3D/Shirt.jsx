import React from 'react'
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import { useFrame } from '@react-three/fiber';
import { Decal, useGLTF, useTexture } from '@react-three/drei';

import state from '../../store/state';

const Shirt = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF('/shirt_baked.glb');


  const customPrintTexture = useTexture(snap.customPrintDecal);

  useFrame((state, delta) => easing.dampC(materials.lambert1.color, snap.color, 0.25, delta));


  const currentPlacement = snap.placements[snap.customPrintPlacement];
  const printPosition = currentPlacement?.position || [0, 0.04, 0.15];
  const printScale = currentPlacement?.scale || snap.customPrintSize;

  const stateString = JSON.stringify({
    color: snap.color,
    isCustomPrint: snap.isCustomPrint,
    placement: snap.customPrintPlacement,
    size: snap.customPrintSize
  });

  return (
    <group key={stateString} scale={4.5} position={[0, 0.1, 0]}>
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}
      >
        {/* Dynamic custom print placement */}
        {snap.isCustomPrint && customPrintTexture && (
          <Decal 
            position={printPosition}
            rotation={[0, 0, 0]}
            scale={printScale}
            map={customPrintTexture}
            anisotropy={16}
            depthTest={false}
            depthWrite={true}
          />
        )}
      </mesh>
    </group>
  )
}

export default Shirt