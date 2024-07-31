import { Canvas } from '@react-three/fiber';
import Interface from './components/interface/Interface';

import { Environment, OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import LoadingPage from './components/LoadingPage';
import { Canopy_update } from './components/model/Canopy_update';

function App() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <main className="w-full h-[50svh] sm:h-svh fixed top-0 left-0 right-0 z-50 scrollbar-none">
        <Canvas
          flat
          camera={{ fov: 65, near: 0.1, far: 100, position: [-1, -5, 0] }}
          className="touch-none"
        >
          <color attach="background" args={['#191920']} />
          <OrbitControls
            makeDefault
            minPolarAngle={0}
            maxPolarAngle={(4 * Math.PI) / 9}
            minAzimuthAngle={(-8 * Math.PI) / 9}
            maxAzimuthAngle={(8 * Math.PI) / 9 + (8 * Math.PI) / 9}
            minDistance={1}
            maxDistance={6.5}
          />
          <ambientLight />
          <Canopy_update />
          <Environment environmentIntensity={0.3} preset="studio" blur={4} />
        </Canvas>
      </main>

      <Interface />
    </Suspense>
  );
}

export default App;
