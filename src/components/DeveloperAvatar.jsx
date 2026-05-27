import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import { useRef, useMemo } from 'react'

function OrbitRing({ radius, speed, color, tiltX, tiltZ }) {
  const ref = useRef()
  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.z = clock.getElapsedTime() * speed
  })
  return (
    <group ref={ref} rotation={[tiltX, 0, tiltZ]}>
      <mesh>
        <torusGeometry args={[radius, 0.013, 2, 90]} />
        <meshBasicMaterial color={color} transparent opacity={0.45} />
      </mesh>
    </group>
  )
}

function Sparks() {
  const count = 80
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi   = Math.acos(2 * Math.random() - 1)
      const r     = 1.8 + Math.random() * 2.2
      arr[i * 3]     = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [])

  const ref = useRef()
  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.y = clock.getElapsedTime() * 0.08
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#00d4ff" transparent opacity={0.65} sizeAttenuation />
    </points>
  )
}

function CoreSphere() {
  const outerRef = useRef()
  useFrame(({ clock }) => {
    if (outerRef.current) {
      outerRef.current.rotation.y = clock.getElapsedTime() * 0.18
      outerRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.14) * 0.08
    }
  })
  return (
    <Float speed={1.4} floatIntensity={0.55} rotationIntensity={0.2}>
      {/* core */}
      <mesh>
        <sphereGeometry args={[1.15, 64, 64]} />
        <MeshDistortMaterial
          color="#0a0a20"
          distort={0.32}
          speed={1.8}
          roughness={0.25}
          metalness={0.85}
        />
      </mesh>
      {/* wireframe shell */}
      <mesh ref={outerRef}>
        <sphereGeometry args={[1.18, 22, 22]} />
        <meshBasicMaterial color="#00d4ff" wireframe transparent opacity={0.07} />
      </mesh>
      {/* glow halo */}
      <mesh>
        <sphereGeometry args={[1.35, 16, 16]} />
        <meshBasicMaterial color="#00d4ff" transparent opacity={0.025} side={2} />
      </mesh>
    </Float>
  )
}

export default function DeveloperAvatar() {
  return (
    <div className="canvas-container">
      <Canvas camera={{ position: [0, 0, 5.2], fov: 48 }}>
        <ambientLight intensity={0.15} />
        <pointLight position={[4,  4,  4]} intensity={2.2} color="#00d4ff" />
        <pointLight position={[-4,-4, -4]} intensity={1.0} color="#8b5cf6" />
        <pointLight position={[0,  4,  0]} intensity={0.4} color="#ffffff" />

        <CoreSphere />
        <OrbitRing radius={1.85} speed={ 0.42} color="#00d4ff" tiltX={Math.PI / 4} tiltZ={0} />
        <OrbitRing radius={2.25} speed={-0.30} color="#8b5cf6" tiltX={Math.PI / 6} tiltZ={0.2} />
        <OrbitRing radius={2.65} speed={ 0.18} color="#fbbf24" tiltX={Math.PI / 3} tiltZ={0.1} />
        <Sparks />
      </Canvas>
    </div>
  )
}
