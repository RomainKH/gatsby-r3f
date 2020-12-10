import React, {Suspense} from "react";
import { Canvas } from "react-three-fiber";
import { EditableManager, editable as e } from 'react-three-editable';
import { PadObj, ErrorBoundary } from "../index";
import { PerspectiveCamera } from '@react-three/drei';

import editableState from './editableState.json';

const ThreeScene = () => {
    const EditableCamera = e(PerspectiveCamera, 'perspectiveCamera');
    const EditablePad = e(PadObj, 'group')
    return (
        <Canvas
            shadowMap
            camera={{ position: [0, 0, 20] }}
            style={{ height: "100%", width: "100%" }}
        >
            <EditableManager state={editableState} />
            <EditableCamera makeDefault uniqueName="Camera" />
            <ambientLight intensity={0.5} />
            <e.spotLight
                position={[10, 10, 10]}
                angle={0.15}
                penumbra={1}
                uniqueName="Spotlight"
            />
            <e.pointLight uniqueName="PointLight" />
            <ErrorBoundary fallback={null}>
                <Suspense fallback={null}>
                    <EditablePad uniqueName="PadObject" />
                </Suspense>
            </ErrorBoundary>
        </Canvas>
    )
}

export {ThreeScene}