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

export default function WedgeRight({ nodes, materials, metalTexture }: Props) {
  const {
    rightWallType,
    rightWallMaterial,
    rightMaterialTransparency,
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
    if (rightWallMaterial === "glass") {
      switch (rightMaterialTransparency) {
        case "clear":
          return materials.opal;
        case "opal":
          return materials.glass;
        default:
          return materials["glass clear tint"];
      }
    } else if (rightWallMaterial === "poly") {
      switch (rightMaterialTransparency) {
        case "clear":
          return materials["Polycarbonate opal vertical"];
        case "opal":
          return materials["Polycarbonate spie"];
        default:
          return materials["Polycarbonate opal vertical tint"];
      }
    }
  };
  const wedgeRod = [];
  if (depth <= 400 && depth >= 301) {
    wedgeRod.push(
      <mesh
        key={"wedge 1"}
        geometry={nodes.glass_wall_R_alum_Mid.geometry}
        position={[
          -0.647 * frameScaleD,
          1.53 * frameScaleH,
          1.173 * frameSidePositionScaleW,
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
        geometry={nodes.glass_wall_R_alum_Mid.geometry}
        position={[
          -0.45 * frameScaleD,
          1.53 * frameScaleH,
          1.173 * frameSidePositionScaleW,
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
        geometry={nodes.glass_wall_R_alum_Mid.geometry}
        position={[
          -0.88 * frameScaleD,
          1.53 * frameScaleH,
          1.173 * frameSidePositionScaleW,
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

  return (
    <>
      {rightWallType === "wedge" && (
        <group name="wedgeRight">
          {wedgeRod}
          <group
            position={[
              -0.647 * frameScaleD,
              1.555 * frameScaleH + 0.015,
              1.173 * frameSidePositionScaleW,
            ]}
            scale-x={frameScaleD}
          >
            <mesh geometry={nodes.Cube074.geometry}>
              <meshStandardMaterial
                {...metalTexture}
                roughness={3}
                metalness={0}
                color={getColor()}
              />
            </mesh>
            <mesh
              geometry={nodes.Cube074_1.geometry}
              material={getMaterial()}
            />
          </group>
          <mesh
            geometry={nodes.spie_R_alu_Right.geometry}
            position={[
              -0.024 * frameScaleD,
              1.535 * frameScaleH,
              1.173 * frameSidePositionScaleW,
            ]}
          >
            <meshStandardMaterial
              {...metalTexture}
              roughness={3}
              metalness={0}
              color={getColor()}
            />
          </mesh>
          <mesh
            geometry={nodes.spie_R_alu_Left.geometry}
            position={[
              -1.27 * frameScaleD,
              1.524 * frameScaleH,
              1.173 * frameSidePositionScaleW,
            ]}
          >
            <meshStandardMaterial
              {...metalTexture}
              roughness={3}
              metalness={0}
              color={getColor()}
            />
          </mesh>
          <mesh
            geometry={nodes.spie_R_alu_Bottom.geometry}
            position={[
              -0.647 * frameScaleD,
              1.449 * frameScaleH + 0.015,
              1.173 * frameSidePositionScaleW,
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
      )}
    </>
  );
}
