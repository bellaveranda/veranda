import { useCustomization } from '@/context/Customization';
import { Material, Mesh, Texture } from 'three';
import FrameSlatted from './FrameSlatted';
import ConstructionTypeSlatted from './ConstructionTypeSlatted';
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

interface SlattedModelProps {
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

export default function SlattedModel({
  nodes,
  materials,
  metalTexture,
  fabricTexture,
}: SlattedModelProps) {
  const { model, freeStanding, ledSet } = useCustomization();

  return (
    <>
      {model === 'slattedRoof' && (
        <group name="slatted" position={[freeStanding ? -0.5 : 0, 0, 0]}>
          <FrameSlatted nodes={nodes} metalTexture={metalTexture} />

          <ConstructionTypeSlatted nodes={nodes} metalTexture={metalTexture} />

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
              name="lighting"
              geometry={nodes.light.geometry}
              material={materials.light}
              position={[-1.043, 1.534, -0.824]}
              scale={0.071}
            />
          )}
        </group>
      )}
    </>
  );
}
