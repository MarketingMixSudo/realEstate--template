import PostCard from '@/components/post-card'
import { Button } from '@/components/ui/button'
import CONFIG from '@/lib/config'
import directus from '@/lib/directus'
import { getOtherPosts, getPostBySlug } from '@/lib/queries'
import ROUTES from '@/lib/routes'
import { formatDate, getAssetUrl, getGridClass } from '@/lib/utils'
import { readItems } from '@directus/sdk'
import { Metadata } from 'next'

import Image from 'next/image'
import Link from 'next/link'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata | undefined> {
	const { slug } = await params
	const { title, thumbnail, short_description } = await getPostBySlug(slug)

	const global = await directus.request<Global>(
		readItems('global', {
			fields: ['name'],
		})
	)

	const metaTitle = `${title} | ${global.name}`
	const metaDescription = short_description.slice(0, 160)
	const ogImage = getAssetUrl(thumbnail)
	const fullUrl =  CONFIG.siteUrl + ROUTES.blog.list + '/' + slug

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

const Post = async ({ params }: { params: { slug: string } }) => {
	const { slug } = await params

	const { title, date_created, thumbnail, content, categories } = await getPostBySlug(slug)

	const otherPosts = await getOtherPosts(slug, 4)

	const postCategories = categories?.map(category => {
		return category.posts_categories_id
	})

	return (
		<>
			<section className='h-[150px] bg-cyan-300 w-full'></section>

			<section className='section '>
				<div className='wrapper !max-w-screen-xl'>
					<article className='space-y-6'>
						{postCategories?.slice(0, 3).map(category => (
							<Link href={ROUTES.blog.category(category.slug)} key={category.slug} className='text-sm inline-block link'>
								{category.title}
								{postCategories.length > 4 && <span>+{postCategories.length - 1}</span>}
							</Link>
						))}

						<h1 className='heading'>{title}</h1>
						<span className='text-sm block'>{formatDate(date_created)}</span>
						<Image
							src={getAssetUrl(thumbnail)}
							alt={title}
							width={420}
							height={280}
							className='w-full aspect-video object-cover object-center '
						/>

						<div className='prose-content mt-10' dangerouslySetInnerHTML={{ __html: content }}></div>
					</article>
				</div>
			</section>

			<section className='section '>
				<div className='wrapper !max-w-screen-2xl text-center space-y-12'>
					<h2 className='heading '>Zobacz pozostałe artykuły:</h2>
					<div className={getGridClass(4)}>
						{otherPosts.map(post => (
							<PostCard key={post.slug} {...post} />
						))}
					</div>

					{otherPosts.length > 4 && (
						<Button asChild variant={'outline'}>
							<Link href={ROUTES.blog.list}>Zobacz wszystkie</Link>
						</Button>
					)}
				</div>
			</section>
		</>
	)
}
export default Post
