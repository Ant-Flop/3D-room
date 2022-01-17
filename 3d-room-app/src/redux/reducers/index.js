import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {sceneDataReducer} from "./SceneDataReducer";

const rootReducer = combineReducers({
    sceneData: sceneDataReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()))