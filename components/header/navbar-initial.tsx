'use client'

import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

import ROUTES from '@/lib/routes'

import MobileMenu from '@/components/header/mobile-menu'

import { getAssetUrl } from '@/lib/utils'

export const NAV_ITEMS = [
	{
		name: 'Nieruchomości',
		href: '/',
	},
	{
		name: 'Kalkulator',
		href: '#',
	},
	{
		name: 'Formularze',
		href: '#',
	},
	{
		name: 'Zespół',
		href: '#',
	},
	{
		name: 'Blog',
		href: '#',
	},
	{
		name: 'Kontakt',
		href: '#',
	},
]

export const colors = ['text-red-500', 'text-blue-500', 'text-green-500', 'text-orange-500', 'text-purple-500']

const NavbarInitial = ({ logo }: Global) => {
	const pathname = usePathname()

	return (
		<nav className='flex justify-between items-center xl:items-start px-2 md:px-11 pt-4 lg:mt-8 max-w-screen-max mx-auto'>
			<Link href={ROUTES.home} aria-label='Strona główna'>
				{logo && <Image src={getAssetUrl(logo)} alt='' width={180} height={70} />}
			</Link>

			<ul className='hidden xl:flex justify-center items-center gap-6 pt-2 '>
				{NAV_ITEMS.map(({ name, href }) => (
					<li key={name}>
						<Link href={href} className={`   ${pathname === 'href' ? 'nav-link--active' : 'nav-link'}`}>
							{name}
						</Link>
					</li>
				))}
			</ul>

			<MobileMenu />
		</nav>
	)
}

export default NavbarInitial
