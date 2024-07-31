import { useCustomization } from '@/context/Customization';
import { Mesh, Texture } from 'three';

interface GutterProps {
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

export default function GutterStandrad({ nodes, metalTexture }: GutterProps) {
  const { profileColor, standardType, width, minHeight, height, minDepth, depth } =
    useCustomization();

  const frameScaleW = width / 239;
  const frameScaleH = height / minHeight;
  const frameScaleD = depth / minDepth;

  return (
    <>
      {standardType === 'round' && (
        <mesh
          geometry={nodes.gutter_round.geometry}
          position={[-1.332 * frameScaleD, 1.586 * frameScaleH, -0.007]}
          scale-z={frameScaleW}
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
    </>
  );
}
