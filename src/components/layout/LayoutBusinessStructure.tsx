import { ReactNode } from 'react'
import '../../App.scss'
import styleLayout from './layout.module.scss'

export interface ILayout {
	children: ReactNode
}

export const LayoutBusinessStructure = ({ children }: ILayout) => {
	return (
		<div id='business' className={styleLayout.layout__business}>
			{children}
		</div>
	)
}
