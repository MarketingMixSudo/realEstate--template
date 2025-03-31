// completed

import TopBar from '@/components/header/topbar'
import NavbarInitial from '@/components/header/navbar-initial'

const HeaderInitial = (global: Global) => {
	return (
		<>
			<TopBar {...global}/>
            <NavbarInitial {...global}/>
		</>
	)
}

export default HeaderInitial