import { typeBiIcon } from '../../../../ui/icon/BiIcon'
import Brush from '../tools/Brush'
import Tool from '../tools/Tool'

export interface IToolBarItem extends typeBiIcon {
	title: string
	onClick: () => void
}

export interface IToolBar {
	items: Omit<IToolBarItem, 'onClick'>[]
}

export const toolBarTools: IToolBar = {
	items: [
		{
			name: 'BiBrush',
			title: 'Brush',
		},
		{
			name: 'BiRectangle',
			title: 'Rectangle',
		},
		{
			name: 'BiCircle',
			title: 'Circle',
		},
		{
			name: 'BiMinus',
			title: 'Line',
		},
	],
}
