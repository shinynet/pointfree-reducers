import {createSlice} from '@reduxjs/toolkit'
import * as R from 'ramda'

const initialState = {
	value: 0
}

const reducers = {
	setAmount: (state, {payload}) => {
		return R.assoc('value', payload, state)
	}
}

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers
})

export const {setAmount} = counterSlice.actions

export const selectCount = state => state.counter.value

export default counterSlice.reducer
