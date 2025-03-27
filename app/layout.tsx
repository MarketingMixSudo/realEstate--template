import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'

const urbanist = Urbanist({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-urbanist',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${urbanist.variable}  antialiased`}>
        <Header/>
        {children}
        </body>
		</html>
	)
}
