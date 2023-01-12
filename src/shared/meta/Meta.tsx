import { PropsWithChildren } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { IMeta } from './meta.interface'
import { titleMerge } from './titleMerge'

export default function Meta({
	children,
	title,
	description,
}: PropsWithChildren<IMeta>) {
	const { asPath } = useRouter()
	const currentUrl = `https://michael-portfolio-red.vercel.app${asPath}`
	return (
		<>
			<Head>
				<title itemProp='headline'>{titleMerge(title)}</title>
				<>
					<meta
						itemProp='description'
						name='description'
						content={description}
					/>
					<link rel='canonical' href={currentUrl} />
					<meta name='og:title' content={titleMerge(title)} />
					<meta name='og:url' content={currentUrl} />
					<meta name='og:site_name' content='Board Online' />
					<meta name='og:description' content={description} />
				</>
			</Head>
			{children}
		</>
	)
}
