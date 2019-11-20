import {combineReducers} from "redux";

import {counterReducer} from "./counterReducer";
import {todoReducer} from "./todoReducer";

export const combinedReducers=combineReducers({
    counter:counterReducer,
    todo:todoReducer
});