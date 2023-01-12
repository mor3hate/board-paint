import { ChangeEvent, useState } from 'react'
import { useActions } from '../../../../../hooks/useActions'
import ToolbarItem from '../ToolbarItem'

import styles from './LineWidthTool.module.scss'

export default function LineWidthTool() {
	const [lnWidth, showLnWidth] = useState(1)

	const { setLineWidth, undo, redo } = useActions()

	const changeLineWidth = (e: ChangeEvent<HTMLInputElement>) => {
		showLnWidth(Number(e.target.value))
		setLineWidth({ lineWidth: lnWidth })
	}

	return (
		<div className={styles.lineWidthTool}>
			<label htmlFor='Line Width'>
				<input
					type='range'
					min={1}
					max={50}
					defaultValue={1}
					onChange={e => changeLineWidth(e)}
				/>
				<p>Толщина линии: {lnWidth}</p>
			</label>
			<div>
				<ToolbarItem name='BiCaretLeft' title='Back' onClick={() => undo()} />
				<ToolbarItem name='BiCaretRight' title='Next' onClick={() => redo()} />
			</div>
		</div>
	)
}
