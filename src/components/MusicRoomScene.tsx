'use client';

import { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';
import * as THREE from 'three';

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function CameraRig() {
  useFrame((state) => {
    state.camera.position.x = lerp(state.camera.position.x, state.mouse.x * 0.7, 0.035);
    state.camera.position.y = lerp(state.camera.position.y, 1.6 + state.mouse.y * 0.35, 0.035);
    state.camera.lookAt(0, 1.4, 0);
  });
  return null;
}

function Room() {
  return (
    <>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[16, 12]} />
        <meshStandardMaterial color="#080605" roughness={0.85} metalness={0.18} />
      </mesh>

      {/* Back wall base */}
      <mesh position={[0, 2.5, -5]}>
        <planeGeometry args={[16, 5]} />
        <meshStandardMaterial color="#0a0807" roughness={1} />
      </mesh>

      {/* Back wall wood panels — alternating dark tones for depth */}
      {Array.from({ length: 9 }, (_, i) => (
        <mesh key={i} position={[-5.6 + i * 1.4, 2.5, -4.96]}>
          <planeGeometry args={[1.3, 5]} />
          <meshStandardMaterial color={i % 2 === 0 ? '#0d0b09' : '#100e0b'} roughness={0.92} />
        </mesh>
      ))}

      {/* Thin panel separators */}
      {Array.from({ length: 8 }, (_, i) => (
        <mesh key={i} position={[-4.9 + i * 1.4, 2.5, -4.94]}>
          <planeGeometry args={[0.04, 5]} />
          <meshStandardMaterial color="#060504" roughness={1} />
        </mesh>
      ))}

      {/* Left wall */}
      <mesh rotation={[0, Math.PI / 2, 0]} position={[-8, 2.5, -1]}>
        <planeGeometry args={[12, 5]} />
        <meshStandardMaterial color="#0d0b09" roughness={1} />
      </mesh>

      {/* Right wall */}
      <mesh rotation={[0, -Math.PI / 2, 0]} position={[8, 2.5, -1]}>
        <planeGeometry args={[12, 5]} />
        <meshStandardMaterial color="#0d0b09" roughness={1} />
      </mesh>

      {/* Ceiling */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 5, -1]}>
        <planeGeometry args={[16, 12]} />
        <meshStandardMaterial color="#070605" roughness={1} />
      </mesh>

      {/* Ceiling structural beams */}
      {[-3.5, -1, 1, 3.5].map((x, i) => (
        <mesh key={i} position={[x, 4.82, -1]}>
          <boxGeometry args={[0.1, 0.38, 12]} />
          <meshStandardMaterial color="#0e0c0a" roughness={0.9} />
        </mesh>
      ))}

      {/* Floor baseboard */}
      <mesh position={[0, 0.05, -4.97]}>
        <boxGeometry args={[16, 0.1, 0.06]} />
        <meshStandardMaterial color="#161412" />
      </mesh>
    </>
  );
}

function VinylDisc({ position, tilt = 0 }: { position: [number, number, number]; tilt?: number }) {
  return (
    <group position={position} rotation={[Math.PI / 2, tilt, 0]}>
      <mesh>
        <cylinderGeometry args={[0.27, 0.27, 0.016, 32]} />
        <meshStandardMaterial color="#181818" roughness={0.12} metalness={0.55} />
      </mesh>
      <mesh position={[0, 0.009, 0]}>
        <cylinderGeometry args={[0.24, 0.24, 0.001, 32]} />
        <meshStandardMaterial color="#202020" roughness={0.15} />
      </mesh>
      <mesh position={[0, 0.01, 0]}>
        <cylinderGeometry args={[0.075, 0.075, 0.002, 16]} />
        <meshStandardMaterial color="#f97316" emissive="#f97316" emissiveIntensity={0.8} />
      </mesh>
      <mesh position={[0, 0.012, 0]}>
        <cylinderGeometry args={[0.016, 0.016, 0.025, 8]} />
        <meshStandardMaterial color="#080808" />
      </mesh>
    </group>
  );
}

function VinylSection({ onClick }: { onClick: () => void }) {
  const [hovered, setHovered] = useState(false);
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (!groupRef.current) return;
    groupRef.current.position.z = lerp(groupRef.current.position.z, hovered ? -1.2 : -1.8, 0.07);
  });

  return (
    <group
      ref={groupRef}
      position={[-3, 0, -1.8]}
      onClick={onClick}
      onPointerOver={() => { setHovered(true); document.body.style.cursor = 'pointer'; }}
      onPointerOut={() => { setHovered(false); document.body.style.cursor = 'default'; }}
    >
      {/* Shelf back */}
      <mesh position={[0, 1.2, -0.12]}>
        <boxGeometry args={[1.75, 2.45, 0.05]} />
        <meshStandardMaterial color="#120a04" roughness={0.9} />
      </mesh>
      {/* Side panels */}
      {([-0.87, 0.87] as number[]).map((x, i) => (
        <mesh key={i} position={[x, 1.2, 0.05]}>
          <boxGeometry args={[0.04, 2.45, 0.38]} />
          <meshStandardMaterial color={hovered ? '#251508' : '#1a0f07'} roughness={0.85} />
        </mesh>
      ))}
      {/* Shelves */}
      {([0.04, 0.78, 1.52, 2.26] as number[]).map((y, i) => (
        <mesh key={i} position={[0, y, 0.05]}>
          <boxGeometry args={[1.7, 0.05, 0.36]} />
          <meshStandardMaterial color="#2d1f0e" roughness={0.8} />
        </mesh>
      ))}

      <VinylDisc position={[-0.44, 0.33, 0.22]} tilt={0.05} />
      <VinylDisc position={[-0.06, 0.33, 0.22]} tilt={-0.04} />
      <VinylDisc position={[0.32, 0.33, 0.22]} tilt={0.07} />
      <VinylDisc position={[-0.40, 1.07, 0.22]} tilt={-0.06} />
      <VinylDisc position={[0.02, 1.07, 0.22]} />
      <VinylDisc position={[0.44, 1.07, 0.22]} tilt={0.05} />
      <VinylDisc position={[-0.38, 1.81, 0.22]} tilt={0.04} />
      <VinylDisc position={[0.16, 1.81, 0.22]} tilt={-0.05} />

      <pointLight
        position={[0, 2.85, 0.5]}
        color="#f97316"
        intensity={hovered ? 6 : 3}
        distance={3.5}
        decay={2}
      />
      {hovered && (
        <pointLight position={[0, 0.15, 0.6]} color="#f97316" intensity={1} distance={2} decay={2} />
      )}

      <Text
        position={[0, 2.82, 0.22]}
        fontSize={0.13}
        color={hovered ? '#ff7020' : '#444444'}
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.12}
      >
        GUITARISTES
      </Text>
      <Text
        position={[0, 2.62, 0.22]}
        fontSize={0.088}
        color={hovered ? '#fb923c' : '#333333'}
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.05}
      >
        Explorer leurs gammes →
      </Text>
    </group>
  );
}

function StudioSection({ onClick }: { onClick: () => void }) {
  const [hovered, setHovered] = useState(false);
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (!groupRef.current) return;
    groupRef.current.position.z = lerp(groupRef.current.position.z, hovered ? -1.2 : -1.8, 0.07);
  });

  const deskColor = hovered ? '#1c1c1c' : '#141414';

  return (
    <group
      ref={groupRef}
      position={[3, 0, -1.8]}
      onClick={onClick}
      onPointerOver={() => { setHovered(true); document.body.style.cursor = 'pointer'; }}
      onPointerOut={() => { setHovered(false); document.body.style.cursor = 'default'; }}
    >
      {/* Desk surface */}
      <mesh position={[0, 0.58, 0]}>
        <boxGeometry args={[1.9, 0.06, 1.0]} />
        <meshStandardMaterial color={deskColor} roughness={0.5} metalness={0.2} />
      </mesh>
      {/* Legs */}
      {([-0.88, 0.88] as number[]).flatMap((x, xi) =>
        ([-0.38, 0.38] as number[]).map((z, zi) => (
          <mesh key={`${xi}-${zi}`} position={[x, 0.28, z]}>
            <boxGeometry args={[0.055, 0.58, 0.055]} />
            <meshStandardMaterial color="#0e0e0e" metalness={0.4} />
          </mesh>
        ))
      )}
      {/* Mixing console */}
      <mesh position={[0, 0.65, -0.1]} rotation={[-0.22, 0, 0]}>
        <boxGeometry args={[1.62, 0.04, 0.72]} />
        <meshStandardMaterial color="#1c1c1c" roughness={0.4} metalness={0.3} />
      </mesh>
      {/* Fader channels */}
      {([-0.56, -0.22, 0.12, 0.46] as number[]).map((x, i) => (
        <group key={i} position={[x, 0.705, -0.1]} rotation={[-0.22, 0, 0]}>
          <mesh>
            <boxGeometry args={[0.028, 0.012, 0.22]} />
            <meshStandardMaterial color="#2a2a2a" />
          </mesh>
          <mesh position={[0, 0.012, -0.04 + i * 0.015]}>
            <boxGeometry args={[0.062, 0.026, 0.042]} />
            <meshStandardMaterial
              color={hovered ? '#f97316' : '#666666'}
              emissive={hovered ? '#f97316' : '#000000'}
              emissiveIntensity={hovered ? 0.5 : 0}
            />
          </mesh>
        </group>
      ))}
      {/* Knobs */}
      {([-0.52, -0.12, 0.28] as number[]).map((x, i) => (
        <mesh key={i} position={[x, 0.745, -0.33]} rotation={[-0.22, 0, 0]}>
          <cylinderGeometry args={[0.03, 0.025, 0.042, 12]} />
          <meshStandardMaterial
            color={hovered && i === 1 ? '#f97316' : '#444444'}
            emissive={hovered && i === 1 ? '#f97316' : '#000000'}
            emissiveIntensity={hovered && i === 1 ? 0.6 : 0}
          />
        </mesh>
      ))}
      {/* LED indicators */}
      {[0, 1, 2, 3, 4].map((i) => (
        <mesh key={i} position={[-0.55 + i * 0.28, 0.695, 0.22]} rotation={[-0.22, 0, 0]}>
          <sphereGeometry args={[0.012, 8, 8]} />
          <meshStandardMaterial
            color={i === 2 ? '#f97316' : '#22ff66'}
            emissive={i === 2 ? '#f97316' : '#22ff66'}
            emissiveIntensity={hovered ? 2.5 : 1}
          />
        </mesh>
      ))}
      {/* Guitar amp */}
      <mesh position={[0.78, 0.38, 0.18]}>
        <boxGeometry args={[0.56, 0.74, 0.5]} />
        <meshStandardMaterial color="#111111" roughness={0.95} />
      </mesh>
      <mesh position={[0.78, 0.38, 0.463]}>
        <circleGeometry args={[0.18, 24]} />
        <meshStandardMaterial color="#1f1f1f" roughness={0.85} />
      </mesh>
      {/* VU meter screen */}
      <mesh position={[-0.62, 0.775, -0.08]} rotation={[-0.22, 0, 0]}>
        <planeGeometry args={[0.3, 0.16]} />
        <meshStandardMaterial
          color={hovered ? '#1a0a00' : '#0a0a0a'}
          emissive={hovered ? '#f97316' : '#000000'}
          emissiveIntensity={hovered ? 0.4 : 0}
        />
      </mesh>

      <pointLight
        position={[0, 2.65, 0.4]}
        color="#f97316"
        intensity={hovered ? 6 : 2.5}
        distance={3.2}
        decay={2}
      />
      {hovered && (
        <pointLight position={[0, 0.15, 0.6]} color="#f97316" intensity={0.8} distance={2} decay={2} />
      )}

      <Text
        position={[0, 2.72, 0.1]}
        fontSize={0.13}
        color={hovered ? '#ff7020' : '#444444'}
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.12}
      >
        SCALE STUDIO
      </Text>
      <Text
        position={[0, 2.52, 0.1]}
        fontSize={0.088}
        color={hovered ? '#fb923c' : '#333333'}
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.05}
      >
        Explorer les gammes →
      </Text>
    </group>
  );
}

function NeonSign() {
  const lightRef = useRef<THREE.PointLight>(null);

  useFrame(({ clock }) => {
    if (!lightRef.current) return;
    const t = clock.getElapsedTime();
    // Subtle neon flicker
    const flicker = 0.92 + Math.sin(t * 8.1) * 0.04 + Math.sin(t * 3.3) * 0.04;
    lightRef.current.intensity = 4 * flicker;
  });

  return (
    <group position={[0, 3.9, -4.7]}>
      <Text
        fontSize={0.52}
        color="#ff6010"
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.18}
      >
        SCALE FINDER
      </Text>
      <pointLight ref={lightRef} color="#ff5500" intensity={4} distance={7} decay={2} />
    </group>
  );
}

function WallSconce({ position, rotY = 0 }: { position: [number, number, number]; rotY?: number }) {
  return (
    <group position={position} rotation={[0, rotY, 0]}>
      <mesh>
        <boxGeometry args={[0.08, 0.14, 0.06]} />
        <meshStandardMaterial color="#1a1818" roughness={0.3} metalness={0.7} />
      </mesh>
      <mesh position={[0, -0.12, 0.05]}>
        <coneGeometry args={[0.09, 0.16, 8, 1, true]} />
        <meshStandardMaterial color="#f97316" emissive="#f97316" emissiveIntensity={1.2} side={THREE.DoubleSide} />
      </mesh>
      <pointLight color="#f97316" intensity={2} distance={4} decay={2} />
    </group>
  );
}

function CeilingLamp({ x = 0 }: { x?: number }) {
  return (
    <group position={[x, 4.68, -2.2]}>
      <mesh position={[0, 0.2, 0]}>
        <cylinderGeometry args={[0.007, 0.007, 0.4, 4]} />
        <meshStandardMaterial color="#222222" />
      </mesh>
      <mesh rotation={[Math.PI, 0, 0]}>
        <coneGeometry args={[0.26, 0.28, 12, 1, true]} />
        <meshStandardMaterial color="#1a1108" side={THREE.DoubleSide} roughness={0.4} metalness={0.3} />
      </mesh>
      <pointLight color="#f97316" intensity={1.4} distance={5.5} decay={1.8} />
    </group>
  );
}

function AtmosphericParticles() {
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const count = 140;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 1] = Math.random() * 4.5;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8 - 1;
    }
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geo;
  }, []);

  const ref = useRef<THREE.Points>(null);
  useFrame(() => {
    if (!ref.current) return;
    const pos = ref.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < pos.length / 3; i++) {
      pos[i * 3 + 1] += 0.00038;
      if (pos[i * 3 + 1] > 4.6) pos[i * 3 + 1] = 0;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial size={0.014} color="#f97316" opacity={0.28} transparent sizeAttenuation />
    </points>
  );
}

interface Props {
  onGuitaristClick: () => void;
  onStudioClick: () => void;
}

export function MusicRoomScene({ onGuitaristClick, onStudioClick }: Props) {
  return (
    <Canvas
      camera={{ position: [0, 1.6, 5.5], fov: 65 }}
      style={{ background: '#060504' }}
      dpr={[1, 1.5]}
    >
      <fog attach="fog" args={['#060504', 9, 20]} />

      <ambientLight intensity={0.05} color="#f5ddc8" />

      <CameraRig />
      <Room />
      <NeonSign />
      <CeilingLamp x={-3.5} />
      <CeilingLamp x={0} />
      <CeilingLamp x={3.5} />
      <WallSconce position={[-7.8, 2.6, -2]} rotY={Math.PI / 2} />
      <WallSconce position={[7.8, 2.6, -2]} rotY={-Math.PI / 2} />
      <WallSconce position={[-7.8, 2.6, 0]} rotY={Math.PI / 2} />
      <WallSconce position={[7.8, 2.6, 0]} rotY={-Math.PI / 2} />
      <VinylSection onClick={onGuitaristClick} />
      <StudioSection onClick={onStudioClick} />
      <AtmosphericParticles />

      <EffectComposer>
        <Bloom
          mipmapBlur
          intensity={1.4}
          luminanceThreshold={0.15}
          luminanceSmoothing={0.9}
          radius={0.75}
        />
        <Vignette eskil={false} offset={0.22} darkness={0.92} />
      </EffectComposer>
    </Canvas>
  );
}
