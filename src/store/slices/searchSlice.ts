import { createSlice } from '@reduxjs/toolkit'

type SearchSlice = {
	search: string
	type: string
}

const initialState: SearchSlice = {
	search: '',
	type: 'all',
}

export const searchSlice = createSlice({
	name: '@search',
	initialState,
	reducers: {
		setSearch(state, action) {
			state.search = action.payload
		},
		setType(state, action) {
			state.type = action.payload
		},
	},
})

export const { setSearch, setType } = searchSlice.actions
export default searchSlice.reducer
