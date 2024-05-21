import { PropsWithChildren } from 'react'
import '../../App.scss'
import styleLayout from './layout.module.scss'

export const LayoutSustainability = ({ children }: PropsWithChildren) => {
	return (
		<section
			id='sustainability'
			// data-aos={'fade-up'}
			// data-aos-duration={'2000'}
			className={styleLayout.layout__sustainability}
		>
			<div className='max__container'>{children}</div>
		</section>
	)
}
