// import ROUTES from '@/lib/routes'
// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'

// import MMlogo from '@/public/marketingmix-logo--light.svg'
// import dummyImage from '@/public/dummy.jpg'
// import { getAssetUrl } from '@/lib/utils'
// import { Mail, Phone } from 'lucide-react'
// import Social from './social'

// const Footer = ({ logo, name, address, city, phone, email, socials }: Global) => {
// 	const currentYear = new Date().getFullYear()
// 	return (
// 		<footer className='bg-black text-font-light pt-64 pb-4'>
//       <Image src={dummy}
// 			<div className='wrapper grid grid-cols-4'>
// 				<div >
// 					<Link href={ROUTES.home} aria-label='Strona główna'>
// 						{logo && <Image src={getAssetUrl(logo)} alt={name} width={180} height={70} />}
// 					</Link>
// 				</div>

// 				<div>
// 					<h2 className='text-2xl '>Adres</h2>

// 					<div className='flex flex-col text-lg mt-3'>
// 						<span>{name}</span>
// 						<span>{address}</span>
// 						<span>{city}</span>
// 					</div>
// 				</div>

// 				<div>
// 					<h2 className='text-2xl'>Kontakt</h2>

// 					<div className='mt-3 space-y-2'>
// 						<Link
// 							href={`mailto:${email}`}
// 							className='flex justify-start items-center gap-2 text-lg group '
// 							aria-label='Email'>
// 							<Mail className='size-5 group-hover:text-primary-400 duration-150' />
// 							<span className='inline-block'>{email}</span>
// 						</Link>
// 						<Link
// 							href={`tel:${phone}`}
// 							className='flex justify-start items-center gap-2 text-lg group'
// 							aria-label='Telefon'>
// 							<Phone className='size-5 group-hover:text-primary-400 duration-150' />
// 							<span className='inline-block'>{phone}</span>
// 						</Link>
// 					</div>
// 				</div>

// 				<div>
// 					<h2 className='text-2xl'>Social Media</h2>

// 					<ul className='flex justify-start items-center gap-4 mt-4'>
// 						{socials.map((social, index) => (
// 							<Social key={`${social.name} - ${index}`} {...social} large />
// 						))}
// 					</ul>
// 				</div>
// 			</div>

// 			<div className='flex justify-center items-center pt-16 pb-4'>
// 				<Link href={ROUTES.privacyPolicy}>Polityka prywatności</Link>
// 			</div>

// 			<hr className="border-white/30" />
// 			<div className='wrapper flex justify-between pt-4'>
// 				<div>© {currentYear} {name}</div>
// 				<Link href='https://marketingmix.pl' target='_blank' rel='noopener'>
// 					<Image src={MMlogo} alt='logo wykonawcy Marketing Mix' width={150} height={30} />
// 				</Link>
// 			</div>
// 		</footer>
// 	)
// }

// export default Footer

import Image from 'next/image'

import dummyImage from '@/public/dummy.jpg'
import Link from 'next/link'

import marketingMix from '@/public/marketingmix-logo--light.svg'
import { getAssetUrl } from '@/lib/utils'
import Social from './social'
import { Button } from './ui/button'

const Footer = ({ logo, name, phone, email, socials }: Global) => {
	const currentYear = new Date().getFullYear()

	return (
		<>
			<div className='' style={{ backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 52%, black 52%, black)' }}>
  <div className='max-w-screen-xl mx-auto relative pt-32 mx-10'>
    
    <Image src={dummyImage} alt='bg' fill className='object-cover object-center z-10' />
    <div className='absolute inset-0 w-full h-full bg-black/30 z-20'></div>

    <div className='z-30 text-white relative max-w-screen-md mx-auto text-center py-20 space-y-5'>
      <h2 className='text-5xl'>Find your dream home today!</h2>
      <p>We make it easy for you to find the perfect property that meets your needs. With thousands of listings across diverse property types, your dream home is just a few clicks away.</p>
	  <Button asChild className='mt-6'>
		<Link href='#'>Sprawdź oferty</Link>
	  </Button>
    </div>

  </div>
</div>


			<footer className='pt-16 pb-20  relative px-7 2xl:px-0 bg-black text-white'>
				{/* <Image src={bgPattern} alt='bg' className='absolute top-0 left-0 w-full h-full object-cover -z-10' fill /> */}

				<div className='max-w-screen-xl mx-auto '>
					{/* LOGO */}
					<Image src={getAssetUrl(logo)} alt={name} width={250} height={86} className=' mx-auto ' />
					{/* GRID */}
					<div className='grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-0 mt-11 '>
						{/* links */}
						<div className='text-center lg:text-left'>
							<h2 className='text-2xl  text-primary-400 uppercase'>Przydatne linki</h2>
							<ul className='flex flex-col justify-start items-center  lg:items-start gap-3.5 mt-6'>
								<li>
									<Link href='#' className='utility-link !text-base !text-white  hover:!text-primary-600'>
										Polityka prywatności
									</Link>
								</li>
								<li>
									<Link href='#' className='utility-link !text-base !text-white hover:!text-primary-600'>
										Kontakt
									</Link>
								</li>
								<li>
									<Link href='#' className='utility-link !text-base !text-white  hover:!text-primary-600'>
										Regulaminy
									</Link>
								</li>
								<li>
									<Link href='#' className='utility-link !text-base !text-white  hover:!text-primary-600'>
										Kariera
									</Link>
								</li>
							</ul>
						</div>
						{/* info */}
						<div className='text-center'>
							<h2 className='text-2xl  text-primary-400 uppercase'>{name}</h2>
							<div className='flex flex-col justify-center items-center gap-6 mt-6'>
								<Link href='#' className='group flex flex-col'>
									<span className='!text-base !text-white  group-hover:!text-primary-600 duration-300'>
										ul. Zakopiańska 20a
									</span>
									<span className='!text-base !text-white  group-hover:!text-primary-600 duration-300'>
										59-850 Świeradów-Zdrój
									</span>
								</Link>
								<div className='flex flex-col justify-center items-center gap-1.5'>
									<Link
										href={`tel:+48${phone}`}
										className='utility-link !text-base !text-white  !lowercase hover:!text-primary-600'>
										+48 {phone}
									</Link>
									<Link
										href={`mailto:${email}`}
										className='utility-link !text-base !text-white  !lowercase hover:!text-primary-600'>
										{email}
									</Link>
								</div>
							</div>
						</div>
						{/* social */}
						<div className='text-center lg:text-right'>
							<h2 className='text-2xl  text-primary-400 uppercase'>Odwiedź nas</h2>

							<ul className='flex justify-end items-center gap-4 mt-4'>
								{socials.map((social, index) => (
									<Social key={`${social.name} - ${index}`} {...social} large />
								))}
							</ul>
							{/* <div className='flex flex-col items-center lg:items-end gap-4 lg:gap-1.5 mt-10'>
							<span className='flex justify-center items-center gap-2  utility-link !text-base !text-white/66 !font-normal !normal-case'>
								Created by:{' '}
								<Link href='https://marketingmix.pl'>
									<Image src={marketingMix} alt='MarketingMix' width={100} height={30} />
								</Link>
							</span>

							<Link
								href='#'
								className='utility-link !text-sm !text-white/66 !font-normal !normal-case hover:!text-primary-600'>
								Ustawienia cookies
							</Link>
						</div> */}
						</div>
					</div>
					{/* TEXT */}
					<hr className='border-white/30 mt-16 mb-12' />

					<div className='flex justify-between'>
						<div>
							© {currentYear} {name}
						</div>
						<div className='flex justify-center items-center'>
							Created by:
							<Link href='https://marketingmix.pl'>
								<Image src={marketingMix} alt='MarketingMix' width={100} height={30} />
							</Link>
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}

export default Footer
