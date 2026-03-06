import { Canvas } from '@react-three/fiber'
import { Center, useGLTF } from '@react-three/drei'

const modelVariants = {
    home: {
        scale: 1,
        rotation: [0, 0.9, 0.2],
    },
    about: {
        scale: 1,
        rotation: [1, 0, 0],
    },
}

function Model({ variant = 'home' }) {
    const { scene } = useGLTF('/img/Laptop.glb')
    const activeVariant = modelVariants[variant] ?? modelVariants.home

    return (
        <Center>
            <primitive object={scene} scale={activeVariant.scale} rotation={activeVariant.rotation} />
        </Center>
    )
}

export default function Scene3D({ variant = 'home' }) {
    return (
        <Canvas camera={{ position: [0, 0, 6], fov: 60, near: 0.01, far: 1000 }}>
            <ambientLight intensity={1} />
            <directionalLight position={[3, 5, 8]} intensity={1.1} />
            <pointLight position={[-3, -2, 2]} intensity={0.35} color="#60a5fa" />

            <Model variant={variant} />
        </Canvas>
    )
}

useGLTF.preload('/img/Laptop.glb')
