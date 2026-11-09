import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { Eye, Layers, RotateCcw, ChevronDown, ChevronUp, Sparkles, Box } from 'lucide-react';

type MaterialModel = 'pink_tower' | 'cylinder_block' | 'geometric_solids';

export const ThreeDMaterialViewer: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [activeModel, setActiveModel] = useState<MaterialModel>('pink_tower');
  const [disassembled, setDisassembled] = useState<boolean>(false);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [cameraPreset, setCameraPreset] = useState<'perspective' | 'top' | 'front'>('perspective');

  // Mutable refs to decouple React re-renders from the 60fps / on-demand Three.js render loop
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const rootGroupRef = useRef<THREE.Group | null>(null);
  const currentDisassembleProgressRef = useRef<number>(0);
  const targetDisassembleProgressRef = useRef<number>(0);
  const requestRenderRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    targetDisassembleProgressRef.current = disassembled ? 1 : 0;
    requestRenderRef.current?.();
  }, [disassembled]);

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;
    const width = container.clientWidth || 800;
    const height = container.clientHeight || 500;

    // 1. Software-WebGL Guard & Color Pipeline
    const isSoftwareGl = (() => {
      const gl = document.createElement('canvas').getContext('webgl2');
      if (!gl) return true;
      const ext = gl.getExtension('WEBGL_debug_renderer_info');
      const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
      const gpu = String(gl.getParameter(param));
      gl.getExtension('WEBGL_lose_context')?.loseContext();
      return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
    })();

    const renderer = new THREE.WebGLRenderer({
      antialias: !isSoftwareGl,
      powerPreference: 'high-performance',
      alpha: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = !isSoftwareGl;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    container.appendChild(renderer.domElement);

    // Scene setup with dark obsidian luxury background
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x070908);
    scene.fog = new THREE.Fog(0x070908, 12, 28);
    sceneRef.current = scene;

    // Studio Environment map via RoomEnvironment + PMREMGenerator
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    const roomEnv = new RoomEnvironment();
    scene.environment = pmremGenerator.fromScene(roomEnv, 0.04).texture;
    pmremGenerator.dispose();

    // Camera setup
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(4.8, 3.8, 5.8);
    cameraRef.current = camera;

    // OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = !isSoftwareGl;
    controls.dampingFactor = 0.05;
    controls.minDistance = 2;
    controls.maxDistance = 14;
    controls.maxPolarAngle = Math.PI / 2 - 0.05; // Don't go below ground
    controls.target.set(0, 1.0, 0);
    controlsRef.current = controls;

    // Lighting rig: Studio Key, Cool Fill, Backlight
    const keyLight = new THREE.DirectionalLight(0xFFF6E8, 2.8);
    keyLight.position.set(5, 8, 4);
    keyLight.castShadow = !isSoftwareGl;
    if (keyLight.shadow) {
      keyLight.shadow.mapSize.width = 1024;
      keyLight.shadow.mapSize.height = 1024;
      keyLight.shadow.camera.near = 0.5;
      keyLight.shadow.camera.far = 20;
      keyLight.shadow.bias = -0.0005;
      keyLight.shadow.normalBias = 0.02;
      const d = 4;
      keyLight.shadow.camera.left = -d;
      keyLight.shadow.camera.right = d;
      keyLight.shadow.camera.top = d;
      keyLight.shadow.camera.bottom = -d;
    }
    scene.add(keyLight);

    const hemiLight = new THREE.HemisphereLight(0xF4EFE6, 0x23483D, 1.2);
    hemiLight.position.set(0, 10, 0);
    scene.add(hemiLight);

    const rimLight = new THREE.DirectionalLight(0xA8B7A0, 1.0);
    rimLight.position.set(-5, 4, -4);
    scene.add(rimLight);

    // Procedural Floor with Contact Grounding & Soft Shadow Plane
    const floorGeo = new THREE.PlaneGeometry(30, 30);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x070908,
      roughness: 0.95,
      metalness: 0.05,
    });
    const floorMesh = new THREE.Mesh(floorGeo, floorMat);
    floorMesh.rotation.x = -Math.PI / 2;
    floorMesh.position.y = -0.01;
    floorMesh.receiveShadow = !isSoftwareGl;
    scene.add(floorMesh);

    // Procedural Contact Shadow Disc
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 256;
    shadowCanvas.height = 256;
    const sCtx = shadowCanvas.getContext('2d');
    if (sCtx) {
      const grad = sCtx.createRadialGradient(128, 128, 20, 128, 128, 120);
      grad.addColorStop(0, 'rgba(0, 0, 0, 0.85)');
      grad.addColorStop(0.5, 'rgba(0, 0, 0, 0.35)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      sCtx.fillStyle = grad;
      sCtx.fillRect(0, 0, 256, 256);
    }
    const shadowTex = new THREE.CanvasTexture(shadowCanvas);
    shadowTex.colorSpace = THREE.SRGBColorSpace;
    const shadowGeo = new THREE.PlaneGeometry(4.5, 4.5);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTex,
      transparent: true,
      depthWrite: false,
      opacity: 0.6,
    });
    const shadowPlane = new THREE.Mesh(shadowGeo, shadowMat);
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = 0.005;
    scene.add(shadowPlane);

    // Root model group
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);
    rootGroupRef.current = rootGroup;

    // Helper: Procedural Wood Texture
    function createProceduralWoodTexture(baseColorHex: string, ringColorHex: string) {
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 512;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = baseColorHex;
        ctx.fillRect(0, 0, 512, 512);
        // Wood grain rings
        ctx.strokeStyle = ringColorHex;
        ctx.lineWidth = 1.5;
        for (let i = 0; i < 60; i++) {
          ctx.beginPath();
          const y = (i * 9) + (Math.sin(i * 0.5) * 3);
          ctx.moveTo(0, y);
          ctx.bezierCurveTo(150, y + 6, 350, y - 4, 512, y + 2);
          ctx.stroke();
        }
      }
      const tex = new THREE.CanvasTexture(canvas);
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.wrapS = THREE.RepeatWrapping;
      tex.wrapT = THREE.RepeatWrapping;
      return tex;
    }

    const beechwoodTex = createProceduralWoodTexture('#D6B894', 'rgba(145, 105, 68, 0.25)');
    const walnutTex = createProceduralWoodTexture('#5A3D28', 'rgba(42, 27, 16, 0.35)');

    // PBR Materials
    const pinkTowerMat = new THREE.MeshStandardMaterial({
      color: 0xE8A29A, // Classic Montessori delicate pink
      roughness: 0.35,
      metalness: 0.05,
    });

    const beechwoodMat = new THREE.MeshStandardMaterial({
      color: 0xE5C79E,
      map: beechwoodTex,
      roughness: 0.45,
      metalness: 0.02,
    });

    const walnutMat = new THREE.MeshStandardMaterial({
      color: 0x4A3324,
      map: walnutTex,
      roughness: 0.5,
      metalness: 0.05,
    });

    const brassMat = new THREE.MeshStandardMaterial({
      color: 0xD4AF37,
      roughness: 0.22,
      metalness: 0.88,
    });

    const feltMat = new THREE.MeshStandardMaterial({
      color: 0x23483D, // Deep forest green felt
      roughness: 0.9,
      metalness: 0.0,
    });

    // Sub-assembly builder functions
    function buildPinkTower() {
      rootGroup.clear();
      const towerGroup = new THREE.Group();

      // Part 1: Presentation Walnut Tray Base (bevel and border)
      const trayBaseGeo = new THREE.BoxGeometry(2.4, 0.08, 2.4);
      const trayBase = new THREE.Mesh(trayBaseGeo, walnutMat);
      trayBase.position.y = 0.04;
      trayBase.receiveShadow = !isSoftwareGl;
      trayBase.castShadow = !isSoftwareGl;
      towerGroup.add(trayBase);

      // Part 2: Inner Felt Inset
      const feltGeo = new THREE.PlaneGeometry(2.2, 2.2);
      const felt = new THREE.Mesh(feltGeo, feltMat);
      felt.rotation.x = -Math.PI / 2;
      felt.position.y = 0.082;
      felt.receiveShadow = !isSoftwareGl;
      towerGroup.add(felt);

      // Part 3: Brass Plaque
      const plaqueGeo = new THREE.BoxGeometry(0.7, 0.02, 0.2);
      const plaque = new THREE.Mesh(plaqueGeo, brassMat);
      plaque.position.set(0, 0.085, 1.0);
      plaque.castShadow = !isSoftwareGl;
      towerGroup.add(plaque);

      // Parts 4–13: The 10 Graduated Montessori Cubes (Sizes from 0.12m up to 1.0m)
      const count = 10;
      let curY = 0.085;
      for (let i = 0; i < count; i++) {
        // Largest at base (size ~1.1 down to ~0.15)
        const size = 1.1 - (i * 0.098);
        const cubeGeo = new THREE.BoxGeometry(size, size, size);
        const cube = new THREE.Mesh(cubeGeo, pinkTowerMat);
        cube.castShadow = !isSoftwareGl;
        cube.receiveShadow = !isSoftwareGl;

        const defaultY = curY + size / 2;
        cube.position.set(0, defaultY, 0);

        // Store custom data for animated disassembly (stair offset)
        cube.userData = {
          defaultPos: new THREE.Vector3(0, defaultY, 0),
          stairPos: new THREE.Vector3(
            (i - count / 2) * 0.28,
            0.085 + size / 2,
            Math.sin(i * 0.4) * 0.15
          ),
        };

        curY += size;
        towerGroup.add(cube);
      }

      rootGroup.add(towerGroup);
      controls.target.set(0, 1.2, 0);
    }

    function buildCylinderBlock() {
      rootGroup.clear();
      const blockGroup = new THREE.Group();

      // Part 1: Main sculpted beechwood block
      const blockGeo = new THREE.BoxGeometry(3.6, 0.65, 0.95);
      const blockMesh = new THREE.Mesh(blockGeo, beechwoodMat);
      blockMesh.position.y = 0.325;
      blockMesh.castShadow = !isSoftwareGl;
      blockMesh.receiveShadow = !isSoftwareGl;
      blockGroup.add(blockMesh);

      // Parts 2 & 3: Side Brass Carrying Handles
      for (const side of [-1.82, 1.82]) {
        const handleGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.4, 16);
        const handle = new THREE.Mesh(handleGeo, brassMat);
        handle.rotation.z = Math.PI / 2;
        handle.position.set(side, 0.32, 0);
        handle.castShadow = !isSoftwareGl;
        blockGroup.add(handle);
      }

      // Parts 4–13: 5 Precision turned beechwood cylinders with knurled brass knobs
      const numCylinders = 5;
      for (let i = 0; i < numCylinders; i++) {
        const t = i / (numCylinders - 1);
        const radius = 0.30 - t * 0.16; // graded diameter
        const height = 0.55 - t * 0.25; // graded height
        const posX = -1.35 + (i * 0.68);

        const cylGroup = new THREE.Group();

        // Wooden cylinder body
        const cylGeo = new THREE.CylinderGeometry(radius, radius, height, 32);
        const cylMesh = new THREE.Mesh(cylGeo, beechwoodMat);
        cylMesh.position.y = height / 2;
        cylMesh.castShadow = !isSoftwareGl;
        cylMesh.receiveShadow = !isSoftwareGl;
        cylGroup.add(cylMesh);

        // Turned Brass Knob
        const knobBaseGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.12, 16);
        const knobBase = new THREE.Mesh(knobBaseGeo, brassMat);
        knobBase.position.y = height + 0.06;
        knobBase.castShadow = !isSoftwareGl;
        cylGroup.add(knobBase);

        const knobHeadGeo = new THREE.SphereGeometry(0.07, 16, 16);
        const knobHead = new THREE.Mesh(knobHeadGeo, brassMat);
        knobHead.position.y = height + 0.14;
        knobHead.castShadow = !isSoftwareGl;
        cylGroup.add(knobHead);

        const defaultY = 0.325 - (0.65 / 2) + 0.02;
        cylGroup.position.set(posX, defaultY, 0);

        cylGroup.userData = {
          defaultPos: new THREE.Vector3(posX, defaultY, 0),
          stairPos: new THREE.Vector3(posX, defaultY + 0.9, 0.6), // lifted up & forward for inspection
        };

        blockGroup.add(cylGroup);
      }

      rootGroup.add(blockGroup);
      controls.target.set(0, 0.5, 0);
    }

    function buildGeometricSolids() {
      rootGroup.clear();
      const geomGroup = new THREE.Group();

      // Part 1: Presentation Tray
      const trayGeo = new THREE.BoxGeometry(3.6, 0.08, 1.6);
      const tray = new THREE.Mesh(trayGeo, walnutMat);
      tray.position.y = 0.04;
      tray.receiveShadow = !isSoftwareGl;
      tray.castShadow = !isSoftwareGl;
      geomGroup.add(tray);

      // Part 2: Inset Green Felt
      const feltGeo = new THREE.PlaneGeometry(3.4, 1.4);
      const felt = new THREE.Mesh(feltGeo, feltMat);
      felt.rotation.x = -Math.PI / 2;
      felt.position.y = 0.082;
      felt.receiveShadow = !isSoftwareGl;
      geomGroup.add(felt);

      // Montessori Blue Lacquer Material
      const blueSolidMat = new THREE.MeshStandardMaterial({
        color: 0x2A5885, // Classic Montessori deep azure blue
        roughness: 0.28,
        metalness: 0.08,
      });

      // Solid 1: Sphere on Ring Stand
      const standGeo = new THREE.TorusGeometry(0.24, 0.04, 16, 32);
      const stand1 = new THREE.Mesh(standGeo, walnutMat);
      stand1.rotation.x = Math.PI / 2;
      stand1.position.set(-1.2, 0.12, 0);
      stand1.castShadow = !isSoftwareGl;
      geomGroup.add(stand1);

      const sphereGeo = new THREE.SphereGeometry(0.38, 32, 32);
      const sphere = new THREE.Mesh(sphereGeo, blueSolidMat);
      sphere.position.set(-1.2, 0.48, 0);
      sphere.castShadow = !isSoftwareGl;
      sphere.receiveShadow = !isSoftwareGl;
      sphere.userData = {
        defaultPos: new THREE.Vector3(-1.2, 0.48, 0),
        stairPos: new THREE.Vector3(-1.2, 0.95, 0.3),
      };
      geomGroup.add(sphere);

      // Solid 2: Cube
      const cubeGeo = new THREE.BoxGeometry(0.65, 0.65, 0.65);
      const cube = new THREE.Mesh(cubeGeo, blueSolidMat);
      cube.position.set(-0.4, 0.41, 0);
      cube.castShadow = !isSoftwareGl;
      cube.receiveShadow = !isSoftwareGl;
      cube.userData = {
        defaultPos: new THREE.Vector3(-0.4, 0.41, 0),
        stairPos: new THREE.Vector3(-0.4, 0.85, 0.3),
      };
      geomGroup.add(cube);

      // Solid 3: Cone
      const coneGeo = new THREE.ConeGeometry(0.38, 0.75, 32);
      const cone = new THREE.Mesh(coneGeo, blueSolidMat);
      cone.position.set(0.4, 0.46, 0);
      cone.castShadow = !isSoftwareGl;
      cone.receiveShadow = !isSoftwareGl;
      cone.userData = {
        defaultPos: new THREE.Vector3(0.4, 0.46, 0),
        stairPos: new THREE.Vector3(0.4, 0.9, 0.3),
      };
      geomGroup.add(cone);

      // Solid 4: Cylinder
      const cylGeo = new THREE.CylinderGeometry(0.32, 0.32, 0.72, 32);
      const cyl = new THREE.Mesh(cylGeo, blueSolidMat);
      cyl.position.set(1.2, 0.44, 0);
      cyl.castShadow = !isSoftwareGl;
      cyl.receiveShadow = !isSoftwareGl;
      cyl.userData = {
        defaultPos: new THREE.Vector3(1.2, 0.44, 0),
        stairPos: new THREE.Vector3(1.2, 0.88, 0.3),
      };
      geomGroup.add(cyl);

      rootGroup.add(geomGroup);
      controls.target.set(0, 0.5, 0);
    }

    // Load initial model
    buildPinkTower();

    // On-demand rendering with transition animation
    let frameId = 0;
    let isRunning = true;
    let isTransitioning = false;

    const render = () => {
      renderer.render(scene, camera);
    };

    const animateTransition = () => {
      if (!isRunning) return;

      const cur = currentDisassembleProgressRef.current;
      const target = targetDisassembleProgressRef.current;
      const step = (target - cur) * 0.18;
      currentDisassembleProgressRef.current += step;

      const diff = Math.abs(target - currentDisassembleProgressRef.current);
      const progress = currentDisassembleProgressRef.current;

      rootGroup.traverse((obj) => {
        if (obj.userData && obj.userData.defaultPos && obj.userData.stairPos) {
          obj.position.lerpVectors(obj.userData.defaultPos, obj.userData.stairPos, progress);
        }
      });

      controls.update();
      render();

      if (diff > 0.002) {
        frameId = requestAnimationFrame(animateTransition);
      } else {
        currentDisassembleProgressRef.current = target;
        rootGroup.traverse((obj) => {
          if (obj.userData && obj.userData.defaultPos && obj.userData.stairPos) {
            obj.position.lerpVectors(obj.userData.defaultPos, obj.userData.stairPos, target);
          }
        });
        render();
        isTransitioning = false;
      }
    };

    function startTransition() {
      if (!isTransitioning) {
        isTransitioning = true;
        frameId = requestAnimationFrame(animateTransition);
      }
    }

    // Initial render
    render();

    controls.addEventListener('change', () => {
      if (!isTransitioning) render();
    });

    requestRenderRef.current = () => {
      startTransition();
    };

    // Resize handler
    const handleResize = () => {
      if (!mountRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      render();
    };
    window.addEventListener('resize', handleResize);

    // Store switch method on ref for external calling
    (mountRef.current as any).switchModel = (model: MaterialModel) => {
      if (model === 'pink_tower') buildPinkTower();
      else if (model === 'cylinder_block') buildCylinderBlock();
      else if (model === 'geometric_solids') buildGeometricSolids();
      render();
    };

    (mountRef.current as any).setCameraPreset = (preset: 'perspective' | 'top' | 'front') => {
      if (preset === 'perspective') {
        camera.position.set(4.8, 3.8, 5.8);
      } else if (preset === 'top') {
        camera.position.set(0.01, 8.5, 0.01);
      } else if (preset === 'front') {
        camera.position.set(0, 2.0, 7.5);
      }
      camera.lookAt(controls.target);
      render();
    };

    return () => {
      isRunning = false;
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  const handleModelChange = (model: MaterialModel) => {
    setActiveModel(model);
    setDisassembled(false);
    if (mountRef.current && (mountRef.current as any).switchModel) {
      (mountRef.current as any).switchModel(model);
    }
  };

  const handleCameraChange = (preset: 'perspective' | 'top' | 'front') => {
    setCameraPreset(preset);
    if (mountRef.current && (mountRef.current as any).setCameraPreset) {
      (mountRef.current as any).setCameraPreset(preset);
    }
  };

  return (
    <section id="materials-3d" className="py-12 bg-white dark:bg-[#060c24] rounded-3xl border border-slate-200/90 dark:border-white/10 shadow-sm relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-widest text-[#f95716] font-bold mb-2">
              SENSORIAL APPARATUS ATELIER • INTERACTIVE 3D
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0d176d] dark:text-white font-bold tracking-tight leading-tight">
              The tactile world of authentic Montessori apparatus.
            </h2>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-light">
              In authentic Montessori classrooms at Queensbury, children do not learn from screens or rote lectures.
              They handle solid wood, discover dimensions with their fingertips, and develop concentration through tactile feedback.
              Rotate, inspect, and explore our sensorial materials in interactive 3D.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0 text-xs text-slate-500 dark:text-slate-400 font-mono">
            <span>Interactive Viewport</span>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">/</span>
            <span className="text-[#f95716] font-bold">Drag to rotate · Scroll to zoom</span>
          </div>
        </div>

        {/* 3D Viewport Container with Collapsible Bottom Dock */}
        <div className="relative w-full h-[520px] sm:h-[600px] bg-gradient-to-b from-[#060c24] to-[#020617] rounded-2xl border border-slate-300 dark:border-white/10 overflow-hidden shadow-xl">
          {/* WebGL Canvas Mount Container */}
          <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

          {/* Top-Left Spec Badge */}
          <div className="absolute top-4 left-4 p-4 bg-white/95 dark:bg-[#060c24]/95 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-xl shadow-xl pointer-events-none max-w-sm">
            <div className="flex items-center gap-2">
              <Box className="w-4 h-4 text-[#f95716]" />
              <span className="font-serif text-sm font-bold text-[#0d176d] dark:text-white">
                {activeModel === 'pink_tower' && 'The Montessori Pink Tower (10 Cubes)'}
                {activeModel === 'cylinder_block' && 'Cylinder Block No. 1 (Knobbed Cylinders)'}
                {activeModel === 'geometric_solids' && 'Montessori Geometric Solids & Tray'}
              </span>
            </div>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-1 font-sans leading-relaxed">
              {activeModel === 'pink_tower' && 'Refines visual discrimination of 3D size and volume from 1cm³ to 1000cm³.'}
              {activeModel === 'cylinder_block' && 'Prepares the three-finger pincer grip essential for handwriting and motor control.'}
              {activeModel === 'geometric_solids' && 'Sensorial discovery of sphere, cube, cone, and cylinder through stereognostic touch.'}
            </p>
          </div>

          {/* Unified Bottom Control Dock */}
          <div
            className={`absolute bottom-4 left-1/2 -translate-x-1/2 w-[95%] max-w-2xl transition-transform duration-300 z-10 ${
              isCollapsed ? 'translate-y-[calc(100%-32px)]' : 'translate-y-0'
            }`}
          >
            {/* Collapse / Expand Toggle Button */}
            <div className="flex justify-center mb-1">
              <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="px-3.5 py-1 bg-white dark:bg-[#060c24] text-[#0d176d] dark:text-white border border-slate-200 dark:border-white/10 text-xs font-bold rounded-t-lg hover:bg-slate-50 dark:hover:bg-[#0b1540] transition-colors shadow-lg flex items-center gap-1.5 focus-visible:outline-2 cursor-pointer"
                aria-label={isCollapsed ? 'Show 3D Apparatus Controls' : 'Hide 3D Apparatus Controls'}
              >
                {isCollapsed ? (
                  <>
                    <ChevronUp className="w-3.5 h-3.5 text-[#f95716]" />
                    <span>Show 3D Controls</span>
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-3.5 h-3.5 text-[#f95716]" />
                    <span>Hide Controls (Full View)</span>
                  </>
                )}
              </button>
            </div>

            {/* Main Dock Surface */}
            <div className="bg-white/95 dark:bg-[#060c24]/95 backdrop-blur-xl text-slate-800 dark:text-slate-100 p-3 sm:p-4 rounded-2xl border border-slate-200 dark:border-white/10 shadow-2xl flex flex-wrap items-center justify-between gap-4">
              {/* Material Switch Buttons */}
              <div className="flex items-center gap-1 bg-slate-100 dark:bg-[#020617] p-1 rounded-xl">
                <button
                  onClick={() => handleModelChange('pink_tower')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                    activeModel === 'pink_tower'
                      ? 'bg-[#0d176d] text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  Pink Tower
                </button>
                <button
                  onClick={() => handleModelChange('cylinder_block')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                    activeModel === 'cylinder_block'
                      ? 'bg-[#0d176d] text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  Cylinder Block
                </button>
                <button
                  onClick={() => handleModelChange('geometric_solids')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                    activeModel === 'geometric_solids'
                      ? 'bg-[#0d176d] text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Geometric Solids
                </button>
              </div>

              {/* Action Toggles: Explode / Lift & Camera Presets */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setDisassembled(!disassembled)}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg border flex items-center gap-1.5 transition-all cursor-pointer ${
                    disassembled
                      ? 'bg-[#f95716] text-white border-[#f95716]'
                      : 'border-slate-300 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>{disassembled ? 'Assemble Material' : 'Disassemble & Inspect'}</span>
                </button>

                <div className="hidden sm:flex items-center gap-1 border-l border-slate-200 pl-3">
                  <button
                    onClick={() => handleCameraChange('perspective')}
                    title="Perspective Angle"
                    className={`p-1.5 rounded-md text-xs font-mono font-bold cursor-pointer ${
                      cameraPreset === 'perspective' ? 'text-[#f95716] bg-slate-100' : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    3D
                  </button>
                  <button
                    onClick={() => handleCameraChange('front')}
                    title="Front Eye Level"
                    className={`p-1.5 rounded-md text-xs font-mono font-bold cursor-pointer ${
                      cameraPreset === 'front' ? 'text-[#f95716] bg-slate-100' : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    Front
                  </button>
                  <button
                    onClick={() => handleCameraChange('top')}
                    title="Top-Down Plan"
                    className={`p-1.5 rounded-md text-xs font-mono font-bold cursor-pointer ${
                      cameraPreset === 'top' ? 'text-[#f95716] bg-slate-100' : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    Top
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
