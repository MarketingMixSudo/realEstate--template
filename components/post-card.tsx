//completed

import ROUTES from '@/lib/routes'
import { formatDate, getAssetUrl } from '@/lib/utils'

import Image from 'next/image'
import Link from 'next/link'

const PostCard = ({ slug, thumbnail, title, date_created, categories }: Post) => {
	const postCategories = categories?.map(category => {
		return category.posts_categories_id
	})



	return (
		<Link href={`/property/${slug}`} className='shadow-lg duration-150 hover:-translate-y-1  hover:shadow-xl'>
			{thumbnail && title && (
				<Image
					src={getAssetUrl(thumbnail)}
					alt={title}
					width={420}
					height={280}
					className='w-full aspect-[3/2] object-cover object-center'
				/>
			)}

			<div className='bg-primary-400 text-white flex flex-col justify-center items-center text-center px-3 py-6 gap-2'>
				{date_created && <span className='text-sm'>{formatDate(date_created)}</span>}

				<h3 className='text-2xl line-clamp-1'> {title}</h3>

				{postCategories?.slice(0, 1).map(category => (
					<Link href={ROUTES.blog.category(category.slug)} key={category.slug} className='text-sm'>
						{category.title}
						{postCategories.length > 2 && <span>+{postCategories.length - 1}</span>}
					</Link>
				))}
			</div>
		</Link>
	)
}

export default PostCard
