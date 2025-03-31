// check small devices when more items

import Link from 'next/link'

import Social from '@/components/social'

import { Mail, Phone } from 'lucide-react'

const TopBar = ({ email, phone, socials }: Global) => {

	

	return (
		<div className=' bg-black text-white'>
			<div className='flex justify-between items-center max-w-screen-max mx-auto px-4 md:px-11 py-2 w-full'>
				<div className='flex justify-between items-center gap-4'>
					<Link
						href={`mailto:${email}`}
						className='flex justify-center items-center gap-2 text-xs  '
						aria-label='Email'>
						<Mail className='size-4 ' />
						<span className='hidden sm:inline-block link '>{email}</span>
					</Link>
					<Link href={`tel:${phone}`} className='flex justify-center items-center gap-2 text-xs ' aria-label='Telefon'>
						<Phone className='size-4' />
						<span className='hidden sm:inline-block link'>{phone}</span>
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
