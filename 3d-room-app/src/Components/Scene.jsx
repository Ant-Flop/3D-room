import React from "react"
import {Canvas} from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import {Paper} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import { useRef } from 'react';
import {updateSceneData} from "../redux/reducers/SceneDataReducer";


export const Scene = () => {
    const sceneData = useSelector(state => state.sceneData);
    const callback = (box) => {
        //box.color = "#ebe599";
        console.log(box.color)
    }
    const Box = (box) => {
        return (
            <mesh key={box.id + '-mesh-box'} scale={box.scale} position={box.position} onClick={callback.bind(true, box)}>
                <boxBufferGeometry attach="geometry"/>
                <meshLambertMaterial attach="material" color={box.color} />
            </mesh>
        )
    }






    let boxesCreator = sceneData.map(model => <Box id={model.id}  scale={model.scale} position={model.position} color={model.color} /> )
    return (
        <Paper style={{height: 600, width: 600}}>
        <Canvas camera={{ position: [10, 10, 10] }}>
            <OrbitControls />
            <ambientLight intensity={0.5}/>
            <spotLight position={[10, 15, 10]} angle={0.3}/>
            {boxesCreator}
            <gridHelper />
        </Canvas>
        </Paper>
    )
}