import React from "react"
import {Canvas} from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import {Paper} from "@material-ui/core";

export const Scene = () => {
    const Box = () => {
        return (
            <mesh scale={[1, 1, 1]} position={[1, 0, 1]} onClick={(e) => console.log()}>
                <boxBufferGeometry attach="geometry"/>
                <meshLambertMaterial attach="material" color="red" />
            </mesh>
        )
    }


    return (
        <Paper style={{height: 600, width: 600}}>
        <Canvas camera={{ position: [10, 10, 10] }}>
            <OrbitControls />
            <ambientLight intensity={0.5}/>
            <spotLight position={[10, 15, 10]} angle={0.3}/>
            <Box />
            <gridHelper />
        </Canvas>
        </Paper>
    )
}