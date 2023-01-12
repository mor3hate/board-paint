import { ChangeEvent } from 'react'
import { useAppSelector } from '../../../../hooks/reduxHooks'
import { useActions } from '../../../../hooks/useActions'
import Brush from '../tools/Brush'
import Circle from '../tools/Circle'
import Eraser from '../tools/Eraser'
import Line from '../tools/Line'
import Rect from '../tools/Rect'
import styles from './Toolbar.module.scss'
import ToolbarItem from './ToolbarItem'

export default function Toolbar() {
	const { canvas } = useAppSelector(state => state.canvas)
	const { setTool, setFillColor, setStrokeColor } = useActions()

	const changeColor = (e: ChangeEvent<HTMLInputElement>) => {
		setFillColor({ fillColor: e.target.value })
		setStrokeColor({ strokeColor: e.target.value })
	}

	return (
		<nav className={styles.toolbar}>
			<ul className={styles.toolbarList}>
				<ToolbarItem
					name='BiBrush'
					title='Brush'
					onClick={() =>
						setTool({ tool: new Brush(canvas), toolName: 'Brush' })
					}
				/>
				<ToolbarItem
					name='BiRectangle'
					title='Rectangle'
					onClick={() =>
						setTool({ tool: new Rect(canvas), toolName: 'Rectangle' })
					}
				/>
				<ToolbarItem
					name='BiCircle'
					title='Circle'
					onClick={() =>
						setTool({ tool: new Circle(canvas), toolName: 'Circle' })
					}
				/>
				<ToolbarItem
					name='BiMinus'
					title='Line'
					onClick={() => setTool({ tool: new Line(canvas), toolName: 'Line' })}
				/>
				<ToolbarItem
					name='BiMinusFront'
					title='Eraser'
					onClick={() =>
						setTool({ tool: new Eraser(canvas), toolName: 'Eraser' })
					}
				/>
				<input
					type='color'
					onChange={e => changeColor(e)}
					title='Change color'
				/>
			</ul>
		</nav>
	)
}
