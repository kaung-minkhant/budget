import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducers";
import createSagaMiddleware from "@redux-saga/core";
import logger from "redux-logger";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware()

const middlewares = [logger, sagaMiddleware]

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares),
});

sagaMiddleware.run(rootSaga)
