
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
			<div className='mt-20' style={{ backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 52%, black 52%, black)' }}>
  <div className='max-w-screen-xl  relative pt-32  sm:mx-10 2xl:mx-auto'>
    
    <Image src={dummyImage} alt='bg' fill className='object-cover object-center z-10' />
    <div className='absolute inset-0 w-full h-full bg-black/40 z-20'></div>

    <div className='z-30 text-white relative max-w-screen-md mx-auto text-center py-20 space-y-5 px-6'>
      <h2 className='text-5xl'>Find your dream home today!</h2>
      <p>We make it easy for you to find the perfect property that meets your needs. With thousands of listings across diverse property types, your dream home is just a few clicks away.</p>
	  <Button asChild className='mt-6' variant={'secondary'}>
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
									<Link href='#' className='link !text-base !text-white '>
										Polityka prywatności
									</Link>
								</li>
								<li>
									<Link href='#' className='link !text-base !text-white '>
										Kontakt
									</Link>
								</li>
								<li>
									<Link href='#' className='link !text-base !text-white  '>
										Regulaminy
									</Link>
								</li>
								<li>
									<Link href='#' className='link !text-base !text-white  '>
										Kariera
									</Link>
								</li>
							</ul>
						</div>
						{/* info */}
						<div className='text-center'>
							<h2 className='text-2xl  text-primary-400 uppercase'>{name}</h2>
							<div className='flex flex-col justify-center items-center gap-6 mt-6'>
								<Link href='#' className='group  link'>
									<span className='!text-base !text-white   duration-300'>
										ul. Zakopiańska 20a
									</span><br/>
									<span className='!text-base !text-white   duration-300'>
										59-850 Świeradów-Zdrój
									</span>
								</Link>
								<div className='flex flex-col justify-center items-center gap-1.5'>
									<Link
										href={`tel:+48${phone}`}
										className='link !text-base !text-white  !lowercase'>
										+48 {phone}
									</Link>
									<Link
										href={`mailto:${email}`}
										className='link !text-base !text-white  !lowercase '>
										{email}
									</Link>
								</div>
							</div>
						</div>
						{/* social */}
						<div className='text-center lg:text-right'>
							<h2 className='text-2xl  text-primary-400 uppercase'>Odwiedź nas</h2>

							<ul className='flex justify-center lg:justify-end items-center gap-4 mt-4'>
								{socials.map((social, index) => (
									<Social key={`${social.name} - ${index}`} {...social} large />
								))}
							</ul>
				
						</div>
					</div>
					{/* TEXT */}
					<hr className='border-white/30 mt-16 mb-12' />

					<div className='flex flex-col md:flex-row justify-center md:justify-between text-center gap-4'>
						<div>
							© {currentYear} {name}
						</div>
						<div className='flex justify-center items-center gap-2'>
							Created by:
							<Link href='https://marketingmix.pl'>
								<Image src={marketingMix} alt='MarketingMix' width={130} height={30} />
							</Link>
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}

export default Footer
