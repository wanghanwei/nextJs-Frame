import React, { useEffect } from 'react'
import Head from 'next/head'
import styles from './index.module.scss'

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
			</Head>
			<div className={styles.content}></div>
		</div>
	)
}
