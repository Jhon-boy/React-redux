import {combineReducers } from  "redux";
import { filterReducer } from "./filterReducers";
import { todosReducers } from "./todosReducers";

export const rootReducer = combineReducers(
    {
        //state name : reducer              
        todosState: todosReducers,
        filterState: filterReducer
    }
)