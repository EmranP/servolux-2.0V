export interface IGoalProps {
	title: string
	titleClassStyle: string
}

export const GoalSlider = ({ title, titleClassStyle }: IGoalProps) => {
	return (
		<div className={titleClassStyle}>
			<h1>{title}</h1>
		</div>
	)
}
