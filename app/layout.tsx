import type { Metadata } from 'next'
import { Cormorant, Open_Sans } from 'next/font/google'

import directus from '@/lib/directus'
import { readItems } from '@directus/sdk'

import { Toaster } from '@/components/ui/sonner'


import Header from '@/components/header/header'
import Footer from '@/components/footer'

import './globals.css'
import LenisProvider from '@/components/providers/lenis-provider'
import ScrollToTop from '@/components/scroll-to-top'

const cormorant = Cormorant({
	weight: ['300', '400', '500', '600', '700'],
	variable: '--font-lato',
	subsets: ['latin'],
})
const openSans = Open_Sans({
	weight: ['300', '400', '500', '600', '700'],
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

const RootLayout = async ({
	children,
}: Readonly<{
	children: React.ReactNode
}>) => {
	const global = await directus.request<Global>(
		readItems('global', {
			fields: ['*'],
		})
	)
	return (
		<html lang='pl'>
			<body className={`${cormorant.variable} ${openSans.variable}  antialiased`}>
			<LenisProvider>
				<Header {...global} />
				<main>
				{children}
				</main>
				<Footer {...global} />
				<ScrollToTop />
				<Toaster />
				</LenisProvider>
			</body>
		</html>
	)
}

export default RootLayout
