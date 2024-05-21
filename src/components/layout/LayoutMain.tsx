import { ReactNode } from 'react'
import styleLayout from './layout.module.scss'

export interface ILayout {
	children: ReactNode
}

export const LayoutMain = ({ children }: ILayout) => {
	return (
		<div
			id='home'
			data-aos={'zoom-up-down'}
			data-aos-duration={'2000'}
			className={styleLayout.layout}
		>
			<div className='max-w-[1600px] mx-auto'>
				<div className='flex flex-col justify-between min-h-[783px]'>
					<div></div>
					{children}
				</div>
			</div>
		</div>
	)
}
