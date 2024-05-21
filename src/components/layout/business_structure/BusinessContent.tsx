import { useSwiper } from 'swiper/react'
import { businessInfo } from '../../../utils'
import { Btn } from '../../Btn'
import styleBusinessContent from './businessContent.module.scss'

export const BusinessContent = () => {
	const swiper = useSwiper()
	return (
		<div className='max__container max__container-blue'>
			<div className={styleBusinessContent.content}>
				{businessInfo.map(item => (
					<div key={item.id}>
						<h1>{item.title}</h1>
						<p>{item.text}</p>
					</div>
				))}
				<div onClick={() => swiper.slidePrev()}>
					<Btn title='Назад к Сервером' />
				</div>
			</div>
		</div>
	)
}
