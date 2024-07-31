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

export default function AwningFront({
  nodes,
  metalTexture,
  fabricTexture,
}: Props) {
  const {
    frontWallType,
    verticalAwningColor,
    profileColor,
    width,
    minHeight,
    height,
    minDepth,
    depth,
  } = useCustomization();

  const frameScaleH = height / minHeight;
  const frameScaleW = width / 239;

  let frameSidePositionScaleD = depth / minDepth;
  if (depth > 300) {
    frameSidePositionScaleD = depth / (minDepth + 5);
  }
  let frameTopPositionScaleD = depth / minDepth;
  if (depth > 300) {
    frameTopPositionScaleD = depth / (minDepth + 7);
  }
  let frameBottomPositionScaleD = depth / minDepth;
  if (depth > 300) {
    frameBottomPositionScaleD = depth / (minDepth + 6);
  }

  return (
    <>
      {frontWallType === 'awning' && (
        <group name="awningFront">
          <mesh
            geometry={nodes.V_awning_h_F_Mid.geometry}
            position={[
              -1.426 * frameBottomPositionScaleD,
              1.153 * frameScaleH,
              -0.008 * frameScaleW,
            ]}
            scale-z={frameScaleW}
            scale-y={frameScaleH}
          >
            <meshStandardMaterial
              {...fabricTexture}
              displacementScale={0}
              metalness={0}
              roughness={1000}
              color={
                verticalAwningColor === 'wit'
                  ? '#FFFFF3'
                  : verticalAwningColor === 'begie'
                  ? '#CAB49E'
                  : verticalAwningColor === 'creme'
                  ? '#B29272'
                  : verticalAwningColor === 'grijsaluminium'
                  ? '#BFBFBF'
                  : verticalAwningColor === 'antraciet'
                  ? '#293133'
                  : '#000000'
              }
            />
          </mesh>
          <mesh
            geometry={nodes.V_awning_h_F_Left.geometry}
            position={[
              -1.411 * frameSidePositionScaleD,
              0.768 * frameScaleH,
              -1.171 * frameScaleW,
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
          <mesh
            geometry={nodes.V_awning_h_F_Top.geometry}
            position={[
              -1.438 * frameTopPositionScaleD,
              1.499 * frameScaleH,
              -0.002 * frameScaleW,
            ]}
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
            geometry={nodes.V_awning_h_F_Right.geometry}
            position={[
              -1.411 * frameSidePositionScaleD,
              0.768 * frameScaleH,
              1.166 * frameScaleW,
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
          <mesh
            geometry={nodes.V_awning_h_F_Bottom.geometry}
            position={[
              -1.426 * frameBottomPositionScaleD,
              0.813 * frameScaleH,
              -0.008 * frameScaleW,
            ]}
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
        </group>
      )}
    </>
  );
}
