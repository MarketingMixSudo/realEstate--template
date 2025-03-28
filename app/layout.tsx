import type { Metadata } from 'next'
import { Lato, Cinzel} from 'next/font/google'

import directus from '@/lib/directus'
import { readItems } from '@directus/sdk'

import { Toaster } from "@/components/ui/sonner"

import HeaderNew from '@/components/header/header-wrapper'
import Footer from '@/components/footer'

import './globals.css'

const lato = Lato({
	weight: ['100','300','400','700','900'],
	variable: '--font-lato',
	subsets: ['latin'],
})
const cinzel = Cinzel({
	weight: ['400','500','600','700','800','900'],
	variable: '--font-cinzel',
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
			<body className={`${lato.variable} ${cinzel.variable}  antialiased`}>
				<HeaderNew />
				{children}
				<Footer/>
				<Toaster />
			</body>
		</html>
	)
}
