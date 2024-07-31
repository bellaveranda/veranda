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

export default function AwningLeft({
  nodes,
  metalTexture,
  fabricTexture,
}: Props) {
  const {
    leftAwning,
    leftAwningColor,
    profileColor,
    width,
    minHeight,
    height,
    minDepth,
    depth,
  } = useCustomization();

  const frameScaleH = height / minHeight;
  const frameScaleD = depth / minDepth;

  let frameSidePositionScaleW = width / 239;
  if (width > 400) {
    frameSidePositionScaleW = width / 240;
  }
  let frameTopPositionScaleW = width / 239;
  if (width > 400) {
    frameTopPositionScaleW = width / 245;
  }
  let frameBottomPositionScaleW = width / 239;
  if (width > 400) {
    frameBottomPositionScaleW = width / 242;
  }

  return (
    <>
      {leftAwning && (
        <group name="awningLeft">
          <mesh
            geometry={nodes.V_awning_h_L_Left.geometry}
            position={[
              -1.344 * frameScaleD,
              0.768 * frameScaleH,
              -1.21 * frameSidePositionScaleW,
            ]}
            rotation={[0, 0, -Math.PI]}
            scale={-1}
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
            geometry={nodes.V_awning_h_L_Top.geometry}
            position={[
              -0.689 * frameScaleD,
              1.499 * frameScaleH,
              -1.239 * frameTopPositionScaleW,
            ]}
            rotation={[0, 0, -Math.PI]}
            scale={-1}
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
            geometry={nodes.V_awning_h_L_Bottom.geometry}
            position={[
              -0.688 * frameScaleD,
              0.814 * frameScaleH,
              -1.228 * frameBottomPositionScaleW,
            ]}
            rotation={[0, 0, -Math.PI]}
            scale={-1}
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
            geometry={nodes.V_awning_h_L_Right.geometry}
            position={[
              -0.029 * frameScaleD,
              0.768 * frameScaleH,
              -1.21 * frameSidePositionScaleW,
            ]}
            rotation={[0, 0, -Math.PI]}
            scale={-1}
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

          <group
            position={[
              -0.688 * frameScaleD,
              1.154 * frameScaleH,
              -1.227 * frameBottomPositionScaleW,
            ]}
            rotation={[0, 0, -Math.PI]}
            scale={-1}
            scale-y={frameScaleH}
            scale-x={frameScaleD}
          >
            <mesh geometry={nodes.Cube028.geometry}>
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
            <mesh geometry={nodes.Cube028_1.geometry}>
              <meshStandardMaterial
                {...fabricTexture}
                displacementScale={0}
                metalness={0}
                roughness={1000}
                color={
                  leftAwningColor === 'wit'
                    ? '#FFFFF3'
                    : leftAwningColor === 'begie'
                    ? '#CAB49E'
                    : leftAwningColor === 'creme'
                    ? '#B29272'
                    : leftAwningColor === 'grijsaluminium'
                    ? '#BFBFBF'
                    : leftAwningColor === 'antraciet'
                    ? '#293133'
                    : '#000000'
                }
              />
            </mesh>
          </group>
        </group>
      )}
    </>
  );
}
