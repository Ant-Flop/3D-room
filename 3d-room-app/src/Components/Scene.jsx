import React from "react"
import {Canvas} from "react-three-fiber";
import {OrbitControls} from "@react-three/drei";
import {Paper} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {selectSceneData, unselectSceneData} from "../redux/reducers/SceneDataReducer";


export const Scene = () => {
    const dispatch = useDispatch();
    const sceneData = useSelector(state => state.sceneData);
    const selectModel = (box) => {
        let id = box.id;
        dispatch(selectSceneData({
            id
        }))
    }
    const Box = (box) => {
        return (
            <mesh key={box.id + '-mesh-box'} scale={box.scale} position={box.position}
                  onClick={selectModel.bind(this, box)}>
                <boxBufferGeometry attach="geometry"/>
                <meshLambertMaterial attach="material" color={box.color}/>
            </mesh>
        )
    }
    let boxesCreator = sceneData.models.map(model => <Box id={model.id}
                                                          key={"model-" + model.id}
                                                          scale={model.scale}
                                                          position={model.position}
                                                          color={model.color}/>)

    const unselectModel = () => {
        dispatch(unselectSceneData())
    }
    return (
        <Paper style={{height: 600, width: 600}} onClick={unselectModel}>
            <Canvas camera={{position: [10, 10, 10]}}>
                <OrbitControls/>
                <ambientLight intensity={0.5}/>
                <spotLight position={[10, 15, 10]} angle={0.3}/>
                {boxesCreator}
                <gridHelper/>
            </Canvas>
        </Paper>
    )
}