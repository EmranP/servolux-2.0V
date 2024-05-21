import { ReactNode } from 'react'
import styleGoal from './goal.module.scss'

export interface IGoal {
	children: ReactNode
	title: string
}

export const Goal = ({ children, title }: IGoal) => {
	return (
		<div className={styleGoal.goal}>
			{children}
			<div className={styleGoal.goal__items}>
				<h2>{title}</h2>
				<p>
					В компании сформирована высокая производственная культура.Мы четок
					осознаем отвественность за деятельность, <br /> принятые решения и
					свое воздействие на внешниюю среду.
				</p>
			</div>
		</div>
	)
}
