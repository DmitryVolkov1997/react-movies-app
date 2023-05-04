import { combineReducers, configureStore } from '@reduxjs/toolkit'
import searchReducer from './slices/searchSlice'

const rootReducer = combineReducers({
	search: searchReducer,
})

const store = configureStore({
	reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
