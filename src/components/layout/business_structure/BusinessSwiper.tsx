import { PropsWithChildren } from 'react'
import 'swiper/css'
import { Swiper } from 'swiper/react'

export const BusinessSwiper = ({ children }: PropsWithChildren) => {
	return (
		<Swiper
			// onSlideChange={() => console.log('slide change')}
			// onSwiper={swiper => console.log(swiper)}
			spaceBetween={50}
			slidesPerView={1}
		>
			{children}
		</Swiper>
	)
}
