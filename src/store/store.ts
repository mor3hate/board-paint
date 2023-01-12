import { configureStore } from '@reduxjs/toolkit'
import canvasReducer from './canvas/canvasSlice'
import toolReducer from './tool/toolSlice'
import thunk from 'redux-thunk'

export const store = configureStore({
	reducer: {
		canvas: canvasReducer,
		tool: toolReducer,
	},
	middleware: [thunk],
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
