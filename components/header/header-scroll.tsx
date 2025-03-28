'use client'

import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

import CONFIG from '@/lib/config'
import ROUTES from '@/lib/routes'
import { NAV_ITEMS } from '@/components/header/navbar-initial'
import { colors } from '@/components/header/navbar-initial'

import LinkBtn from '@/components/link-btn'
import MobileMenu from '@/components/header/mobile-menu'

import icon from '@/public/assets/logo-icon.svg'
import { getAssetUrl } from '@/lib/utils'

const HeaderScroll = ({logo}: Global) => {
	const pathname = usePathname()


	return (
		<nav className='flex justify-between items-center xl:items-start px-2 md:px-6 py-3  max-w-screen-max mx-auto bg-black'>
			<Link href={ROUTES.home} aria-label='Strona główna'>
			{logo && <Image src={getAssetUrl(logo)} alt='' width={180} height={70} />}
			</Link>

			<div className='flex justify-center items-center gap-6'>
				<ul className='hidden xl:flex justify-center items-center gap-6  '>
					{NAV_ITEMS.map(({ name, href }) => (
						<li key={`${name}`}>
							<Link href={href} className={`   ${pathname === 'href' ? 'nav-link--active' : 'nav-link'}`}>
								{name === 'Dzieci'
									? name.split('').map((letter, index) => (
											<span key={index} className={`${colors[index % colors.length]} mx-[1px]`}>
												{letter}
											</span>
									  ))
									: name}
							</Link>
						</li>
					))}
				</ul>

				{/* <LinkBtn href='#'>Rezerwuj</LinkBtn> */}

				<MobileMenu />
			</div>
		</nav>
	)
}

export default HeaderScroll