import { OrbitControls, useGLTF, useTexture, Environment, Center, SpotLight } from "@react-three/drei";

import { Room } from "./Room";
import * as THREE from "three";

export const Experience = () => {

  return (
    <>
      <color attach="background" args={["#0a0014"]} />
      {/* <Environment preset="sunset" /> */}

      <OrbitControls />
      <ambientLight intensity={1} />
      <SpotLight
        position={[-2.9, 0, 3]}
        intensity={5}
        color='#CEA000'
        distance={5}
        angle={0.2}
        anglePower={0.01}
      />

      <Center>
        <Room />
      </Center>



    </>
  );
};
