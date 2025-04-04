import ROUTES from '@/lib/routes'
import { formatDate, getAssetUrl } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
const PostCardList = ({ thumbnail, title, date_created, slug, short_description, categories }: Post) => {
	const postCategories = categories?.map(category => {
		return category.posts_categories_id
	})
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 group'>
			{thumbnail && title && (
				<Link href={ROUTES.blog.detail(slug)} className='overflow-hidden'>
					<Image
						src={getAssetUrl(thumbnail)}
						alt={title}
						width={420}
						height={280}
						className='w-full h-full  object-cover object-center group-hover:scale-105 duration-150'
					/>
				</Link>
			)}

			<div className='flex flex-col gap-6 justify-center py-2'>
				{postCategories?.slice(0, 1).map(category => (
					<Link href={ROUTES.blog.category(category.slug)} key={category.slug} className='text-sm'>
						{category.title}
						{postCategories.length > 2 && <span>+{postCategories.length - 1}</span>}
					</Link>
				))}
				<Link href={ROUTES.blog.detail(slug)}>
					<h3 className='heading--small mr-3'>{title}</h3>
				</Link>
				{date_created && <span className='text-xs'>{formatDate(date_created)}</span>}
                <Link href={ROUTES.blog.detail(slug)}>
				<p className='line-clamp-4 !text-[15px] prose-content'>{short_description}</p>
                </Link>

                <Link href={ROUTES.blog.detail(slug)} className='link'>
					Czytaj więcej...</Link>
			</div>
		</div>
	)
}

export default PostCardList
