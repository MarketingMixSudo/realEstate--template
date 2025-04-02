
import { getPageData, getPosts, getTotalItemsCount } from '@/lib/queries'
import BlocksRenderer from '@/components/blocks/blocks-renderer'
import PostCard from '@/components/post-card'
import Pagination from '@/components/pagination'

type QueryParams = {
  searchParams: {
    page?: string;
  };}

const Blog = async ({ searchParams }: QueryParams) => {
  const page = parseInt(searchParams.page ?? '1') || 1
  const limit = 4
  const offset = (page - 1) * limit

  const body = await getPageData<PagePredefined>('page_blog_list')
  const posts = await getPosts('-date_created', limit, offset)
  const totalCount = await getTotalItemsCount('posts')
  const totalPages = Math.ceil(totalCount / limit)

  return (
    <>
      <BlocksRenderer blocks={body.blocks} />

      <section className='section !pb-20'>
        <div className='wrapper !max-w-[1800px]'>
          <div className='flex justify-between items-center'>
            <span>{totalCount} artykuły czekają na Ciebie</span>
          </div>

          <div className='grid grid-cols-3 gap-12 mt-10'>
            {posts.map(post => (
              <PostCard key={post.slug} {...post} />
            ))}
          </div>

          {totalPages > 1 && <Pagination currentPage={page} totalPages={totalPages} />}
        </div>
      </section>
    </>
  )
}

export default Blog
