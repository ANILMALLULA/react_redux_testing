import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import RootReducer from "./myreducers/index";

export const middlewares = [ReduxThunk];

export const store = createStore(RootReducer, applyMiddleware(...middlewares));
