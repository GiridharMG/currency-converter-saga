import { useLayoutEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { sagaActions } from "../sagas/sagaActions";

export default function useCurrencies() {
    /**
     * dispatch and selector hooks from redux tool kit with saga, used to tore and dispatch the reducer
     */
    const dispatch = useDispatch();
    const currencies = useSelector(state => state.currency.list)

    useLayoutEffect(() => {
        dispatch({ type: sagaActions.FETCH_CURRENCY })
    }, [])

    return currencies
}