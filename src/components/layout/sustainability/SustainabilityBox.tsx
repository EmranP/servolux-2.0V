import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { sustainabilityInfoBox } from '../../../utils'
export const SustainabilityBox = () => {
	return (
		<Swiper spaceBetween={30} slidesPerView={1.2}>
			{sustainabilityInfoBox.map(box => (
				<SwiperSlide key={box.id}>
					<div
						key={box.id}
						className='text-white uppercase font-bold max-w-[300px] cursor-pointer hover:bg-blue-500 py-6 px-5 transition-colors border hover:border-none'
					>
						<h1>{box.title}</h1>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	)
}
