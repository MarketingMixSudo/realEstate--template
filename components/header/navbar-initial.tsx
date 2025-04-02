// add dropdown


'use client'

import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

import { getAssetUrl } from '@/lib/utils'
import ROUTES from '@/lib/routes'

import MobileMenu from '@/components/header/mobile-menu'


export const NAV_ITEMS = [
	{
		name: 'Nieruchomości',
		href: ROUTES.properties,
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



const NavbarInitial = ( global : Global) => {
	



	const pathname = usePathname()

	return (
		<nav className='flex justify-between items-center xl:items-center px-2 md:px-11 mt-4 max-w-screen-max mx-auto'>
			<Link href={ROUTES.home} aria-label='Strona główna'>
				{global.logo && global.name && <Image src={getAssetUrl(global.logo)} alt={global.name} width={180} height={70} />}
			</Link>

			<ul className='hidden xl:flex justify-center items-center gap-6 pt-2 '>
				{NAV_ITEMS.map(({ name, href }) => (
					<li key={name}>
						<Link href={href} className={`   ${pathname === 'href' ? 'nav-link--active' : 'nav-link after:!bg-white'}`}>
							{name}
						</Link>
					</li>
				))}
			</ul>

			<MobileMenu {...global} socials={global.socials}/>
		</nav>
	)
}

export default NavbarInitial
