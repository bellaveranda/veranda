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

export default function SlidingDoorRight({
  nodes,
  materials,
  metalTexture,
}: Props) {
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

  // wedge rod counts end-----------------------

  // slide door rod counts start----------------
  const slideDoorRod = [];

  if (depth <= 213) {
    slideDoorRod.push(
      <mesh
        key={1}
        geometry={nodes.glass_wall_R_alum_Mid.geometry}
        position={[
          -0.65 * frameScaleD,
          0.66 * frameScaleH,
          1.173 * frameSidePositionScaleW,
        ]}
        scale-y={frameScaleH}
        scale-x={0.1}
        scale-z={0.1}
      >
        <meshStandardMaterial
          {...metalTexture}
          roughness={3}
          metalness={0}
          color={getColor()}
        />
      </mesh>
    );
  } else if (depth <= 313) {
    slideDoorRod.push(
      <mesh
        key={1}
        geometry={nodes.glass_wall_L_alum_Mid.geometry}
        position={[
          -0.46 * frameScaleD,
          0.66 * frameScaleH,
          1.173 * frameSidePositionScaleW,
        ]}
        scale-y={frameScaleH}
        scale-x={0.1}
        scale-z={0.1}
      >
        <meshStandardMaterial
          {...metalTexture}
          roughness={3}
          metalness={0}
          color={getColor()}
        />
      </mesh>
    );
    slideDoorRod.push(
      <mesh
        key={2}
        geometry={nodes.glass_wall_L_alum_Mid.geometry}
        position={[
          -0.87 * frameScaleD,
          0.66 * frameScaleH,
          1.173 * frameSidePositionScaleW,
        ]}
        scale-y={frameScaleH}
        scale-x={0.1}
        scale-z={0.1}
      >
        <meshStandardMaterial
          {...metalTexture}
          roughness={3}
          metalness={0}
          color={getColor()}
        />
      </mesh>
    );
  } else if (depth <= 413) {
    slideDoorRod.push(
      <mesh
        key={1}
        geometry={nodes.glass_wall_L_alum_Mid.geometry}
        position={[
          -0.35 * frameScaleD,
          0.66 * frameScaleH,
          1.173 * frameSidePositionScaleW,
        ]}
        scale-y={frameScaleH}
        scale-x={0.1}
        scale-z={0.1}
      >
        <meshStandardMaterial
          {...metalTexture}
          roughness={3}
          metalness={0}
          color={getColor()}
        />
      </mesh>
    );
    slideDoorRod.push(
      <mesh
        key={2}
        geometry={nodes.glass_wall_L_alum_Mid.geometry}
        position={[
          -0.65 * frameScaleD,
          0.66 * frameScaleH,
          1.173 * frameSidePositionScaleW,
        ]}
        scale-y={frameScaleH}
        scale-x={0.1}
        scale-z={0.1}
      >
        <meshStandardMaterial
          {...metalTexture}
          roughness={3}
          metalness={0}
          color={getColor()}
        />
      </mesh>
    );
    slideDoorRod.push(
      <mesh
        key={3}
        geometry={nodes.glass_wall_L_alum_Mid.geometry}
        position={[
          -0.95 * frameScaleD,
          0.66 * frameScaleH,
          1.173 * frameSidePositionScaleW,
        ]}
        scale-y={frameScaleH}
        scale-x={0.1}
        scale-z={0.1}
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
    slideDoorRod.push(
      <mesh
        key={1}
        geometry={nodes.glass_wall_L_alum_Mid.geometry}
        position={[
          -0.32 * frameScaleD,
          0.66 * frameScaleH,
          1.173 * frameSidePositionScaleW,
        ]}
        scale-y={frameScaleH}
        scale-x={0.1}
        scale-z={0.1}
      >
        <meshStandardMaterial
          {...metalTexture}
          roughness={3}
          metalness={0}
          color={getColor()}
        />
      </mesh>
    );
    slideDoorRod.push(
      <mesh
        key={2}
        geometry={nodes.glass_wall_L_alum_Mid.geometry}
        position={[
          -0.58 * frameScaleD,
          0.66 * frameScaleH,
          1.173 * frameSidePositionScaleW,
        ]}
        scale-y={frameScaleH}
        scale-x={0.1}
        scale-z={0.1}
      >
        <meshStandardMaterial
          {...metalTexture}
          roughness={3}
          metalness={0}
          color={getColor()}
        />
      </mesh>
    );
    slideDoorRod.push(
      <mesh
        key={3}
        geometry={nodes.glass_wall_L_alum_Mid.geometry}
        position={[
          -0.83 * frameScaleD,
          0.66 * frameScaleH,
          1.173 * frameSidePositionScaleW,
        ]}
        scale-y={frameScaleH}
        scale-x={0.1}
        scale-z={0.1}
      >
        <meshStandardMaterial
          {...metalTexture}
          roughness={3}
          metalness={0}
          color={getColor()}
        />
      </mesh>
    );
    slideDoorRod.push(
      <mesh
        key={4}
        geometry={nodes.glass_wall_L_alum_Mid.geometry}
        position={[
          -1.05 * frameScaleD,
          0.66 * frameScaleH,
          1.173 * frameSidePositionScaleW,
        ]}
        scale-y={frameScaleH}
        scale-x={0.1}
        scale-z={0.1}
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
  // slide door rod counts end------------------

  return (
    <>
      {rightWallType === "slidingDoor" && (
        <group name="slidingDoorRight">
          <group name="slidingDoorWallRight">
            <mesh
              geometry={nodes.glass_wall_R_aluminium_Glass_Right.geometry}
              material={getMaterial()}
              position={[
                -0.647 * frameScaleD,
                0.82 * frameScaleH,
                1.17 * frameSidePositionScaleW,
              ]}
              scale-y={frameScaleH}
              scale-x={frameScaleD}
            />
            <mesh
              geometry={nodes.sliding_door_R_tint_Bottom.geometry}
              position={[
                -0.647 * frameScaleD,
                0.025 * frameScaleH,
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
            <mesh
              geometry={nodes.sliding_door_R_tint_Left.geometry}
              position={[
                -1.265 * frameScaleD,
                0.717 * frameScaleH,
                1.173 * frameSidePositionScaleW,
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
              geometry={nodes.sliding_door_R_tint_Right.geometry}
              position={[
                -0.027 * frameScaleD,
                0.717 * frameScaleH,
                1.173 * frameSidePositionScaleW,
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
            {/* <group
              position={[
                -0.345 * frameScaleD,
                0.717 * frameScaleH,
                1.17 * frameSidePositionScaleW,
              ]}
              scale-x={frameScaleD}
              scale-y={frameScaleH}
            >
              <mesh geometry={nodes.Cube050.geometry}>
                <meshStandardMaterial
                  {...metalTexture}
                  roughness={3}
                  metalness={0}
                  color={getColor()}
                />
              </mesh>
              <mesh
                geometry={nodes.Cube050_1.geometry}
                material={getMaterial()}
              />
            </group>
            <group
              position={[
                -0.949 * frameScaleD,
                0.717 * frameScaleH,
                1.178 * frameSidePositionScaleW,
              ]}
              scale-y={frameScaleH}
              scale-x={frameScaleD}
            >
              <mesh geometry={nodes.Cube045.geometry}>
                <meshStandardMaterial
                  {...metalTexture}
                  roughness={3}
                  metalness={0}
                  color={getColor()}
                />
              </mesh>
              <mesh
                geometry={nodes.Cube045_1.geometry}
                material={getMaterial()}
              />
            </group> */}
          </group>

          <group name="wedgeRight">
            {/* <group
              position={[
                -0.647 * frameScaleD,
                1.555 * frameScaleH,
                1.173 * frameSidePositionScaleW,
              ]}
              scale-x={frameScaleD}
              scale-y={frameScaleH}
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
            </group> */}
            {wedgeRod}
            {slideDoorRod}
            <mesh
              geometry={nodes.spie_R_alu_Right.geometry}
              position={[
                -0.03 * frameScaleD,
                1.535 * frameScaleH,
                1.173 * frameSidePositionScaleW,
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
              geometry={nodes.spie_R_alu_Left.geometry}
              position={[
                -1.27 * frameScaleD,
                1.524 * frameScaleH,
                1.173 * frameSidePositionScaleW,
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
              geometry={nodes.spie_R_alu_Bottom.geometry}
              position={[
                -0.647 * frameScaleD,
                1.449 * frameScaleH,
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
        </group>
      )}
    </>
  );
}
