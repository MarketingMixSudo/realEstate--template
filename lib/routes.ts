const ROUTES = {
	home: '/',
	about: '/o-nas',
	properties: '/nieruchomosci',
	calculator: '/kalkulator',
	forms: {
		list: '/formularze',
		buy: `/formularze/kupno`,
		sell: `/formularze/sprzedaj`,
	},
	blog: {
		list: '/aktualnosci',
		detail: (slug: string) => `/aktualnosci/${slug}`,
		category: (slug: string) => `/aktualnosci/kategoria/${slug}`,
	},

	contact: '/kontakt',
	privacyPolicy: '/polityka-prywatnosci',
} as const

export default ROUTES
