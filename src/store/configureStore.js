import { applyMiddleware, createStore } from "redux";
import { persistStore } from "redux-persist";
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from "./rootReducer";

import { loadState, saveState } from "../localStorage";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

export function configureStore(){
  const persistedState = loadState()

    return createStore(rootReducer, persistedState, composedEnhancer)
}