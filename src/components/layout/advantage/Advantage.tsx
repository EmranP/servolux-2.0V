import { ReactNode } from 'react'
import classesAdvantage from './advantage.module.scss'

export interface IAdvantage {
	children: ReactNode
	subtitle: string
}

export const Advantage = ({ children, subtitle }: IAdvantage) => {
	return (
		<div className={classesAdvantage.advantage}>
			{children}
			<div className='mt-20 text-slate-700 font-bold'>{subtitle}</div>
		</div>
	)
}
