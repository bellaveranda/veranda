import { useCustomization } from "@/context/Customization";
import { Material, Mesh, Texture } from "three";

interface Props {
  nodes: {
    [key: string]: Mesh;
  };
  materials: {
    [key: string]: Material;
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

export default function FixedGlassWallFrontRight({
  nodes,
  materials,
  metalTexture,
}: Props) {
  const {
    frontRightWallType,
    frontRightMaterialTransparency,
    profileColor,
    width,
    minHeight,
    height,
    minDepth,
    depth,
  } = useCustomization();

  const frameScaleH = height / minHeight;
  const frameScaleD = depth / minDepth;
  const frameScaleW = width / 239;

  const getColor = () => {
    switch (profileColor) {
      case "RAL7016":
        return "#383E42";
      case "RAL9001":
        return "#FDF4E3";
      default:
        return "#0A0A0A";
    }
  };

  const getMaterial = () => {
    switch (frontRightMaterialTransparency) {
      case "clear":
        return materials.opal;
      case "opal":
        return materials.glass;
      default:
        return materials["glass clear tint"];
    }
  };

  const fixedMidRod = [];
  // mid rod counts start-----------------------

  if (width <= 668) {
    fixedMidRod.push(
      <mesh
        key={1}
        geometry={nodes.glass_wall_h_Full_Mid.geometry}
        position={[
          -1.365 * frameScaleD,
          0.823 * frameScaleH,
          0.4 * frameScaleW,
        ]}
        rotation={[0, 0, -Math.PI]}
        scale={[-1, -1, -1.011]}
        scale-y={frameScaleH}
      >
        <meshStandardMaterial
          {...metalTexture}
          roughness={3}
          metalness={0}
          color={getColor()}
        />
      </mesh>
    );
    fixedMidRod.push(
      <mesh
        key={2}
        geometry={nodes.glass_wall_h_Full_Mid.geometry}
        position={[
          -1.365 * frameScaleD,
          0.823 * frameScaleH,
          0.8 * frameScaleW,
        ]}
        rotation={[0, 0, -Math.PI]}
        scale={[-1, -1, -1.011]}
        scale-y={frameScaleH}
      >
        <meshStandardMaterial
          {...metalTexture}
          roughness={3}
          metalness={0}
          color={getColor()}
        />
      </mesh>
    );
  } else {
    fixedMidRod.push(
      <mesh
        key={1}
        geometry={nodes.glass_wall_h_Full_Mid.geometry}
        position={[
          -1.365 * frameScaleD,
          0.823 * frameScaleH,
          0.3 * frameScaleW,
        ]}
        rotation={[0, 0, -Math.PI]}
        scale={[-1, -1, -1.011]}
        scale-y={frameScaleH}
      >
        <meshStandardMaterial
          {...metalTexture}
          roughness={3}
          metalness={0}
          color={getColor()}
        />
      </mesh>
    );
    fixedMidRod.push(
      <mesh
        key={2}
        geometry={nodes.glass_wall_h_Full_Mid.geometry}
        position={[
          -1.365 * frameScaleD,
          0.823 * frameScaleH,
          0.6 * frameScaleW,
        ]}
        rotation={[0, 0, -Math.PI]}
        scale={[-1, -1, -1.011]}
        scale-y={frameScaleH}
      >
        <meshStandardMaterial
          {...metalTexture}
          roughness={3}
          metalness={0}
          color={getColor()}
        />
      </mesh>
    );
    fixedMidRod.push(
      <mesh
        key={3}
        geometry={nodes.glass_wall_h_Full_Mid.geometry}
        position={[
          -1.365 * frameScaleD,
          0.823 * frameScaleH,
          0.9 * frameScaleW,
        ]}
        rotation={[0, 0, -Math.PI]}
        scale={[-1, -1, -1.011]}
        scale-y={frameScaleH}
      >
        <meshStandardMaterial
          {...metalTexture}
          roughness={3}
          metalness={0}
          color={getColor()}
        />
      </mesh>
    );
  }
  // mid rod counts end--------------------------

  return (
    <>
      {width >= 607 && (
        <>
          {frontRightWallType === "fixedGlassWall" && (
            <group name="fixedGlassWallFrontRight">
              <mesh
                geometry={nodes.glass_wall_h_Full_Bottom.geometry}
                position={[
                  -1.365 * frameScaleD,
                  0.016 * frameScaleH,
                  0.593 * frameScaleW,
                ]}
                rotation={[0, 0, -Math.PI]}
                scale={[-1, -1, -1.011]}
                scale-z={frameScaleW / 2.1 + (width > 410 ? 0.22 : 0.12)}
              >
                <meshStandardMaterial
                  {...metalTexture}
                  roughness={3}
                  metalness={0}
                  color={getColor()}
                />
              </mesh>
              {fixedMidRod}
              <mesh
                geometry={nodes.glass_wall_h_Full_Glass_Right.geometry}
                material={getMaterial()}
                position={[
                  -1.365 * frameScaleD,
                  0.807 * frameScaleH,
                  0.595 * frameScaleW,
                ]}
                rotation={[0, 0, -Math.PI]}
                scale={[-1, -1, -1.011]}
                scale-z={frameScaleW / 2.1 + (width > 410 ? 0.22 : 0.12)}
                scale-y={frameScaleH}
              />
              <mesh
                geometry={nodes.glass_wall_h_Full_Right.geometry}
                position={[
                  -1.365 * frameScaleD,
                  0.807 * frameScaleH,
                  1.22 * frameScaleW - (width > 400 ? 0.17 : 0.07),
                ]}
                rotation={[0, 0, -Math.PI]}
                scale={[-1, -1, -1.011]}
                scale-y={frameScaleH}
              >
                <meshStandardMaterial
                  {...metalTexture}
                  roughness={3}
                  metalness={0}
                  color={getColor()}
                />
              </mesh>
            </group>
          )}
        </>
      )}
    </>
  );
}
