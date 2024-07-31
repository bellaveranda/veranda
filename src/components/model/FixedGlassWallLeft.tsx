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

export default function FixedGlassWallLeft({
  nodes,
  materials,
  metalTexture,
}: Props) {
  const {
    leftWallType,
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

  // mid rod counts start-----------------------
  const fixedMidRod = [];

  if (depth <= 313) {
    fixedMidRod.push(
      <mesh
        key={1}
        geometry={nodes.glass_wall_L_alum_Mid.geometry}
        position={[
          -0.647 * frameScaleD,
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
    );
  } else if (depth <= 463) {
    fixedMidRod.push(
      <mesh
        key={1}
        geometry={nodes.glass_wall_L_alum_Mid.geometry}
        position={[
          -0.45 * frameScaleD,
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
    );
    fixedMidRod.push(
      <mesh
        key={2}
        geometry={nodes.glass_wall_L_alum_Mid.geometry}
        position={[
          -0.88 * frameScaleD,
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
    );
  } else {
    fixedMidRod.push(
      <mesh
        key={1}
        geometry={nodes.glass_wall_L_alum_Mid.geometry}
        position={[
          -0.38 * frameScaleD,
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
    );
    fixedMidRod.push(
      <mesh
        key={2}
        geometry={nodes.glass_wall_L_alum_Mid.geometry}
        position={[
          -0.7 * frameScaleD,
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
    );
    fixedMidRod.push(
      <mesh
        key={3}
        geometry={nodes.glass_wall_L_alum_Mid.geometry}
        position={[
          -1 * frameScaleD,
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
    );
  }
  // mid rod counts end--------------------------

  return (
    <>
      {leftWallType === "fixedGlassWall" && (
        <group name="fixedGlassWallLeft">
          {/* <mesh
            geometry={nodes.glass_wall_L_alum_Mid.geometry}
            position={[
              -0.647 * frameScaleD,
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
          </mesh> */}
          {fixedMidRod}
          <mesh
            geometry={nodes.glass_wall_L_alum_Glass_Left.geometry}
            position={[
              -0.647 * frameScaleD,
              0.82 * frameScaleH,
              -1.187 * frameSidePositionScaleW,
            ]}
            material={getMaterial()}
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
      )}
    </>
  );
}
