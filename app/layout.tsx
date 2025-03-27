import type { Metadata } from 'next'
import { Urbanist, Merriweather } from 'next/font/google'

import directus from '@/lib/directus'
import { readItems } from '@directus/sdk'
import { Global } from '@/lib/schemas'

import Header from '@/components/header/header'

import './globals.css'
import HeaderNew from '@/components/header/header-wrapper'

const urbanist = Urbanist({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-urbanist',
	subsets: ['latin'],
})
const lora = Merriweather({
	weight: ['300','400','700','900'],
	variable: '--font-merriweather',
	subsets: ['latin'],
})

export async function generateMetadata(): Promise<Metadata | undefined> {
	const global = await directus.request<Global>(
		readItems('global', {
			fields: ['name', 'address', 'city'],
		})
	)

	return {
		title: {
			default: `${global.name} - ${global.address} , ${global.city}`,
			template: `%s | ${global.name}`,
		},
	}
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='pl'>
			<body className={`${urbanist.variable} ${lora.variable}  antialiased`}>
				<HeaderNew />
				{children}
			</body>
		</html>
	)
}
