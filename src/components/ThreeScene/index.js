import React, { useEffect, useState, Suspense} from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { PerspectiveCamera, Stars, Html } from '@react-three/drei'
import lerp from 'lerp'
import loadable from "@loadable/component"
import { EffectComposer, Bloom, Noise } from '@react-three/postprocessing'

const PadObj = loadable(() => import("../Pad"), {
    fallback: <Html>Loading...</Html>,
})

const Zoom = () => {
    // This one makes the camera move in and out
    useFrame(({ camera }) => {
        camera.zoom = lerp(camera.zoom, 1.35, 0.05)
        camera.updateProjectionMatrix()
    })
    return null
}
  

const ThreeScene = () => {
    const [load, setload] = useState(false)
    useEffect(() => {
        setload(true)
    }, [])
    return (
        <Canvas
            shadowMap
            style={{ height: '100vh', width: '100vw', position: 'absolute', top: '0', left: '0', zIndex: '-1', background: '#181827' }}
        >
            <Stars fade/>
            <PerspectiveCamera makeDefault position={[1, 1, 0]} rotation={[-0.2, 0.3, 0]}/>
            <ambientLight intensity={0.1} />
            <spotLight
                position={[0, 10, 10]}
                angle={0.15}
                penumbra={1}
            />
            <Suspense fallback={<Html>Loading...</Html>}>
                <PadObj position={[0, 0, -2.5]} rotation={[0, -0.2, 0]} />
            </Suspense>
            {load && <Zoom />}
            <EffectComposer>
                <Bloom luminanceThreshold={0    } luminanceSmoothing={0.1} height={300} />
                <Noise opacity={0.01} />
            </EffectComposer>
        </Canvas>
        
    )
}

export {ThreeScene}