import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import CONFIG from './config'
import { Metadata } from 'next'
import directus from './directus'
import { readItems } from '@directus/sdk'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export const getAssetUrl = (asset: string) => {
	return `${CONFIG.directusUrl}/assets/${asset}`
}

export const formatDate = (date: string) => {
	return new Date(date).toLocaleDateString('pl-PL', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	})
}

export const slugToTitle = (slug: string): string => {
	return slug
		.split('-')
		.map(word => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ')
}

export const getGridClass = (grid_columns: number) => {
	const gridClass = 'grid gap-6 mt-12'

	switch (grid_columns) {
		case 2:
			return gridClass + ' grid-cols-1 md:grid-cols-2'
		case 3:
			return gridClass + ' grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
		case 4:
			return gridClass + ' grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'
		default:
			return gridClass + ' grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
	}
}

export async function metadata(collection?: string, route?: string): Promise<Metadata | undefined> {
	const home = await directus.request<Home>(
		readItems('home', {
			fields: ['meta_title', 'meta_description', 'og_image'],
		})
	)

	let page: PagePredefined | null = null

	if (collection) {
		page = await directus.request<PagePredefined>(
			readItems(collection, {
				fields: ['meta_title', 'meta_description', 'og_image'],
			})
		)
	}

	const global = await directus.request<Global>(
		readItems('global', {
			fields: ['name'],
		})
	)

	if (!home || !global) return undefined

	const metaTitle = page?.meta_title || home.meta_title
	const metaDescription = page?.meta_description || home.meta_description
	const ogImage = page?.og_image ? getAssetUrl(page.og_image) : getAssetUrl(home.og_image)
	const fullUrl = route ? CONFIG.siteUrl + route : CONFIG.siteUrl

	return {
		title: metaTitle,
		description: metaDescription,
		alternates: {
			canonical: fullUrl,
		},
		openGraph: {
			title: metaTitle,
			description: metaDescription,
			type: 'website',
			locale: 'pl_PL',
			url: fullUrl,
			siteName: global.name,
			images: [
				{
					url: ogImage,
					width: 1200,
					height: 630,
					alt: metaTitle,
				},
			],
		},
	}
}
