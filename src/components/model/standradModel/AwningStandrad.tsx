import { useCustomization } from '@/context/Customization';
import { Mesh, Texture } from 'three';

interface Props {
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
  fabricTexture: {
    map?: Texture;
    aoMap?: Texture;
    metalnessMap?: Texture;
    normalMap?: Texture;
    roughnessMap?: Texture;
    displacementMap?: Texture;
  };
}

export default function AwningStandrad({
  nodes,
  metalTexture,
  fabricTexture,
}: Props) {
  const {
    awning,
    profileColor,
    fabricColor,
    width,
    minHeight,
    height,
    minDepth,
    depth,
  } = useCustomization();

  const frameScaleW = width / 239;
  const frameScaleH = height / minHeight;
  const frameScaleD = depth / minDepth;

  let frameSidePositionScaleW = width / 239;
  if (width > 400) {
    frameSidePositionScaleW = width / 235.96;
  }

  return (
    <>
      {awning === 'roofAwning' && (
        <group name="awningStandrad">
          <mesh
            geometry={nodes.awning_handle_Left.geometry}
            position={[
              -0.659 * frameScaleD,
              1.725 * frameScaleH,
              -1.188 * frameSidePositionScaleW,
            ]}
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
          <mesh
            geometry={nodes.awning_handle_Right.geometry}
            position={[
              -0.659 * frameScaleD,
              1.725 * frameScaleH,
              1.175 * frameSidePositionScaleW,
            ]}
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
          <mesh
            geometry={nodes.awning_front.geometry}
            position={[-0.674 * frameScaleD, 1.744 * frameScaleH, -0.006]}
            scale-z={frameSidePositionScaleW}
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
            geometry={nodes.awning_back.geometry}
            position={[-0.052 * frameScaleD, 1.786 * frameScaleH, -0.006]}
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
          <mesh
            geometry={nodes.awning_standard.geometry}
            position={[-0.364 * frameScaleD, 1.77 * frameScaleH, -0.006]}
            scale-z={frameSidePositionScaleW}
            scale-x={frameScaleD}
          >
            <meshStandardMaterial
              displacementScale={0}
              metalness={0}
              roughness={33}
              {...fabricTexture}
              color={
                fabricColor === 'wit'
                  ? '#FFFFF3'
                  : fabricColor === 'begie'
                  ? '#CAB49E'
                  : fabricColor === 'creme'
                  ? '#B29272'
                  : fabricColor === 'grijsaluminium'
                  ? '#BFBFBF'
                  : fabricColor === 'antraciet'
                  ? '#293133'
                  : '#000000'
              }
            />
          </mesh>
        </group>
      )}
    </>
  );
}
