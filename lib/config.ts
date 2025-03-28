const CONFIG = {
	directusUrl: process.env.NEXT_PUBLIC_DIRECTUS_API_ENDPOINT!,
	siteUrl: process.env.NEXT_PULBIC_SITE_URL!,
} as const

export default CONFIG