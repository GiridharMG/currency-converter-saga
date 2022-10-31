import { call, takeEvery, put } from "redux-saga/effects";
import { setCurrencyList } from "../feature/currencySlice";
import { sagaActions } from "./sagaActions";

/**
 * Saga to fetch and store all the currency names into redux
 */
export function* fetchSaga() {
    try {
        let result = yield call(() => fetch('https://openexchangerates.org/api/currencies.json').then(res => res.text()))
        yield put(setCurrencyList(Object.keys(JSON.parse(result))))
    } catch(e) {
        yield put({ type: "CURRENCY_FAILED"})
    }
}

/**
 * root saga for fetch currency action
 */
export default function* rootSaga() {
    yield takeEvery(sagaActions.FETCH_CURRENCY, fetchSaga);
}