const CREATE_SCENE_DATA = "CREATE_SCENE_DATA";
const SELECT_SCENE_DATA = "SELECT_SCENE_DATA";
const UNSELECT_SCENE_DATA = "UNSELECT_SCENE_DATA";
const EDIT_SCENE_DATA = "EDIT_SCENE_DATA";


const defaultState = {
    models: [],
    selected: {
        id: null,
        previousColor: null,
        selectColor: "#ff463e",
        width: 0,
        height: 0,
        depth: 0
    }
}


export const sceneDataReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CREATE_SCENE_DATA:
            if (action.type === CREATE_SCENE_DATA) {
                state.models.push(action.payload);
            }
        case SELECT_SCENE_DATA:
            if (action.type === SELECT_SCENE_DATA) {
                for (let i = 0; i < state.models.length; i++) {
                    if (state.models[i].id === action.payload.id) {
                        for (let j = 0; j < state.models.length; j++) {
                            if (state.models[j].id === state.selected.id) {
                                state.models[j].color = state.selected.previousColor;
                                state.selected.previousColor = null;
                                state.selected.id = null;
                                break;
                            }
                        }
                        state.selected.previousColor = state.models[i].color;
                        state.selected.id = state.models[i].id;
                        state.selected.width = state.models[i].scale[0] * 10;
                        state.selected.height = state.models[i].scale[1] * 10;
                        state.selected.depth = state.models[i].scale[2] * 10;
                        state.models[i].color = state.selected.selectColor;
                    }
                }
            }
        case UNSELECT_SCENE_DATA:
            if (action.type === UNSELECT_SCENE_DATA) {
                /*for(let i = 0; i < state.models.length; i++){
                    if(state.selected.id === state.models[i].id){
                        state.models[i].color = state.selected.previousColor;
                    }
                }
                state.selected.id = null;
                state.selected.previousColor = null;
                state.selected.width = 0;
                state.selected.height = 0;
                state.selected.depth = 0;*/
            }
        case EDIT_SCENE_DATA:
            if (action.type === EDIT_SCENE_DATA) {
                let index = 0;
                for (; index < state.models.length; index++) {
                    if (state.models[index].id === state.selected.id) {
                        break;
                    }
                }
                if (action.payload.name === "width") {
                    state.selected.width = action.payload.value;
                    state.models[index].scale[0] = state.selected.width / 10;
                }
                if (action.payload.name === "height") {
                    state.selected.height = action.payload.value;
                    state.models[index].scale[1] = state.selected.height / 10;
                }
                if (action.payload.name === "depth") {
                    state.selected.depth = action.payload.value;
                    state.models[index].scale[2] = state.selected.depth / 10;
                }
            }
        default:
            return state;

    }
}

export const createSceneData = (data) => ({type: CREATE_SCENE_DATA, payload: data});
export const selectSceneData = (data) => ({type: SELECT_SCENE_DATA, payload: data})
export const unselectSceneData = () => ({type: UNSELECT_SCENE_DATA})
export const editSceneData = (data) => ({type: EDIT_SCENE_DATA, payload: data})
