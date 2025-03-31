//ready

import Link from 'next/link'
import { Facebook, Linkedin, Instagram } from 'lucide-react'

const Social = ({
	name,
	link,
	large = false,
}: {
	name: 'facebook' | 'instagram' | 'linkedin'
	link: string
	large?: boolean
}) => {
	const iconClass = `size-${large ? '6' : '4'} group-hover:text-primary-400 duration-150`

	const icons: Record<string, React.ReactNode> = {
		facebook: <Facebook className={iconClass} />,
		instagram: <Instagram className={iconClass} />,
		linkedin: <Linkedin className={iconClass} />,
	}

	return (
		<li>
			<Link
				href={link}
				className='flex items-center gap-2 group'
				target='_blank'
				rel='noopener noreferrer nofollow'
				aria-label={name}>
				{icons[name] || null}
			</Link>
		</li>
	)
}

export default Social
