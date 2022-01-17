import './App.css';
import React from "react";
import {Scene} from "./Components/Scene";
import {ToolBar} from "./Components/ToolBar";
import Paper from "@material-ui/core/Paper";
import {Box} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

function App() {
    return (
        <Box>
            <Grid container justifyContent="center">
                <Grid>
                    <Scene/>
                </Grid>
                <Grid>
                    <ToolBar/>
                </Grid>
            </Grid>
        </Box>
    );
}

export default App;
