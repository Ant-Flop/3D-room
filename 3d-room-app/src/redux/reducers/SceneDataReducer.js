const CREATE_SCENE_DATA = "CREATE_SCENE_DATA";
const UPDATE_SCENE_DATA = "UPDATE_SCENE_DATA";

const defaultState = {
    models: [],
    selected: {
        id: null,
        previousColor: null,
        selectColor: "#ff463e"
    }
}

export const sceneDataReducer = (state = defaultState, action) => {
    switch(action.type) {
        case CREATE_SCENE_DATA:
            state.models.push(action.payload);
        case UPDATE_SCENE_DATA:
            for(let i = 0; i < state.models.length; i++){
                if(state.models[i].id === action.payload.id ){
                    state.selected.previousColor = state.models[i].color;
                    state.selected.id = state.models[i].id;
                    //state.models[i].color = state.selected.selectColor;
                    console.log(state.models[i].id )
                }
            }
        default:
            return state;
    }
}

export const createSceneData = (data) => ({type:CREATE_SCENE_DATA, payload: data});
export const updateSceneData = (data) => ({type:UPDATE_SCENE_DATA, payload: data})

