import { createStore } from "redux";
import userReducer from "./Reducer/userReducer";
import { combineReducers } from "redux";

const RootReducer = combineReducers({ login: userReducer });

const store = createStore(RootReducer);

export default store;
