import directus from '@/lib/directus'
import { Global } from '@/lib/schemas'
import { readItems } from '@directus/sdk'

import React from 'react'
import Topbar from './topbar'
import Navbar from './navbar'

const Header = async () => {
	const global = await directus.request<Global>(
		readItems('global', {
			fields: ['*'],
		})
	)

	console.log(global)

	return (
		<header>
			<Topbar {...global} />
			<Navbar {...global} />
		</header>
	)
}

export default Header
