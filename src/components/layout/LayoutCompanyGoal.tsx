import { PropsWithChildren } from 'react'
import '../../App.scss'

export const LayoutCompanyGoal = ({ children }: PropsWithChildren) => {
	return (
		<section id='goal'>
			<div className='max__container'>{children}</div>
		</section>
	)
}
