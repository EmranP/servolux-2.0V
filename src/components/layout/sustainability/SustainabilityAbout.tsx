import { sustainabilityInfoAbout } from '../../../utils'
import { Btn } from '../../Btn'

export const SustainabilityAbout = () => {
	return (
		<div className='absolute bottom-0 left-0 text-white sm:pl-4 pl-8 pb-5 max-w-[400px] space-y-10'>
			{sustainabilityInfoAbout.map(about => (
				<div key={about.id} className='space-y-10'>
					<h1 className='font-bold text-2xl'>{about.title}</h1>
					<p className='font-normal text-white/90'>{about.text}</p>
				</div>
			))}
			<Btn title='Подробнее' />
		</div>
	)
}
