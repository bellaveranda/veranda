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

export default function ConstructionTypeStandrad({
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

  let framePillerPositionScaleW = width / 239;
  if (width > 400) {
    framePillerPositionScaleW = width / 234;
  }
  const frameScaleH = height / minHeight;
  const frameScaleD = depth / minDepth;

  return (
    <>
      {freeStanding && (
        <>
          <mesh
            geometry={nodes.pillar_rear_Left.geometry}
            position={[
              -0.06 * frameScaleD,
              0.816 * frameScaleH + 0.008,
              -1.161 * framePillerPositionScaleW,
            ]}
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
          {width > 607 && (
            <mesh
              geometry={nodes.pillar_rear_Right.geometry}
              position={[-0.06 * frameScaleD, 0.816 * frameScaleH + 0.008, 0]}
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
            geometry={nodes.pillar_rear_Right.geometry}
            position={[
              -0.06 * frameScaleD,
              0.816 * frameScaleH + 0.008,
              1.148 * framePillerPositionScaleW,
            ]}
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
        </>
      )}
    </>
  );
}
