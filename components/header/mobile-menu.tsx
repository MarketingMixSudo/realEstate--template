//  add socials, contact and address info

import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

import ROUTES from '@/lib/routes'
import { NAV_ITEMS } from '@/components/header/navbar-initial'

import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import Hamburger from '@/components/header/hamburger'


import { getAssetUrl } from '@/lib/utils'


const MobileMenu = ({ logo, name, }:Global) => {
	const pathname = usePathname()

	return (
		<div className='xl:hidden'>
			<Sheet>
				<SheetTrigger
					aria-label='Otwórz menu'
					className='flex justify-center items-center bg-secondary-400 rounded-md '>
					<Hamburger />
				</SheetTrigger>
				<SheetContent className='pl-12 bg-black border-background-dark'>
					<SheetHeader className='px-0'>
						<SheetTitle>
							<SheetClose asChild>
								<Link href={ROUTES.home}>
									<Image src={getAssetUrl(logo)} alt={name} width={120} height={100} className='w-[120px] ' />
								</Link>
							</SheetClose>
						</SheetTitle>
					</SheetHeader>

<div className='flex flex-col justify-between h-full mb-6'>

					<ul className='flex flex-col gap-6  '>
						<li>
							<SheetClose asChild>
								<Link
									href={ROUTES.home}
									className={`${pathname === '/' ? 'nav-link--active' : 'nav-link  '} !text-xl !font-normal`}>
									Strona Główna
								</Link>
							</SheetClose>
						</li>
						{NAV_ITEMS.map(item => (
							<li key={item.name}>
								<SheetClose asChild>
									<Link
										href={item.href}
										className={`!text-xl !font-normal ${pathname === item.href ? 'nav-link--active' : 'nav-link'}`}>
										{ item.name}
									</Link>
								</SheetClose>
							</li>
						))}
					</ul>


{/* <p className='text-white'>{address}</p> */}
						</div>
					{/* <ul className='flex justify-center items-center gap-4'>
					{socials.map((social, index) => (
						<Social key={`${social.name} - ${index}`} {...social} />
					))}
				</ul> */}
				</SheetContent>
			</Sheet>
		</div>
	)
}

export default MobileMenu