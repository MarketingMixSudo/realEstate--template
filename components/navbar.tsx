"use client"

import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { usePathname } from 'next/navigation'
import { Global } from '@/lib/schemas'
import Link from 'next/link'
import Image from 'next/image'
import { MenuIcon } from 'lucide-react'
import { getAssetUrl } from '@/lib/utils'


const Navbar = ({logo, name,address,city,email,phone,socials}: Global) => {

    const pathname = usePathname()

	const links = [
		{
			name: 'Nieruchomości',
			href: '#',
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



	return (
		<nav className='flex justify-between items-center px-6 py-6'>
			<Link href='/'>{logo && name && <Image src={getAssetUrl(logo)} alt={name} width={180} height={70} />}</Link>

			<div className='lg:hidden'>
				<Sheet>
					<SheetTrigger>
						<MenuIcon className='size-8 cursor-pointer' />
					</SheetTrigger>
					<SheetContent className='px-6 bg-white border-background-dark'>
						<SheetHeader className='px-0 mt-12'>
							<SheetTitle>
								<SheetClose asChild>
									<Link href='/' className='flex justify-start items-center gap-3 tracking-wider '>
										<Image src={getAssetUrl(logo)} alt={name} width={180} height={90}  />
										
									</Link>
								</SheetClose>
							</SheetTitle>
						</SheetHeader>

						<ul className='flex flex-col gap-6  '>
							{links.map(link => (
								<li key={link.name} className='w-full'>
									<SheetClose asChild>
										<Link
											href={link.href}
											className={`!text-xl !font-light w-full block hover:!border-black ${
												pathname === link.href ? 'nav-link--active !border-black' : 'nav-link '
											}`}>
											{link.name}
										</Link>
									</SheetClose>
								</li>
							))}
						</ul>


<div>
	<h2>{name}</h2>
	<h3>{address}, {city}</h3>

	<p>{email}</p>
	<p>{phone}</p>

	{socials.map((social)=>(
		<p key={social.name}>{social.name}</p>
	))}
</div>

					</SheetContent>
				</Sheet>
			</div>

			<ul className='hidden lg:flex gap-12 uppercase '>
				{links.map(item => (
					<li key={item.name}>
						<Link href={item.href}>{item.name}</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Navbar