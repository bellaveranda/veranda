import { useGLTF, useTexture } from '@react-three/drei';
import { useGSAP } from '@gsap/react';
import { useThree } from '@react-three/fiber';
import gsap from 'gsap';
import { GroupProps } from '@react-three/fiber';
import { GLTF } from 'three/examples/jsm/Addons.js';
import { useCustomization } from '@/context/Customization';
import { Material, Mesh } from 'three';
import StandradModel from './standradModel/StandradModel';
import SquareModel from './squareModel/SquareModel';
import SlattedModel from './slattedModel/SlattedModel';

type GLTFResult = GLTF & {
  nodes: {
    [key: string]: Mesh;
  };
  materials: {
    [key: string]: Material;
  };
};

export function Canopy_update(props: GroupProps) {
  const { tab, setTab, leftWall, rightWall } = useCustomization();

  const { camera } = useThree();

  useGSAP(() => {
    gsap.from(camera.position, {
      duration: 1,
      repeat: 0,
      x: -1,
      y: -1,
      z: 0,
      ease: 'power3.inOut',
    });
  });

  useGSAP(
    () => {
      tab == 'baseInfo'
        ? gsap.to(camera.position, {
            duration: 1,
            repeat: 0,
            x: -1,
            y: -5,
            z: 0,
            ease: 'power3.inOut',
          })
        : tab === 'covering'
        ? gsap.to(camera.position, {
            duration: 1,
            repeat: 0,
            x: -2,
            y: 3.5,
            z: 0,
            ease: 'power3.inOut',
          })
        : tab === 'awning'
        ? gsap.to(camera.position, {
            duration: 1,
            repeat: 0,
            x: -2,
            y: 3.5,
            z: 0,
            ease: 'power3.inOut',
          })
        : tab === 'extentions' && !rightWall && !leftWall
        ? gsap.to(camera.position, {
            duration: 1,
            repeat: 0,
            x: -1,
            y: -6,
            z: 0.3,
            ease: 'power3.inOut',
          })
        : tab === 'extentions' && rightWall
        ? gsap.to(camera.position, {
            duration: 1,
            repeat: 0,
            x: -1,
            y: -4,
            z: 2,
            ease: 'power3.inOut',
          })
        : tab === 'extentions' && leftWall
        ? gsap.to(camera.position, {
            duration: 1,
            repeat: 0,
            x: -1,
            y: -4,
            z: -2,
            ease: 'power3.inOut',
          })
        : gsap.to(camera.position, {
            duration: 1,
            repeat: 0,
            x: 1,
            y: -4,
            z: 1,
            ease: 'power3.inOut',
          });
    },
    { dependencies: [tab, setTab, leftWall, rightWall] }
  );

  const { nodes, materials } = useGLTF(
    './models/canopy_configuration_incre.glb'
  ) as unknown as GLTFResult;

  const metalTexture = useTexture({
    aoMap: './textures/Metal_006/Metal_006_ambientOcclusion.jpg',
    metalnessMap: './textures/Metal_006/Metal_006_metallic.jpg',
    normalMap: './textures/Metal_006/Metal_006_normal.jpg',
    roughnessMap: './textures/Metal_006/Metal_006_roughness.jpg',
  });
  const fabricTexture = useTexture({
    aoMap: './textures/Fabric_Silk_001/Fabric_002_OCC.jpg',
    normalMap: './textures/Fabric_Silk_001/Fabric_002_NORM.jpg',
    roughnessMap: './textures/Fabric_Silk_001/Fabric_002_ROUGH.jpg',
    displacementMap: './textures/Fabric_Silk_001/Fabric_002_DISP.png',
  });

  return (
    <group {...props} dispose={null}>
      <group name="building" position={[0.073, 1.718, 1.349]}>
        <mesh
          geometry={nodes.Cube053.geometry}
          material={materials.glassClear}
        />
        <mesh geometry={nodes.Cube053_1.geometry} material={materials.black} />
        <mesh
          geometry={nodes.Cube053_2.geometry}
          material={materials.awningCover}
        />
        <mesh
          geometry={nodes.Cube053_3.geometry}
          material={materials.building}
        />
      </group>

      <StandradModel
        nodes={nodes}
        materials={materials}
        metalTexture={metalTexture}
        fabricTexture={fabricTexture}
      />

      <SquareModel
        nodes={nodes}
        materials={materials}
        metalTexture={metalTexture}
        fabricTexture={fabricTexture}
      />

      <SlattedModel
        nodes={nodes}
        materials={materials}
        metalTexture={metalTexture}
        fabricTexture={fabricTexture}
      />
    </group>
  );
}

useGLTF.preload('./models/canopy_configuration_incre.glb');
