import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function LoadingPage() {
  const loadingRef = useRef(null);

  useGSAP(() => {
    const animation = gsap
      .timeline({ repeat: -1 })
      .to(loadingRef.current, { rotation: 360, duration: 1, ease: 'linear' });
    return () => {
      animation.kill();
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div
        ref={loadingRef}
        className="w-16 h-16 border-4 border-myColor border-t-transparent rounded-full"
      ></div>
    </div>
  );
}
