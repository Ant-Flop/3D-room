import React from "react"
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import {Divider, Paper} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Slider from "@material-ui/core/Slider";
import {useDispatch, useSelector} from "react-redux";
import {updateSceneData} from "../redux/reducers/SceneDataReducer";

const listItemStyle = {
    display: 'flex',
    flexDirection: 'row',
    padding: 0
}


export const ToolBar = () => {
    const dispatch = useDispatch();
    const sceneData = useSelector(state => state.sceneData)
    const createBox = () => {
        let id = sceneData.models.length > 0 ? sceneData.models[sceneData.models.length - 1].id + 1 : 0;
        let scale = [1, 1, 1];
        let position = [Math.random() * 5, Math.random() * 5, Math.random() * 5];
        let color = "#" + Math.floor(Math.random() * 16777215).toString(16);
        dispatch(updateSceneData({
                id, scale, position, color
            }
        ))


    }

    return (
        <Paper style={{width: 300, height: 600, background: "#cbc2c2"}}>
            <Box>
                <List>
                    <ListItem style={{background: "#cfc2c2"}}>
                        <Button style={{color: "#5858b5"}} onClick={createBox}>Create Box</Button>
                    </ListItem>
                    <Divider/>
                    <ListItem style={listItemStyle}>
                        <ListItem style={{width: 70}}>width</ListItem>
                        <ListItem><Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto"/></ListItem>
                        <ListItem><input style={{width: 100}}/></ListItem>
                    </ListItem>
                    <ListItem style={listItemStyle}>
                        <ListItem style={{width: 70}}>height</ListItem>
                        <ListItem><Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto"/></ListItem>
                        <ListItem><input style={{width: 100}}/></ListItem>
                    </ListItem>
                    <ListItem style={listItemStyle}>
                        <ListItem style={{width: 70}}>depth</ListItem>
                        <ListItem><Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto"/></ListItem>
                        <ListItem><input style={{width: 100}}/></ListItem>
                    </ListItem>
                </List>
            </Box>
        </Paper>
    )
}