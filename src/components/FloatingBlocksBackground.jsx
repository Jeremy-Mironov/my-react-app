import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

// ─── ADD MODELS HERE ────────────────────────────────────────────────────────
// Drop any .glb file into public/img/ then reference it below.
// Every INSTANCES entry picks a modelPath from this list.
//
// Each entry: modelPath, world position, uniform scale,
//             per-axis rotation speed, float amplitude/speed/phase
const INSTANCES = [
    { modelPath: 'src/assets/models/gaming_laptop.glb', position: [-7, 3.5, -1], scale: 0.70, rotSpeed: [0.003, 0.005, 0.002], floatAmp: 0.30, floatSpeed: 0.50, phase: 0.0 },
    { modelPath: 'src/assets/models/javascript.glb', position: [-7.5, -2.5, 0], scale: 2, rotSpeed: [0.004, 0.003, 0.005], floatAmp: 0.25, floatSpeed: 0.40, phase: 2.0 },
    { modelPath: 'src/assets/models/coffe_cup.glb', position: [0.5, 1.5, -4], scale: 1.00, rotSpeed: [0.002, 0.004, 0.001], floatAmp: 0.40, floatSpeed: 0.35, phase: 4.0 },
    { modelPath: 'src/assets/models/react_logo.glb', position: [6.0, 3.0, -2], scale: 0.60, rotSpeed: [0.005, 0.002, 0.004], floatAmp: 0.20, floatSpeed: 0.60, phase: 1.0 },
    { modelPath: 'src/assets/models/blender_logo.glb', position: [5.0, -3.0, 0], scale: 1.45, rotSpeed: [0.003, 0.006, 0.002], floatAmp: 1.35, floatSpeed: 0.45, phase: 6.0 },
]
// ─────────────────────────────────────────────────────────────────────────────

function FloatingModel({ modelPath, position, scale, rotSpeed, floatAmp, floatSpeed, phase }) {
    const groupRef = useRef()
    const { scene } = useGLTF(modelPath)
    const cloned = useMemo(() => scene.clone(true), [scene])

    useFrame(({ clock }) => {
        if (!groupRef.current) return
        const t = clock.getElapsedTime()
        groupRef.current.rotation.x += rotSpeed[0]
        groupRef.current.rotation.y += rotSpeed[1]
        groupRef.current.rotation.z += rotSpeed[2]
        groupRef.current.position.y = position[1] + Math.sin(t * floatSpeed + phase) * floatAmp
    })

    return (
        <group ref={groupRef} position={position} scale={scale}>
            <primitive object={cloned} />
        </group>
    )
}

export default function FloatingBlocksBackground() {
    return (
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} aria-hidden="true">
            <Canvas
                camera={{ position: [0, 0, 10], fov: 60, near: 0.1, far: 100 }}
                style={{ width: '100%', height: '100%' }}
                gl={{ alpha: true, antialias: true }}
            >
                <ambientLight intensity={0.45} />
                <directionalLight position={[5, 8, 5]} intensity={0.9} color="#93c5fd" />
                <pointLight position={[-5, -5, 3]} intensity={0.5} color="#a78bfa" />
                {INSTANCES.map((inst, i) => (
                    <FloatingModel key={i} {...inst} />
                ))}
            </Canvas>
        </div>
    )
}

// Preload every unique model referenced in INSTANCES
;[...new Set(INSTANCES.map((i) => i.modelPath))].forEach((path) => useGLTF.preload(path))
