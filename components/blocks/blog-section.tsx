//completed

import directus from '@/lib/directus'
import { readItems } from '@directus/sdk'

import { cn } from '@/lib/utils'

import LinkList from '@/components/link-list'
import PostCard from '../post-card'

const BlogSection = async ({
	preheading,
	heading,
	heading_special,
	text,
	items_count,
	grid_columns,
	listing_type,
	links,
	className,
}: BlockBlogSection & { className?: string }) => {
    
	interface PostFilter {
		status: { _eq: string }
		featured?: { _eq: boolean }
	}

	const filter: PostFilter = { status: { _eq: 'published' } }

	if (listing_type === 'featured') {
		filter.featured = { _eq: false }
	}

	const posts = await directus.request<Post[]>(
		readItems('posts', {
			filter,
			sort: ['-date_created'],
			fields: [ 'title','slug', 'thumbnail','date_created', 'categories.posts_categories_id.title','categories.posts_categories_id.slug'],
			limit: items_count,
		})
	)



	let gridClass = 'grid gap-6 mt-12'

	switch (grid_columns) {
		case 2:
			gridClass += ' grid-cols-1 md:grid-cols-2'
			break
		case 3:
			gridClass += ' grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
			break
		case 4:
			gridClass += ' grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'
			break
		default:
			gridClass += ' grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
	}

	return (
		<section className={cn('section', className)}>
			<div className='wrapper !max-w-screen-xl'>
				<div className='flex flex-col justify-center items-center gap-4 max-w-screen-lg mx-auto text-center'>
					{preheading && <span className='uppercase text-sm'> {preheading}</span>}
					<h2 className='text-4xl sm:text-5xl uppercase '>
						{heading}

						{heading_special && (
							<>
								<br /> <span className='text-primary-400'>{heading_special}</span>
							</>
						)}
					</h2>

					<p className=' max-w-[800px] !text-lg leading-relaxed'>{text}</p>
				</div>

				<div className={gridClass}>
					{posts.map(post => (
						<PostCard key={post.slug} {...post} />
					))}
				</div>

				{links && <LinkList links={links} className='pt-12' />}
			</div>
		</section>
	)
}

export default BlogSection
