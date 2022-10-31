import { createSlice } from '@reduxjs/toolkit'

/**
 * initial value for converted currency
 */
const initialState = {
    value: 0,
    list: []
}

/**
 * reducers to update value for converted currency
 */
const currencySlice = createSlice({
    name: 'Currency',
    initialState,
    reducers: {
        setConvertedCurrency: (state, action) => {
            state.value = action.payload
        },
        setCurrencyList: (state, action) => {
            state.list = action.payload
        }
    }
})

export const { setConvertedCurrency, setCurrencyList } = currencySlice.actions

export default currencySlice.reducer