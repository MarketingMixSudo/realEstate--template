


import Link from 'next/link'
import React from 'react'
import Social from '../social'
import { Mail, Phone } from 'lucide-react'
import{ Global} from '@/lib/schemas'

const TopBar = ({ email, phone, socials }: Global) => {
	
	return (
		<div className=' bg-black text-white'>
			<div className='flex justify-between items-center max-w-screen-max mx-auto px-4 md:px-11 py-2 w-full'>
			<div className='flex justify-between items-center gap-4'>
			<Link href={`mailto:${email}`} className='flex justify-center items-center gap-1 text-sm group ' aria-label='Email'>
				<Mail className='size-4 group-hover:text-primary-400 duration-150' />
					<span className='hidden sm:inline-block'>{email}</span>
				</Link>
				<Link href={`tel:${phone}`} className='flex justify-center items-center gap-1 text-sm group' aria-label='Telefon'>
				<Phone className='size-4 group-hover:text-primary-400 duration-150' />
					<span className='hidden sm:inline-block'>{phone}</span>
 				</Link>
 			</div>

				<ul className='flex justify-center items-center gap-4'>
						{socials.map((social, index) => (
							<Social key={`${social.name} - ${index}`} {...social} />
						))}
					</ul>
			</div>
		</div>
	)
}

export default TopBar
