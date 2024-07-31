import { useCustomization } from '@/context/Customization';
import { Material, Mesh } from 'three';

interface Props {
  nodes: {
    [key: string]: Mesh;
  };
  materials: {
    [key: string]: Material;
  };
}

export default function CoveringMaterialStandrad({ nodes, materials }: Props) {
  const { coveringMaterial, width, minHeight, height, minDepth, depth } =
    useCustomization();
  let glassScale = width / 239;
  if (width > 400) {
    glassScale = width / 236.5;
  }
  const frameScaleH = height / minHeight;
  const frameScaleD = depth / minDepth;

  return (
    <>
      {coveringMaterial === 'glassClear' ? (
        <mesh
          geometry={nodes.standard_roof_creal_polycarbonate.geometry}
          material={materials.opal}
          position={[-0.696 * frameScaleD, 1.671 * frameScaleH, -0.0]}
          scale-z={glassScale}
          scale-x={frameScaleD + 0.07}
        />
      ) : coveringMaterial === 'glassOpal' ? (
        <mesh
          geometry={nodes.standard_roof_creal_polycarbonate.geometry}
          material={materials.glass}
          position={[-0.696 * frameScaleD, 1.671 * frameScaleH, -0.007]}
          scale-z={glassScale}
          scale-x={frameScaleD + 0.07}
        />
      ) : coveringMaterial === 'Poly_Clear' ? (
        <mesh
          geometry={nodes.standard_roof_creal_polycarbonate.geometry}
          material={materials['Polycarbonate opal']}
          position={[-0.696 * frameScaleD, 1.671 * frameScaleH, -0.007]}
          scale-z={glassScale}
          scale-x={frameScaleD + 0.07}
        />
      ) : (
        <mesh
          geometry={nodes.standard_roof_creal_polycarbonate.geometry}
          material={materials.Polycarbonate}
          position={[-0.696 * frameScaleD, 1.671 * frameScaleH, -0.007]}
          scale-z={glassScale}
          scale-x={frameScaleD + 0.07}
        />
      )}
    </>
  );
}
