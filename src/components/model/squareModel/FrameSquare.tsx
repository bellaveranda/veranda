import { useCustomization } from "@/context/Customization";
import { Mesh, Texture } from "three";

interface FrameProps {
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

export default function FrameSquare({ nodes, metalTexture }: FrameProps) {
  const { profileColor, width, minHeight, height, minDepth, depth } =
    useCustomization();

  const frameScaleW = width / 239;
  const frameScaleH = height / minHeight;
  const frameScaleD = depth / minDepth;

  let frameSidePositionScaleW = width / 239;
  if (width > 400) {
    frameSidePositionScaleW = width / 235.96;
  }

  let framePillerPositionScaleW = width / 239;
  if (width > 400) {
    framePillerPositionScaleW = width / 234;
  }

  // mid rod counts start-----------------------
  const widthData = {
    element:
      width <= 300
        ? 3
        : width <= 375
        ? 4
        : width <= 450
        ? 5
        : width <= 525
        ? 6
        : width <= 600
        ? 7
        : width <= 675
        ? 8
        : width <= 750
        ? 9
        : 10,
    divisionValue:
      width <= 300
        ? 2
        : width <= 375
        ? 2.45
        : width <= 450
        ? 2.95
        : width <= 525
        ? 3.45
        : width <= 600
        ? 3.95
        : width <= 675
        ? 4.45
        : width <= 750
        ? 4.95
        : 5.45,
  };

  const MidRod = [];
  let idx = 0;
  const placement = 1.19 / widthData.divisionValue;
  let leftRod = 0;
  let rightRod = 0;

  if (widthData.element % 2 === 0) {
    MidRod.push(
      <mesh
        key={idx}
        geometry={nodes.Top_Frame_Mid.geometry}
        position={[
          -0.697 * frameScaleD,
          1.618 * frameScaleH,
          -(placement / 2) * (width / 239),
        ]}
        rotation-z={-0.07}
        scale-x={frameScaleD + 0.07}
      >
        <meshStandardMaterial
          {...metalTexture}
          roughness={3}
          metalness={0}
          color={
            profileColor === "RAL7016"
              ? "#383E42"
              : profileColor === "RAL9001"
              ? "#FDF4E3"
              : "#0A0A0A"
          }
        />
      </mesh>
    );

    MidRod.push(
      <mesh
        key={idx + 1}
        geometry={nodes.Top_Frame_Mid.geometry}
        position={[
          -0.697 * frameScaleD,
          1.618 * frameScaleH,
          (placement / 2) * (width / 239),
        ]}
        rotation-z={-0.07}
        scale-x={frameScaleD + 0.07}
      >
        <meshStandardMaterial
          {...metalTexture}
          roughness={3}
          metalness={0}
          color={
            profileColor === "RAL7016"
              ? "#383E42"
              : profileColor === "RAL9001"
              ? "#FDF4E3"
              : "#0A0A0A"
          }
        />
      </mesh>
    );
    idx += 2;
    leftRod = 0 - placement / 2;
    rightRod = 0 + placement / 2;
  } else {
    MidRod.push(
      <mesh
        key={idx}
        geometry={nodes.Top_Frame_Mid.geometry}
        position={[
          -0.697 * frameScaleD,
          1.618 * frameScaleH,
          0 * (width / 239),
        ]}
        rotation-z={-0.07}
        scale-x={frameScaleD + 0.07}
      >
        <meshStandardMaterial
          {...metalTexture}
          roughness={3}
          metalness={0}
          color={
            profileColor === "RAL7016"
              ? "#383E42"
              : profileColor === "RAL9001"
              ? "#FDF4E3"
              : "#0A0A0A"
          }
        />
      </mesh>
    );
    idx += 1;
  }
  while (idx < widthData.element) {
    leftRod -= placement;
    rightRod += placement;

    MidRod.push(
      <mesh
        key={idx}
        geometry={nodes.Top_Frame_Mid.geometry}
        position={[
          -0.697 * frameScaleD,
          1.618 * frameScaleH,
          leftRod * (width / 239),
        ]}
        rotation-z={-0.07}
        scale-x={frameScaleD + 0.07}
      >
        <meshStandardMaterial
          {...metalTexture}
          roughness={3}
          metalness={0}
          color={
            profileColor === "RAL7016"
              ? "#383E42"
              : profileColor === "RAL9001"
              ? "#FDF4E3"
              : "#0A0A0A"
          }
        />
      </mesh>
    );

    if (idx + 1 < widthData.element) {
      // Ensure not to add extra element
      MidRod.push(
        <mesh
          key={idx + 1}
          geometry={nodes.Top_Frame_Mid.geometry}
          position={[
            -0.697 * frameScaleD,
            1.618 * frameScaleH,
            rightRod * (width / 239),
          ]}
          rotation-z={-0.07}
          scale-x={frameScaleD + 0.07}
        >
          <meshStandardMaterial
            {...metalTexture}
            roughness={3}
            metalness={0}
            color={
              profileColor === "RAL7016"
                ? "#383E42"
                : profileColor === "RAL9001"
                ? "#FDF4E3"
                : "#0A0A0A"
            }
          />
        </mesh>
      );
    }

    idx += 2;
  }
  // mid rod counts end--------------------------

  return (
    <>
      {/* <mesh
        geometry={nodes.square_frame_top_Mid.geometry}
        position={[-0.68 * frameScaleD, 1.585 * frameScaleH, -0.007]}
        scale-x={frameScaleD + 0.15}
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
      </mesh> */}
      {MidRod}

      <mesh
        geometry={nodes.square_frame_top_Front.geometry}
        position={[-1.342 * frameScaleD, 1.606 * frameScaleH, -0.007]}
        scale-z={frameScaleW - (width > 570 ? 0.03 : 0)}
      >
        <meshStandardMaterial
          {...metalTexture}
          roughness={3}
          metalness={0}
          color={
            profileColor === "RAL7016"
              ? "#383E42"
              : profileColor === "RAL9001"
              ? "#FDF4E3"
              : "#0A0A0A"
          }
        />
      </mesh>
      <mesh
        geometry={nodes.square_frame_top_Left.geometry}
        position={[
          -0.641 * frameScaleD,
          1.606 * frameScaleH,
          -1.146 * frameSidePositionScaleW,
        ]}
        scale-x={frameScaleD + 0.15}
      >
        <meshStandardMaterial
          {...metalTexture}
          roughness={3}
          metalness={0}
          color={
            profileColor === "RAL7016"
              ? "#383E42"
              : profileColor === "RAL9001"
              ? "#FDF4E3"
              : "#0A0A0A"
          }
        />
      </mesh>
      <mesh
        geometry={nodes.square_frame_top_Right.geometry}
        position={[
          -0.641 * frameScaleD,
          1.606 * frameScaleH,
          1.133 * frameSidePositionScaleW,
        ]}
        scale-x={frameScaleD + 0.15}
      >
        <meshStandardMaterial
          {...metalTexture}
          roughness={3}
          metalness={0}
          color={
            profileColor === "RAL7016"
              ? "#383E42"
              : profileColor === "RAL9001"
              ? "#FDF4E3"
              : "#0A0A0A"
          }
        />
      </mesh>
      <mesh
        geometry={nodes.square_frame_top_Back.geometry}
        position={[-0.061 * frameScaleD, 1.606 * frameScaleH, -0.007]}
        scale-z={frameScaleW + (width > 300 ? 0.16 : 0)}
      >
        <meshStandardMaterial
          {...metalTexture}
          roughness={3}
          metalness={0}
          color={
            profileColor === "RAL7016"
              ? "#383E42"
              : profileColor === "RAL9001"
              ? "#FDF4E3"
              : "#0A0A0A"
          }
        />
      </mesh>
      <mesh
        geometry={nodes.square_frame_front_Right.geometry}
        position={[
          -1.328 * frameScaleD,
          0.767 * frameScaleH + 0.008,
          1.132 * framePillerPositionScaleW,
        ]}
        scale-y={frameScaleH}
      >
        <meshStandardMaterial
          {...metalTexture}
          roughness={3}
          metalness={0}
          color={
            profileColor === "RAL7016"
              ? "#383E42"
              : profileColor === "RAL9001"
              ? "#FDF4E3"
              : "#0A0A0A"
          }
        />
      </mesh>
      {width > 607 && (
        <mesh
          geometry={nodes.square_frame_front_Right.geometry}
          position={[-1.337 * frameScaleD, 0.768 * frameScaleH + 0.008, 0]}
          scale-y={frameScaleH}
        >
          <meshStandardMaterial
            {...metalTexture}
            roughness={3}
            metalness={0}
            color={
              profileColor === "RAL7016"
                ? "#383E42"
                : profileColor === "RAL9001"
                ? "#FDF4E3"
                : "#0A0A0A"
            }
          />
        </mesh>
      )}
      <mesh
        geometry={nodes.square_frame_front_Left.geometry}
        position={[
          -1.328 * frameScaleD,
          0.767 * frameScaleH + 0.008,
          -1.145 * framePillerPositionScaleW,
        ]}
        scale-y={frameScaleH}
      >
        <meshStandardMaterial
          {...metalTexture}
          roughness={3}
          metalness={0}
          color={
            profileColor === "RAL7016"
              ? "#383E42"
              : profileColor === "RAL9001"
              ? "#FDF4E3"
              : "#0A0A0A"
          }
        />
      </mesh>
    </>
  );
}
