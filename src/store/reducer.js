import { combineReducers } from "@reduxjs/toolkit";
import dataReducer from './data'


export default combineReducers({
    data: dataReducer,
})