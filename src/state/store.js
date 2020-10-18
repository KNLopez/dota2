import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { combineReducers } from "redux";
import matchesReducer from "./matches/reducers";

const reducers = combineReducers({
  matchesReducer,
});

import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
