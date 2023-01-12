import type { AppProps } from 'next/app'
import '../styles/globals.scss'
import { store } from '../src/store/store'
import { Provider } from 'react-redux'
import HeadProvider from '../src/providers/HeadProvider'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<HeadProvider>
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		</HeadProvider>
	)
}
