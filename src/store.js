import { combineReducers, applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { itemReducer } from "./reducers/itemReducer";
import { categoryReducer } from "./reducers/categoryReducer";
import createSagaMiddleware from "@redux-saga/core";

import rootSaga from "./sagas";
const reducer = combineReducers({ itemReducer, categoryReducer });

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
