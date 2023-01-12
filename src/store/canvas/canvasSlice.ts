import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICanvasInitialState } from './canvas.interface'

const initialState: ICanvasInitialState = {
	canvas: null,
	redo: [],
	undo: [],
}

const canvasSlice = createSlice({
	name: 'canvas',
	initialState,
	reducers: {
		setCanvas: (
			state,
			action: PayloadAction<Pick<ICanvasInitialState, 'canvas'>>
		) => {
			return { ...state, canvas: action.payload.canvas }
		},
		pushUndo: (state, action) => {
			state.undo.push(action.payload)
		},

		undo: state => {
			if (state.canvas) {
				const width = state.canvas.width
				const height = state.canvas.height

				let ctx = state.canvas?.getContext('2d')
				if (state.undo.length > 0) {
					let dataUrl = state.undo.pop()
					state.redo.push(state.canvas.toDataURL())
					let img = new Image()
					img.src = dataUrl || ''
					img.onload = () => {
						ctx!.clearRect(0, 0, width, height)
						ctx!.drawImage(img, 0, 0, width, height)
					}
				} else {
					ctx!.clearRect(0, 0, state.canvas!.width, state.canvas!.height)
				}
			}
		},

		redo: state => {
			if (state.canvas) {
				const width = state.canvas.width
				const height = state.canvas.height

				let ctx = state.canvas?.getContext('2d')
				if (state.redo.length > 0) {
					let dataUrl = state.redo.pop()
					state.undo.push(state.canvas.toDataURL())
					let img = new Image()
					img.src = dataUrl || ''
					img.onload = () => {
						ctx!!.drawImage(img, 0, 0, width, height)
					}
				}
			}
		},
	},
})

export const { setCanvas, pushUndo, undo, redo } = canvasSlice.actions

export default canvasSlice.reducer
