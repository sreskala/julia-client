import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Mesh } from "three";

import "./models.css"

function MeshComponent() {
    const mesh = useRef<Mesh>(null!);
    const gltf = useLoader(GLTFLoader, '/scene.gltf');

    useFrame(() => {
        mesh.current.rotation.y += 0.01;
     });
  
    return (
      <mesh ref={mesh}>
        <primitive object={gltf.scene} />
      </mesh>
    );
  }

  export function LavaPlanet() {
    return (
      <div className='mesh-container'>
        <Canvas className='h-2xl w-2xl' camera={{ fov: 35, zoom: 1.3, near: 1, far: 1000 }}>
          <OrbitControls />
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <MeshComponent />
        </Canvas>
      </div>
    );
  }