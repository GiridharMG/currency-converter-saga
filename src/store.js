import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from "redux-saga";
import currencySlice from './feature/currencySlice'
import rootSaga from './sagas/saga';

let sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware(), sagaMiddleware];

export const store = configureStore({
    reducer: {
        currency: currencySlice
    },
    middleware
})

sagaMiddleware.run(rootSaga);