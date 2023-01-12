import { setCanvas, pushUndo, redo, undo } from './canvas/canvasSlice'
import {
	setTool,
	setFillColor,
	setStrokeColor,
	setLineWidth,
} from './tool/toolSlice'

export const globalActions = {
	setCanvas,
	setTool,
	setFillColor,
	setStrokeColor,
	setLineWidth,
	pushUndo,
	redo,
	undo,
}
