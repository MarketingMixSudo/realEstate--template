import type { Metadata } from 'next'
import { Cormorant,Open_Sans, } from 'next/font/google'

import directus from '@/lib/directus'
import { readItems } from '@directus/sdk'

import { Toaster } from '@/components/ui/sonner'

import HeaderNew from '@/components/header/header-wrapper'
import Footer from '@/components/footer'

import './globals.css'

const cormorant = Cormorant({
	weight: ['300','400', '500', '600', '700',],
	variable: '--font-lato',
	subsets: ['latin'],
})
const openSans = Open_Sans({
	weight: ['300','400', '500', '600', '700',],
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
				<HeaderNew />
				{children}
				<Footer {...global}/>
				<Toaster />
			</body>
		</html>
	)
}

export default RootLayout
