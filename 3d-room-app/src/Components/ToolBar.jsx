import React, {useState, useRef} from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import {Divider, Paper} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Slider from '@mui/material/Slider';
import {useDispatch, useSelector} from "react-redux";
import {createSceneData, editSceneData} from "../redux/reducers/SceneDataReducer";


const listItemStyle = {
    display: 'flex',
    flexDirection: 'row',
    padding: 0
}


export const ToolBar = () => {
    const dispatch = useDispatch();
    const sceneData = useSelector(state => state.sceneData);
    const createBox = () => {
        let id = sceneData.models.length > 0 ? sceneData.models[sceneData.models.length - 1].id + 1 : 0;
        let scale = [1, 1, 1];
        let position = [Math.random() * 10 - 5, Math.random() * 5, Math.random() * 10 - 5];
        let color = "#" + Math.floor(Math.random() * 16777215).toString(16);
        dispatch(createSceneData({
                id, scale, position, color
            }
        ))
    }
    const configurationBox = (data) => {
        let parameterName = data.target.name.split('-')[0];
        let parameterValue = data.target.value;
        dispatch(editSceneData({name: parameterName, value: parameterValue}))
    }
    const getDisabled = () => {
        if (sceneData.selected.id === null) return {disabled: true}
    }
    return (
        <Paper key={"configuration-panel-paper"} style={{width: 300, height: 600, background: "#cbc2c2"}}>
            <Box>
                <List key={"configuration-panel-list"}>
                    <ListItem key={"create-button"} style={{background: "#cfc2c2"}}>
                        <Button style={{color: "#5858b5"}} onClick={createBox}>Create Box</Button>
                    </ListItem>
                    <Divider/>
                    <div key={"configuration-width"} style={listItemStyle}>
                        <ListItem key={"configuration-width-style"} style={{width: 70}}>width</ListItem>
                        <ListItem key={"configuration-width-slider"}><Slider value={sceneData.selected.width}
                                                                             aria-label="Default"
                                                                             valueLabelDisplay="auto"
                                                                             name={"width-slider"}
                                                                             max={300}
                                                                             {...getDisabled()}
                                                                             onChange={configurationBox.bind(this)}
                        /></ListItem>
                        <ListItem key={"configuration-width-input"}><input style={{width: 100}}
                                                                           type={"number"}
                                                                           value={sceneData.selected.width}
                                                                           name={"width-input"}
                                                                           max={300}
                                                                           onChange={configurationBox.bind(this)}
                                                                           {...getDisabled()}
                        /></ListItem>
                    </div>
                    <div key={"configuration-height"} style={listItemStyle}>
                        <ListItem key={"configuration-height-style"} style={{width: 70}}>height</ListItem>
                        <ListItem key={"configuration-height-slider"}><Slider value={sceneData.selected.height}
                                                                              aria-label="Default"
                                                                              valueLabelDisplay="auto"
                                                                              name={"height-slider"}
                                                                              max={300}
                                                                              {...getDisabled()}
                                                                              onChange={configurationBox.bind(this)}
                        /></ListItem>
                        <ListItem key={"configuration-height-input"}><input style={{width: 100}}
                                                                            type={"number"}
                                                                            value={sceneData.selected.height}
                                                                            name={"height-input"}
                                                                            max={300}
                                                                            onChange={configurationBox.bind(this)}
                                                                            {...getDisabled()}
                        /></ListItem>
                    </div>
                    <div key={"configuration-depth"} style={listItemStyle}>
                        <ListItem key={"configuration-depth-style"} style={{width: 70}}>depth</ListItem>
                        <ListItem key={"configuration-depth-slider"}><Slider value={sceneData.selected.depth}
                                                                             aria-label="Default"
                                                                             valueLabelDisplay="auto"
                                                                             name={"depth-slider"}
                                                                             max={300}
                                                                             {...getDisabled()}
                                                                             onChange={configurationBox.bind(this)}
                        /></ListItem>
                        <ListItem key={"configuration-depth-input"}><input style={{width: 100}}
                                                                           type={"number"}
                                                                           value={sceneData.selected.depth}
                                                                           name={"depth-input"}
                                                                           max={300}
                                                                           onChange={configurationBox.bind(this)}
                                                                           {...getDisabled()}
                        /></ListItem>
                    </div>
                </List>
            </Box>
        </Paper>
    )
}