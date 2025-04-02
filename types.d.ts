interface Global {
	name: string
	address: string
	city: string
	email: string
	phone: string
	logo: string
	socials: {
		name: 'facebook' | 'instagram' | 'linkedin'
		link: string
	}[]
}

interface Home {
	meta_title: string
	meta_description: string
	og_image: string
	hero_type: 'image' | 'video'
	hero_image: string
	hero_movie: string
	hero_poster: string
	hero_preheading: string
	hero_heading: string
	hero_subheading: string
	buttons: {
		label: string
		variant: 'default' | 'secondary' | 'outline'
		href: string
	}[]
	blocks: {
		id: string
		collection: string
		item: {
			id: string
		}
	}[]
}

interface PagePredefined {
	meta_title?: string
	meta_description?: string
	og_image?: string
	
	buttons: {
		label: string
		variant: 'default' | 'secondary' | 'outline'
		href: string
	}[]
	blocks: {
		id: string
		collection: string
		item: {
			id: string
		}
	}[]
}

interface Property {
	title?: string
	slug?: string
	thumbnail?: string
	city?: string
	address?: string
	type?: string
	listing_type?: string
	price?: string
	property_surface?: string
	rooms_count?: number
	properties_id?: Property
}

interface Post {
	id?: string
	title?: string
	slug?: string
	thumbnail?: string
	date_created?: string
	categories?: {
		id: string
		title: string
		slug: string
		posts_categories_id: {
			id: string
			title: string
			slug: string
		}
	}[]
}

interface Link {
	label: string
	variant: 'outline' | 'default'
	button: boolean
	href: string
}

interface BlockHeroClassic {
	hero_type: 'image' | 'video'
	hero_image: string
	hero_movie: string
	hero_poster: string
	hero_preheading: string
	hero_heading: string
	hero_subheading: string
	buttons: {
		label: string
		variant: 'default' | 'secondary' | 'outline'
		href: string
	}[]
}

interface BlockHeadingText {
	preheading?: string
	heading?: string
	heading_special?: string
	content?: string
	links?: Link[] | null
	className?: string
}

interface BlockTextImage {
	preheading?: string
	heading?: string
	text?: string
	links?: Link[] | null
	image?: string
	reverse?: boolean
}

interface BlockProperties {
	preheading?: string
	heading?: string
	heading_special?: string
	text?: string
	items_count?: number
	grid_columns?: number
	listing_type?: 'latest' | 'custom' | undefined
	links?: Link[] | null
	selected_properties?: Property[]
}

interface BlockPropertiesSlider {
	listing_type?: 'latest' | 'custom'
	type?: 'all' | 'sell' | 'rent'
	items_count?: number
	selected_properties?: Property[]
}
interface BlockBlogSection {
	preheading?: string
	heading?: string
	heading_special?: string
	text?: string
	items_count?: number
	grid_columns?: number
	listing_type?: 'latest' | 'featured'
	links?: Link[] | null
}
