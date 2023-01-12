import BiIcon from '../../../../ui/icon/BiIcon'
import { IToolBarItem } from './toolbar.interface'

import styles from './Toolbar.module.scss'
import clsx from 'clsx'
import { useAppSelector } from '../../../../hooks/reduxHooks'

export default function ToolbarItem({ name, title, onClick }: IToolBarItem) {
	const { toolName } = useAppSelector(state => state.tool)

	return (
		<li
			role='button'
			title={title}
			className={clsx(styles.toolbarItem, {
				[styles.active]: title === toolName,
			})}
			onClick={onClick}
		>
			<BiIcon name={name} />
		</li>
	)
}
