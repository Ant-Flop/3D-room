const UPDATE_SCENE_DATA = "UPDATE_SCENE_DATA";


const defaultState = {
    models: []
}

export const sceneDataReducer = (state = defaultState, action) => {
    switch(action.type) {
        case UPDATE_SCENE_DATA:
            state.models.push(action.payload);
        default:
            return state;
    }
}

export const updateSceneData = (data) => ({type:UPDATE_SCENE_DATA, payload: data})

