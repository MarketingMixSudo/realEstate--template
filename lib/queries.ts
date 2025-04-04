import directus from '@/lib/directus'
import { aggregate, readItems } from '@directus/sdk'

export const getPageData = async <T>(collection: string): Promise<T> => {
	return await directus.request<T>(
		readItems(collection, {
			status: { _eq: 'published' },
			fields: [
				'*',
				{
					blocks: [
						'*',
						{
							item: {
								block_hero_classic: ['*'],
								block_heading_and_text: ['*'],
								block_text_image: ['*'],
								block_properties: ['*', 'selected_properties.properties_id.*'],
								block_properties_slider: ['*', 'selected_properties.properties_id.*'],
								block_blog_section: ['*'],
							},
						},
					],
				},
			],
		})
	)
}

export const getPosts = async (sort: string, limit?: number, offset?: number) => {
	return await directus.request(
		readItems('posts', {
			filter: { status: { _eq: 'published' } },
			sort: [sort],
			fields: [
				'title',
				'slug',
				'thumbnail',
				'date_created',
				'short_description',
				'categories.posts_categories_id.title',
				'categories.posts_categories_id.slug',
			],
			...(limit ? { limit } : {}),
			...(offset ? { offset } : {}),
		})
	)
}

export const getPostsFilteredByCategory = async (
	sort: string,
	limit?: number,
	offset?: number,
	categorySlug?: string
) => {
	return await directus.request(
		readItems('posts', {
			filter: {
				status: { _eq: 'published' },
				...(categorySlug && {
					categories: {
						posts_categories_id: {
							slug: { _eq: categorySlug },
						},
					},
				}),
			},
			sort: [sort],
			fields: [
				'title',
				'slug',
				'thumbnail',
				'date_created',
				'short_description',
				'categories.posts_categories_id.title',
				'categories.posts_categories_id.slug',
			],
			...(limit ? { limit } : {}),
			...(offset ? { offset } : {}),
		})
	);
};

export const getPostBySlug = async (slug: string) => {
	const filterPosts = await directus.request(
		readItems('posts', {
			filter: { slug: { _eq: slug } },

			fields: ['*', 'categories.posts_categories_id.title', 'categories.posts_categories_id.slug'],
		})
	)

	return filterPosts[0]
}

export const getOtherPosts = async (excludeSlug: string,limit: number) => {
	return await directus.request(
		readItems('posts', {
			filter: {
				status: { _eq: 'published' },
				slug: { _neq: excludeSlug },
			},
			sort: ['-date_created'],
			limit: limit,
			fields: [
				'title',
				'slug',
				'thumbnail',
				'date_created',
				'short_description',
				'categories.posts_categories_id.title',
				'categories.posts_categories_id.slug',
			],
		})
	)
}



export const getTotalItemsCount = async (collection: string): Promise<number> => {
	const totalCount = await directus.request(
		aggregate(collection, {
			aggregate: { count: '*' },
		})
	)
	// Zwracamy liczbę, jeśli jest dostępna, w przeciwnym razie 0
	return Number(totalCount[0]?.count) || 0
}
