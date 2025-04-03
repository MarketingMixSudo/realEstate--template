import { getPageData, getPosts, getTotalItemsCount } from '@/lib/queries'
import BlocksRenderer from '@/components/blocks/blocks-renderer'
import PostCard from '@/components/post-card'
import Pagination from '@/components/pagination'
import { Metadata } from 'next'

import { getGridClass, metadata } from '@/lib/utils'
import ROUTES from '@/lib/routes'
import PostCardList from '@/components/post-card-list'

type QueryParams = {
	searchParams: {
		page?: string
	}
}

export async function generateMetadata(): Promise<Metadata | undefined> {
	return metadata('page_blog_list', ROUTES.blog.list)
}

const Blog = async ({ searchParams }: QueryParams) => {
	const body = await getPageData<PageBlogList>('page_blog_list')

	const page = parseInt(searchParams.page ?? '1') || 1
	const limit = body.items_count
	const offset = (page - 1) * limit

	const posts = await getPosts('-date_created', limit, offset)
	const totalCount = await getTotalItemsCount('posts')
	const totalPages = Math.ceil(totalCount / limit)

	console.log(body)

	return (
		<>
			<BlocksRenderer blocks={body.blocks} />

			<section className='section !pb-20'>
				{/* <div className='wrapper !max-w-[1800px]'> */}
				<div className='wrapper !max-w-screen-xl'>
					<div className='flex justify-between items-center'>
						<h2 className='font-text'> <span className='font-semibold '>{totalCount} artykuły </span> czekają na Ciebie</h2>
					</div>

					{body.listing_type === 'grid' ? (
						<div className={getGridClass(body.grid_columns)}>
							{posts.map(post => (
								<PostCard key={post.slug} {...post} />
							))}
						</div>
					) : (
						<ul className='flex flex-col gap-12 mt-12'>
							{posts.map(post => (
								<li key={post.slug}>
									<PostCardList {...post}/>
								</li>
							))}
						</ul>
					)}

					{totalPages > 1 && <Pagination currentPage={page} totalPages={totalPages} />}
				</div>
			</section>
		</>
	)
}

export default Blog
