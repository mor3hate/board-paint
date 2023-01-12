import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IToolInitialState } from './tool.interface'

const initialState: IToolInitialState = {
	tool: null,
	toolName: '',
}

const toolSlice = createSlice({
	name: 'tool',
	initialState,
	reducers: {
		setTool: (state, action: PayloadAction<IToolInitialState>) => {
			if (state.tool && state.toolName !== 'Eraser') {
				state.tool.strokeColor = 'black'
			}

			if (state.toolName !== action.payload.toolName) {
				return {
					...state,
					tool: action.payload.tool,
					toolName: action.payload.toolName,
				}
			} else if (state.tool) {
				state.tool.destroyElements()
				return {
					tool: null,
					toolName: '',
				}
			}
		},
		setFillColor: (state, action: PayloadAction<{ fillColor: string }>) => {
			if (state.tool) state.tool.fillColor = action.payload.fillColor
		},

		setStrokeColor: (state, action: PayloadAction<{ strokeColor: string }>) => {
			if (state.tool) state.tool.strokeColor = action.payload.strokeColor
		},
		setLineWidth: (state, action: PayloadAction<{ lineWidth: number }>) => {
			if (state.tool) state.tool.lineWidth = action.payload.lineWidth
		},
	},
})

export const { setTool, setFillColor, setStrokeColor, setLineWidth } =
	toolSlice.actions

export default toolSlice.reducer
