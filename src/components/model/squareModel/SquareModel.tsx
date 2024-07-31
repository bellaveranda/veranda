import { useCustomization } from '@/context/Customization';
import { Material, Mesh, Texture } from 'three';
import FrameSquare from './FrameSquare';
import ConstructionTypeSquare from './ContructionTypeSquare';
import AwningSquare from './AwningSquare';
import WedgeLeft from '../WedgeLeft';
import AwningLeft from '../AwningLeft';
import WedgeRight from '../WedgeRight';
import AwningRight from '../AwningRight';
import FixedGlassWallLeft from '../FixedGlassWallLeft';
import FixedGlassWallRight from '../FixedGlassWallRight';
import FixedGlassWallFront from '../FixedGlassWallFront';
import SlidingDoorLeft from '../SlidingDoorLeft';
import SlidingDoorRight from '../SlidingDoorRight';
import SlidingDoorFront from '../SlidingDoorFront';
import AwningFront from '../AwningFront';
import AluminiumWallLeft from '../AluminiumWallLeft';
import AluminiumWallRight from '../AluminiumWallRight';
import PolyWallLeft from '../PolyWallLeft';
import PolyWallRight from '../PolyWallRight';
import AwningFrontLeft from '../AwningFrontLeft';
import AwningFrontRight from '../AwningFrontRight';
import FixedGlassWallFrontLeft from '../FixedGlassWallFrontLeft';
import FixedGlassWallFrontRight from '../FixedGlassWallFrontRight';
import SlidingDoorFrontLeft from '../SlidingDoorFrontLeft';
import SlidingDoorFrontRight from '../SlidingDoorFrontRight';

interface SquareModelProps {
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
  fabricTexture: {
    map?: Texture;
    aoMap?: Texture;
    metalnessMap?: Texture;
    normalMap?: Texture;
    roughnessMap?: Texture;
    displacementMap?: Texture;
  };
}

export default function SquareModel({
  nodes,
  materials,
  metalTexture,
  fabricTexture,
}: SquareModelProps) {
  const {
    model,
    freeStanding,
    ledSet,
    width,
    minHeight,
    height,
    minDepth,
    depth,
  } = useCustomization();

  let glassScale = width / 239;
  if (width > 400) {
    glassScale = width / 236.5;
  }
  const frameScaleH = height / minHeight;
  const frameScaleD = depth / minDepth;

  return (
    <>
      {model === 'square' && (
        <group name="square" position={[freeStanding ? -0.5 : 0, 0, 0]}>
          <FrameSquare nodes={nodes} metalTexture={metalTexture} />

          <mesh
            geometry={nodes.square_roof_glass_opal.geometry}
            material={materials.opal}
            position={[-0.686 * frameScaleD, 1.633 * frameScaleH, 0]}
            scale-z={glassScale - 0.1}
            scale-x={frameScaleD + 0.07}
          />

          <ConstructionTypeSquare nodes={nodes} metalTexture={metalTexture} />

          <AwningSquare
            nodes={nodes}
            metalTexture={metalTexture}
            fabricTexture={fabricTexture}
          />

          <WedgeLeft
            nodes={nodes}
            materials={materials}
            metalTexture={metalTexture}
          />

          <WedgeRight
            nodes={nodes}
            materials={materials}
            metalTexture={metalTexture}
          />

          <AwningLeft
            nodes={nodes}
            metalTexture={metalTexture}
            fabricTexture={fabricTexture}
          />

          <AwningRight
            nodes={nodes}
            metalTexture={metalTexture}
            fabricTexture={fabricTexture}
          />

          <AwningFront
            nodes={nodes}
            metalTexture={metalTexture}
            fabricTexture={fabricTexture}
          />

          <AwningFrontLeft
            nodes={nodes}
            metalTexture={metalTexture}
            fabricTexture={fabricTexture}
          />

          <AwningFrontRight
            nodes={nodes}
            metalTexture={metalTexture}
            fabricTexture={fabricTexture}
          />

          <FixedGlassWallLeft
            nodes={nodes}
            materials={materials}
            metalTexture={metalTexture}
          />

          <FixedGlassWallRight
            nodes={nodes}
            materials={materials}
            metalTexture={metalTexture}
          />

          <FixedGlassWallFront
            nodes={nodes}
            materials={materials}
            metalTexture={metalTexture}
          />

          <FixedGlassWallFrontLeft
            nodes={nodes}
            materials={materials}
            metalTexture={metalTexture}
          />

          <FixedGlassWallFrontRight
            nodes={nodes}
            materials={materials}
            metalTexture={metalTexture}
          />

          <SlidingDoorLeft
            nodes={nodes}
            materials={materials}
            metalTexture={metalTexture}
          />

          <SlidingDoorRight
            nodes={nodes}
            materials={materials}
            metalTexture={metalTexture}
          />

          <SlidingDoorFront
            nodes={nodes}
            materials={materials}
            metalTexture={metalTexture}
          />

          <SlidingDoorFrontLeft
            nodes={nodes}
            materials={materials}
            metalTexture={metalTexture}
          />

          <SlidingDoorFrontRight
            nodes={nodes}
            materials={materials}
            metalTexture={metalTexture}
          />

          <AluminiumWallLeft
            nodes={nodes}
            materials={materials}
            metalTexture={metalTexture}
          />

          <AluminiumWallRight
            nodes={nodes}
            materials={materials}
            metalTexture={metalTexture}
          />

          <PolyWallLeft
            nodes={nodes}
            materials={materials}
            metalTexture={metalTexture}
          />

          <PolyWallRight
            nodes={nodes}
            materials={materials}
            metalTexture={metalTexture}
          />

          {ledSet && (
            <mesh
              rotation-z={0.07}
              name="lighting"
              geometry={nodes.light.geometry}
              material={materials.light}
              position={[-0.675, 1.535, -0.028]}
              scale={0.071}
            />
          )}
        </group>
      )}
    </>
  );
}
