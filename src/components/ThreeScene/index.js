import React, {useEffect, useState} from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { A11yAnnouncer } from '@react-three/a11y'
import { EditableManager, editable as e } from 'react-three-editable';
import { ErrorBoundary } from "../";
import { EffectComposer, Noise, Bloom } from '@react-three/postprocessing'
import { PerspectiveCamera, Stars } from '@react-three/drei';
import lerp from 'lerp';
import loadable from '@loadable/component'

import editableState from './editableState.json';

const PadObj = loadable(() => import('../'))

const Zoom = () => {
    // This one makes the camera move in and out
    useFrame(({ camera }) => {
        camera.zoom = lerp(camera.zoom, 1.35, 0.05)
        camera.updateProjectionMatrix()
    })
    return null
}
  

const ThreeScene = () => {
    const EditableCamera = e(PerspectiveCamera, 'perspectiveCamera');
    const EditablePad = e(PadObj, 'group')
    const [load, setload] = useState(false)
    useEffect(() => {
        setload(true)
    }, [])
    return (
        <>
            <Canvas
                shadowMap
                style={{ height: '100vh', width: '100vw', position: 'absolute', top: '0', left: '0', zIndex: '-1', background: '#181827' }}
            >
                <Stars fade/>
                <EditableManager state={editableState} />
                <EditableCamera makeDefault uniqueName="Camera" />
                <ambientLight intensity={0.5} />
                <e.spotLight
                    position={[10, 10, 10]}
                    angle={0.15}
                    penumbra={1}
                    uniqueName="Spotlight"
                />
                <ErrorBoundary fallback={null}>
                    <EditablePad uniqueName="PadObject" />
                </ErrorBoundary>
                <EffectComposer>
                    <Noise opacity={0.2} />
                    <Bloom luminanceThreshold={0.1} intensity={0.1} luminanceSmoothing={0.5} height={400} />
                </EffectComposer>
                {load && <Zoom />}
            </Canvas>
            <A11yAnnouncer />
        </>
        
    )
}

export {ThreeScene}