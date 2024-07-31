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

export default function AluminiumWallLeft({
  nodes,
  materials,
  metalTexture,
}: Props) {
  const {
    leftWallType,
    leftWedgeMaterial,
    leftWallMaterial,
    leftMaterialTransparency,
    profileColor,
    width,
    minHeight,
    height,
    minDepth,
    depth,
  } = useCustomization();

  const frameScaleH = height / minHeight;
  let frameScaleD = depth / minDepth + 0.07;

  if (depth > 350) {
    frameScaleD = depth / minDepth + 0.13;
  }

  let frameSidePositionScaleW = width / 239;
  if (width > 400) {
    frameSidePositionScaleW = width / 235.96;
  }

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
    if (leftWallMaterial === "glass") {
      switch (leftMaterialTransparency) {
        case "clear":
          return materials.opal;
        case "opal":
          return materials.glass;
        default:
          return materials["glass clear tint"];
      }
    } else if (leftWallMaterial === "poly") {
      switch (leftMaterialTransparency) {
        case "clear":
          return materials["Polycarbonate opal vertical"];
        case "opal":
          return materials["Polycarbonate spie"];
        default:
          return materials["Polycarbonate opal vertical tint"];
      }
    } else {
      return materials.aluminum;
    }
  };

  // wedge rod counts start---------------------
  const wedgeRod = [];

  if (depth <= 400 && depth >= 301) {
    wedgeRod.push(
      <mesh
        key={"wedge 1"}
        geometry={nodes.glass_wall_L_alum_Mid.geometry}
        position={[
          -0.647 * frameScaleD,
          1.53 * frameScaleH,
          -1.187 * frameSidePositionScaleW,
        ]}
        scale-y={0.1}
      >
        <meshStandardMaterial
          {...metalTexture}
          roughness={3}
          metalness={0}
          color={getColor()}
        />
      </mesh>
    );
  } else if (depth <= 500 && depth >= 401) {
    wedgeRod.push(
      <mesh
        key={"wedge 1"}
        geometry={nodes.glass_wall_L_alum_Mid.geometry}
        position={[
          -0.45 * frameScaleD,
          1.53 * frameScaleH,
          -1.187 * frameSidePositionScaleW,
        ]}
        scale-y={0.1}
      >
        <meshStandardMaterial
          {...metalTexture}
          roughness={3}
          metalness={0}
          color={getColor()}
        />
      </mesh>
    );
    wedgeRod.push(
      <mesh
        key={"wedge 2"}
        geometry={nodes.glass_wall_L_alum_Mid.geometry}
        position={[
          -0.88 * frameScaleD,
          1.53 * frameScaleH,
          -1.187 * frameSidePositionScaleW,
        ]}
        scale-y={0.1}
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

  // wedge rod counts end-----------------------

  return (
    <>
      {leftWallType === "aluminium" &&
        (leftWedgeMaterial ? (
          <group name="slidingDoorLeft">
            <mesh
              geometry={nodes.sliding_door_I_tint_Bottom.geometry}
              position={[
                -0.647 * frameScaleD,
                0.025 * frameScaleH,
                -1.173 * frameSidePositionScaleW,
              ]}
              rotation={[0, 0, -Math.PI]}
              scale={-1}
              scale-x={frameScaleD}
            >
              <meshStandardMaterial
                {...metalTexture}
                roughness={3}
                metalness={0}
                color={getColor()}
              />
            </mesh>
            <group
              position={[
                -0.949 * frameScaleD,
                0.717 * frameScaleH,
                -1.178 * frameSidePositionScaleW,
              ]}
              rotation={[0, 0, -Math.PI]}
              scale={-1}
              scale-x={frameScaleD}
              scale-y={frameScaleH}
            >
              <mesh geometry={nodes.Cube054.geometry}>
                <meshStandardMaterial
                  {...metalTexture}
                  roughness={3}
                  metalness={0}
                  color={getColor()}
                />
              </mesh>
              <mesh
                geometry={nodes.Cube054_1.geometry}
                material={materials.aluminum}
              />
            </group>
            <mesh
              geometry={nodes.sliding_door_I_tint_Right.geometry}
              position={[
                -0.027 * frameScaleD,
                0.717 * frameScaleH,
                -1.173 * frameSidePositionScaleW,
              ]}
              rotation={[0, 0, -Math.PI]}
              scale={-1}
              scale-y={frameScaleH}
            >
              <meshStandardMaterial
                {...metalTexture}
                roughness={3}
                metalness={0}
                color={getColor()}
              />
            </mesh>
            <mesh
              geometry={nodes.sliding_door_I_tint_Left.geometry}
              position={[
                -1.265 * frameScaleD,
                0.717 * frameScaleH,
                -1.173 * frameSidePositionScaleW,
              ]}
              rotation={[0, 0, -Math.PI]}
              scale={-1}
              scale-y={frameScaleH}
            >
              <meshStandardMaterial
                {...metalTexture}
                roughness={3}
                metalness={0}
                color={getColor()}
              />
            </mesh>
            <group
              position={[
                -0.345 * frameScaleD,
                0.717 * frameScaleH,
                -1.17 * frameSidePositionScaleW,
              ]}
              rotation={[0, 0, -Math.PI]}
              scale={-1}
              scale-y={frameScaleH}
              scale-x={frameScaleD}
            >
              <mesh geometry={nodes.Cube057.geometry}>
                <meshStandardMaterial
                  {...metalTexture}
                  roughness={3}
                  metalness={0}
                  color={getColor()}
                />
              </mesh>
              <mesh
                geometry={nodes.Cube057_1.geometry}
                material={materials.aluminum}
              />
            </group>

            <group name="wedgeLeft">
              {wedgeRod}
              <mesh
                geometry={nodes.spie_L_alu_Bottom.geometry}
                position={[
                  -0.647 * frameScaleD,
                  1.449 * frameScaleH,
                  -1.173 * frameSidePositionScaleW,
                ]}
                rotation={[0, 0, -Math.PI]}
                scale={-1}
                scale-x={frameScaleD}
              >
                <meshStandardMaterial
                  {...metalTexture}
                  roughness={3}
                  metalness={0}
                  color={getColor()}
                />
              </mesh>

              <group
                position={[
                  -0.647 * frameScaleD,
                  1.555 * frameScaleH,
                  -1.173 * frameSidePositionScaleW,
                ]}
                rotation={[0, 0, -Math.PI]}
                scale={-1}
                scale-x={frameScaleD}
                scale-y={frameScaleH}
              >
                <mesh geometry={nodes.Cube040.geometry}>
                  <meshStandardMaterial
                    {...metalTexture}
                    roughness={3}
                    metalness={0}
                    color={getColor()}
                  />
                </mesh>
                <mesh
                  geometry={nodes.Cube040_1.geometry}
                  material={getMaterial()}
                />
              </group>

              <mesh
                geometry={nodes.spie_L_alu_Left.geometry}
                position={[
                  -1.27 * frameScaleD,
                  1.524 * frameScaleH,
                  -1.173 * frameSidePositionScaleW,
                ]}
                rotation={[0, 0, -Math.PI]}
                scale={-1}
                scale-y={frameScaleH}
              >
                <meshStandardMaterial
                  {...metalTexture}
                  roughness={3}
                  metalness={0}
                  color={getColor()}
                />
              </mesh>
              <mesh
                geometry={nodes.spie_L_alu_Right.geometry}
                position={[
                  -0.024 * frameScaleD,
                  1.535 * frameScaleH,
                  -1.173 * frameSidePositionScaleW,
                ]}
                rotation={[0, 0, -Math.PI]}
                scale={-1}
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
          </group>
        ) : (
          <group name="fixedGlassWallLeft">
            <mesh
              geometry={nodes.glass_wall_L_alum_Mid.geometry}
              position={[
                -0.665 * frameScaleD,
                0.823 * frameScaleH,
                -1.187 * frameSidePositionScaleW,
              ]}
              scale-y={frameScaleH}
            >
              <meshStandardMaterial
                {...metalTexture}
                roughness={3}
                metalness={0}
                color={getColor()}
              />
            </mesh>
            <mesh
              geometry={nodes.glass_wall_L_alum_Glass_Left.geometry}
              position={[
                -0.647 * frameScaleD,
                0.82 * frameScaleH,
                -1.187 * frameSidePositionScaleW,
              ]}
              material={materials.aluminum}
              scale-y={frameScaleH}
              scale-x={frameScaleD}
            />
            <mesh
              geometry={nodes.glass_wall_L_alum_Right.geometry}
              position={[
                -0.024 * frameScaleD,
                0.807 * frameScaleH,
                -1.187 * frameSidePositionScaleW,
              ]}
              scale-y={frameScaleH}
            >
              <meshStandardMaterial
                {...metalTexture}
                roughness={3}
                metalness={0}
                color={getColor()}
              />
            </mesh>
            <mesh
              geometry={nodes.glass_wall_L_alum_Left.geometry}
              position={[
                -1.27 * frameScaleD,
                0.807 * frameScaleH,
                -1.187 * frameSidePositionScaleW,
              ]}
              scale-y={frameScaleH}
            >
              <meshStandardMaterial
                {...metalTexture}
                roughness={3}
                metalness={0}
                color={getColor()}
              />
            </mesh>
            <mesh
              geometry={nodes.glass_wall_L_alum_Bottom.geometry}
              position={[
                -0.647 * frameScaleD,
                0.016 * frameScaleH,
                -1.187 * frameSidePositionScaleW,
              ]}
              scale-x={frameScaleD}
            >
              <meshStandardMaterial
                {...metalTexture}
                roughness={3}
                metalness={0}
                color={getColor()}
              />
            </mesh>
          </group>
        ))}
    </>
  );
}
