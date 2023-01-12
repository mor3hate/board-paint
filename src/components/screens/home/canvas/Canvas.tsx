import { useEffect, useRef } from 'react'
import { useActions } from '../../../../hooks/useActions'
import { useCanvasDimension } from '../../../../hooks/useCanvasDimension'

export default function Canvas() {
	const { height, width } = useCanvasDimension()

	const canvasRef = useRef<HTMLCanvasElement>(null)

	const { setCanvas, pushUndo } = useActions()

	useEffect(() => {
		setCanvas({ canvas: canvasRef.current })
	}, [])

	const handleSaveUndo = () => {
		pushUndo(canvasRef.current?.toDataURL())
	}

	return (
		<canvas
			width={width}
			height={height}
			ref={canvasRef}
			onMouseDown={handleSaveUndo}
			onTouchStart={handleSaveUndo}
		/>
	)
}
