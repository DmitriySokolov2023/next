import Header from '@/components/layout/header/Header'
import Meta from '@/components/seo/Meta'
import dynamic from 'next/dynamic'
import { FC, PropsWithChildren } from 'react'

const DynamicFooter = dynamic(() => import('./footer/Footer'), {
	ssr: false,
})

const Layout: FC<PropsWithChildren<IMeta>> = ({
	children,
	title,
	description,
}) => {
	return (
		<Meta title={title} description={description}>
			<Header />
			<main>{children}</main>
			<DynamicFooter />
		</Meta>
	)
}

export default Layout
