import React from "react";
import { Canvas } from "react-three-fiber";
import { EditableManager, editable as e } from 'react-three-editable';
import { PadObj } from "../Pad";
import { PerspectiveCamera } from '@react-three/drei';

import editableState from './editableState.json';

const ThreeScene = () => {
    const EditableCamera = editable(PerspectiveCamera, 'perspectiveCamera');
    return (
        <Canvas
            concurrent
            shadowMap
            camera={{ position: [0, 0, 20] }}
            style={{ height: "100vh", width: "100vw" }}
        >
            <EditableManager state={editableState} />
            <EditableCamera uniqueName="Camera" />
            <ambientLight intensity={0.5} />
            <e.spotLight
                position={[10, 10, 10]}
                angle={0.15}
                penumbra={1}
                uniqueName="Spotlight"
            />
            <e.pointLight uniqueName="PointLight" />
            <Suspense fallback={null}>
                <PadObj/>
            </Suspense>
        </Canvas>
    )
}

export {ThreeScene}