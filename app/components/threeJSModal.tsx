import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const ThreeJSModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Close modal handler
  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (!isModalOpen || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    camera.position.set(0, 2, 7);

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7.5);
    scene.add(directionalLight);

    // Add OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.zoomSpeed = 0.5;
    controls.target.set(0, 1, 0);

    // Load GLTF model
    const loader = new GLTFLoader();
    loader.load(`/images/render/sci-fiTHREE.glb`, (gltf) => {
      const model = gltf.scene;
      model.scale.set(2, 2, 2);
      scene.add(model);
    });

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      renderer.dispose();
      scene.clear();
    };
  }, [isModalOpen]);

  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-75 z-50" onClick={closeModal}>
          <div className="relative m-4 max-w-full max-h-full w-[90%] h-[90%]" onClick={(e) => e.stopPropagation()}>
            <button
              title="close"
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-2xl bg-black w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-800"
            >
              &times;
            </button>
            <canvas ref={canvasRef} className="rounded-lg w-full h-full" />
          </div>
        </div>
      )}
    </>
  );
};

export default ThreeJSModal;
