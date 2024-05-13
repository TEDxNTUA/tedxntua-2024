import React, { useRef } from "react";
import { useGLTF, Text, MeshTransmissionMaterial } from "@react-three/drei";
import { useThree, useFrame } from "react-three-fiber";

import { useState, useEffect } from "react";
// import { useControls } from "leva";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export default function Model() {
  const mesh = useRef();
  // const { nodes } = useGLTF("/torus/torus2.glb");
  const { viewport } = useThree();
  const size = useWindowSize();

  // useFrame(() => {
  //   mesh.current.rotation.x -= 0.005;
  //   mesh.current.rotation.y -= 0.01;
  // });

  //   const materialProps = useControls({
  //     thickness: { value: 0.7, min: 0, max: 3, step: 0.05 },
  //     roughness: { value: 0, min: 0, max: 1, step: 0.1 },
  //     transmission: { value: 1, min: 0, max: 1, step: 0.1 },
  //     ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
  //     chromaticAberration: { value: 0.06, min: 0, max: 1 },
  //     backside: { value: true },
  //   });

  const materialProps = {
    thickness: 0.7,
    roughness: 0,
    transmission: 1,
    ior: 1.2,
    chromaticAberration: 0.06,
    backside: true,
  };

  const fontSize = size.width >= 2000 ? 3.5 : 3.5;
  const scaleFactor = size.width >= 2000 ? 15 : 10;

  return (
    <group scale={viewport.width / scaleFactor}>
      {/* <group> */}
      {/* font={"fonts/.....otf"} */}
      <Text
        // font={"/fonts/PPNeueMontreal-Bold.otf"}
        font={"/fonts/AestheticRegular.otf"}
        position={[0, 0, -9]}
        fontSize={fontSize}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Ephemeral
      </Text>
      {/* <mesh ref={mesh} {...nodes.Torus003}>
        <MeshTransmissionMaterial {...materialProps} />
      </mesh> */}
    </group>
  );
}

// useGLTF.preload("/torus.glb");
