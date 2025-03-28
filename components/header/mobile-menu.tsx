import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

import CONFIG from '@/lib/config'
import ROUTES from '@/lib/routes'
import { NAV_ITEMS } from '@/components/header/navbar-initial'

import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import Hamburger from '@/components/header/hamburger'

import logo from '@/public/assets/logo.png'

const MobileMenu = () => {
	const pathname = usePathname()

    const colors = ['text-red-500', 'text-blue-500', 'text-green-500', 'text-orange-500', 'text-purple-500']
	return (
		<div className='xl:hidden'>
			<Sheet>
				<SheetTrigger
					aria-label='Otwórz menu'
					className='flex justify-center items-center bg-secondary-400 rounded-md '>
					<Hamburger />
				</SheetTrigger>
				<SheetContent className='pl-12 bg-background-dark  border-background-dark'>
					<SheetHeader className='px-0'>
						<SheetTitle>
							<SheetClose asChild>
								<Link href={ROUTES.home}>
									{/* <Image src={logo} alt={CONFIG.siteName} width={120} height={100} className='w-[120px] ' /> */}
								</Link>
							</SheetClose>
						</SheetTitle>
					</SheetHeader>

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
										{item.name === 'Dzieci'
											? item.name.split('').map((letter, index) => (
													<span key={index} className={`${colors[index % colors.length]} mx-[1px]`}>
														{letter}
													</span>
											  ))
											: item.name}
									</Link>
								</SheetClose>
							</li>
						))}
					</ul>
				</SheetContent>
			</Sheet>
		</div>
	)
}

export default MobileMenu