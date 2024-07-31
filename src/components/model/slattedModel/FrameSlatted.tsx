import { useCustomization } from '@/context/Customization';
import { Mesh, Texture } from 'three';

interface FrameProps {
  nodes: {
    [key: string]: Mesh;
  };
  metalTexture: {
    map?: Texture;
    aoMap?: Texture;
    metalnessMap?: Texture;
    normalMap?: Texture;
    roughnessMap?: Texture;
    displacementMap?: Texture;
  };
}

export default function FrameSlatted({ nodes, metalTexture }: FrameProps) {
  const { profileColor, width, minHeight, height, minDepth, depth } =
    useCustomization();

  const frameScaleW = width / 239;
  const frameScaleH = height / minHeight;
  const frameScaleD = depth / minDepth;

  let frameSidePositionScaleW = width / 239;
  if (width > 400) {
    frameSidePositionScaleW = width / 235.96;
  }

  let framePillerPositionScaleW = width / 239;
  if (width > 400) {
    framePillerPositionScaleW = width / 234;
  }

  // slated rod counts start-----------------------
  const slatedRod = [];

  for (let i = 0; i <= 1.15; i += 0.07) {
    slatedRod.push(
      <mesh
        geometry={nodes.slated_frame_top_Mid.geometry}
        position={[-0.718 * frameScaleD, 1.589 * frameScaleH, i * frameScaleW]}
        scale-x={frameScaleD}
      >
        <meshStandardMaterial
          {...metalTexture}
          roughness={3}
          metalness={0}
          color={
            profileColor === 'RAL7016'
              ? '#383E42'
              : profileColor === 'RAL9001'
              ? '#FDF4E3'
              : '#0A0A0A'
          }
        />
      </mesh>
    );
  }
  for (let j = 0; j >= -1.15; j -= 0.07) {
    slatedRod.push(
      <mesh
        geometry={nodes.slated_frame_top_Mid.geometry}
        position={[-0.718 * frameScaleD, 1.589 * frameScaleH, j * frameScaleW]}
        scale-x={frameScaleD}
      >
        <meshStandardMaterial
          {...metalTexture}
          roughness={3}
          metalness={0}
          color={
            profileColor === 'RAL7016'
              ? '#383E42'
              : profileColor === 'RAL9001'
              ? '#FDF4E3'
              : '#0A0A0A'
          }
        />
      </mesh>
    );
  }
  // mid rod counts end--------------------------

  return (
    <group name="slattedFrame">
      {/* <mesh
        geometry={nodes.slated_frame_top_Mid.geometry}
        position={[-0.718 * frameScaleD, 1.589 * frameScaleH, 0 * frameScaleW]}
        scale-x={frameScaleD}
      >
        <meshStandardMaterial
          {...metalTexture}
          roughness={3}
          metalness={0}
          color={
            profileColor === "RAL7016"
              ? "#383E42"
              : profileColor === "RAL9001"
              ? "#FDF4E3"
              : "#0A0A0A"
          }
        />
      </mesh> */}
      {slatedRod}

      <mesh
        geometry={nodes.slated_frame_front_Right.geometry}
        position={[
          -1.332 * frameScaleD,
          0.807 * frameScaleH + 0.008,
          1.152 * framePillerPositionScaleW,
        ]}
        scale-y={frameScaleH + 0.05}
      >
        <meshStandardMaterial
          {...metalTexture}
          roughness={3}
          metalness={0}
          color={
            profileColor === 'RAL7016'
              ? '#383E42'
              : profileColor === 'RAL9001'
              ? '#FDF4E3'
              : '#0A0A0A'
          }
        />
      </mesh>

      {width > 607 && (
        <mesh
          geometry={nodes.slated_frame_front_Right.geometry}
          position={[-1.332 * frameScaleD, 0.807 * frameScaleH + 0.008, 0]}
          scale-y={frameScaleH}
        >
          <meshStandardMaterial
            {...metalTexture}
            roughness={3}
            metalness={0}
            color={
              profileColor === 'RAL7016'
                ? '#383E42'
                : profileColor === 'RAL9001'
                ? '#FDF4E3'
                : '#0A0A0A'
            }
          />
        </mesh>
      )}

      <mesh
        geometry={nodes.slated_frame_front_Left.geometry}
        position={[
          -1.332 * frameScaleD,
          0.807 * frameScaleH + 0.008,
          -1.165 * framePillerPositionScaleW,
        ]}
        scale-y={frameScaleH + 0.05}
      >
        <meshStandardMaterial
          {...metalTexture}
          roughness={3}
          metalness={0}
          color={
            profileColor === 'RAL7016'
              ? '#383E42'
              : profileColor === 'RAL9001'
              ? '#FDF4E3'
              : '#0A0A0A'
          }
        />
      </mesh>

      <mesh
        name="topRight"
        geometry={nodes.slated_frame_top_Mid.geometry}
        position={[
          -0.691 * frameScaleD,
          1.607 * frameScaleH,
          1.15 * frameSidePositionScaleW,
        ]}
        scale-x={frameScaleD + 0.1}
        scale-z={4}
      >
        <meshStandardMaterial
          {...metalTexture}
          roughness={3}
          metalness={0}
          color={
            profileColor === 'RAL7016'
              ? '#383E42'
              : profileColor === 'RAL9001'
              ? '#FDF4E3'
              : '#0A0A0A'
          }
        />
      </mesh>
      <mesh
        name="topLeft"
        geometry={nodes.slated_frame_top_Mid.geometry}
        position={[
          -0.691 * frameScaleD,
          1.607 * frameScaleH,
          -1.163 * frameSidePositionScaleW,
        ]}
        scale-x={frameScaleD + 0.1}
        scale-z={4}
      >
        <meshStandardMaterial
          {...metalTexture}
          roughness={3}
          metalness={0}
          color={
            profileColor === 'RAL7016'
              ? '#383E42'
              : profileColor === 'RAL9001'
              ? '#FDF4E3'
              : '#0A0A0A'
          }
        />
      </mesh>
      <mesh
        geometry={nodes.slated_frame_top_Front.geometry}
        position={[-1.337 * frameScaleD, 1.607 * frameScaleH, -0.007]}
        scale-z={frameScaleW + (width > 500 ? 0.2 : 0.08)}
      >
        <meshStandardMaterial
          {...metalTexture}
          roughness={3}
          metalness={0}
          color={
            profileColor === 'RAL7016'
              ? '#383E42'
              : profileColor === 'RAL9001'
              ? '#FDF4E3'
              : '#0A0A0A'
          }
        />
      </mesh>
      <mesh
        geometry={nodes.slated_frame_top_Back.geometry}
        position={[-0.045 * frameScaleD, 1.607 * frameScaleH, -0.007]}
        scale-z={frameScaleW + (width > 300 ? 0.16 : 0)}
      >
        <meshStandardMaterial
          {...metalTexture}
          roughness={3}
          metalness={0}
          color={
            profileColor === 'RAL7016'
              ? '#383E42'
              : profileColor === 'RAL9001'
              ? '#FDF4E3'
              : '#0A0A0A'
          }
        />
      </mesh>
    </group>
  );
}
