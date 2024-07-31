import { useCustomization } from '@/context/Customization';
import { Mesh, Texture } from 'three';

interface ConstructionTypeProps {
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

export default function ConstructionTypeSlatted({
  nodes,
  metalTexture,
}: ConstructionTypeProps) {
  const {
    profileColor,
    freeStanding,
    width,
    minHeight,
    height,
    minDepth,
    depth,
  } = useCustomization();

  const frameScaleH = height / minHeight;
  const frameScaleD = depth / minDepth;

  let framePillerPositionScaleW = width / 239;
  if (width > 400) {
    framePillerPositionScaleW = width / 234;
  }

  return (
    <>
      {freeStanding && (
        <>
          <mesh
            geometry={nodes.slated_frame_back_Right.geometry}
            position={[
              -0.05 * frameScaleD,
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
              geometry={nodes.slated_frame_back_Left.geometry}
              position={[-0.05 * frameScaleD, 0.807 * frameScaleH + 0.008, 0]}
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
            geometry={nodes.slated_frame_back_Left.geometry}
            position={[
              -0.05 * frameScaleD,
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
        </>
      )}
    </>
  );
}
