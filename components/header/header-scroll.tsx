// completed

'use client'

import { usePathname } from 'next/navigation'

import Image from 'next/image'
import Link from 'next/link'

import ROUTES from '@/lib/routes'
import { NAV_ITEMS } from '@/components/header/navbar-initial'
import { getAssetUrl } from '@/lib/utils'


import MobileMenu from '@/components/header/mobile-menu'


const HeaderScroll = ({ logo, name }: Global) => {
	const pathname = usePathname()

	return (
		<nav className='flex justify-between items-center xl:items-center px-2 md:px-6 py-3  max-w-screen-max mx-auto bg-black'>
			<Link href={ROUTES.home} aria-label='Strona główna'>
				{logo && <Image src={getAssetUrl(logo)} alt={name} width={140} height={70} />}
			</Link>

			<div className='flex justify-center items-center gap-6'>
				<ul className='hidden xl:flex justify-center items-center gap-6  '>
					{NAV_ITEMS.map(({ name, href }) => (
						<li key={`${name}`}>
							<Link href={href} className={`   ${pathname === 'href' ? 'nav-link--active' : 'nav-link'}`}>
								{name}
							</Link>
						</li>
					))}
				</ul>

				<MobileMenu {...global}/>

			</div>
		</nav>
	)
}

export default HeaderScroll
