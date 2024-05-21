import { PropsWithChildren } from 'react'
import '../../App.scss'

export const LayoutNews = ({ children }: PropsWithChildren) => {
	return (
		<section id='news'>
			<div className='max__container'>{children}</div>
		</section>
	)
}
