import {combineReducers, createStore} from "redux";
import { registrationReducers } from "./actions";


const reducer = combineReducers({
    registration: registrationReducers
});

const store = createStore(reducer) 

export default store;