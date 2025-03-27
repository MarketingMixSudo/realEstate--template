export interface Global {
	name: string
	address: string
	city: string
	email: string
	phone: string
	logo: string
	socials: {
		name: string
		link: string
	}[]
}

export interface BlockHero {
	headline: string
	content: string
	image: string
	preheading: string
	movie: string
	poster: string

	buttons: {
		label: string
		variant: 'outline' | 'default'
		href: string
	}[]
}
