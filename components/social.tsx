//ready

import Link from 'next/link'

import { Facebook, Linkedin, Instagram } from 'lucide-react'

const iconClass = 'size-4 group-hover:text-primary-400 duration-150'

const icons: Record<string, React.ReactNode> = {
	facebook: <Facebook className={iconClass} />,
	instagram: <Instagram className={iconClass} />,
	linkedin: <Linkedin className={iconClass} />,
}

const Social = ({ name, link }: { name: keyof typeof icons; link: string }) => {
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
