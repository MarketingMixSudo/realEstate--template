import React from 'react'
import Header from './header'
import directus from '@/lib/directus'
import { readItems } from '@directus/sdk'

const HeaderNew = async () => {
	const global = await directus.request<Global>(
		readItems('global', {
			fields: ['*'],
		})
	)
	return (
		<>
			<Header {...global} />
		</>
	)
}

export default HeaderNew
