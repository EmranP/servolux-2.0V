import { PropsWithChildren } from 'react'
import '../../App.scss'

export const LayoutAdvantage = ({ children }: PropsWithChildren) => {
	return (
		<section id='advantage'>
			<div className='max__container'>{children}</div>
		</section>
	)
}
