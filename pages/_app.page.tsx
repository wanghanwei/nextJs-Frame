import React from 'react'
import '../styles/globals.scss'
import Head from 'next/head'
import { wrapper } from '../store'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				{/* 移动端适配 */}
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
				/>
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default wrapper.withRedux(MyApp)
