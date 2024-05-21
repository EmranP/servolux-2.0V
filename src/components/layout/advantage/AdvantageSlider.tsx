import classesAdvantage from './advantage.module.scss'

export interface IAdvantageProps {
	title: string
	subtitle: string
	titleClassStyle: string
}

export const AdvantageSlider = ({
	title,
	subtitle,
	titleClassStyle,
}: IAdvantageProps) => {
	return (
		<div className={classesAdvantage.advantage__items}>
			<h1>{title}</h1>
			<div className={titleClassStyle}>
				<h2>{subtitle}</h2>
			</div>
		</div>
	)
}
