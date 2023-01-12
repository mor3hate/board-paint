import dynamic from 'next/dynamic'
import Meta from '../../../shared/meta/Meta'
import LineWidthTool from './toolbar/line-width-tool/LineWidthTool'
import Toolbar from './toolbar/Toolbar'

const DynamicCanvas = dynamic(() => import('./canvas/Canvas'), {
	ssr: false,
})

export default function Home() {
	return (
		<Meta title='Home' description='Online-board for painting and teaching.'>
			<div>
				<Toolbar />
				<DynamicCanvas />
				<LineWidthTool />
			</div>
		</Meta>
	)
}
