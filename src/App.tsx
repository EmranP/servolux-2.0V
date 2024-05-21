import 'aos'
import Aos from 'aos'
import 'aos/dist/aos.css'
import 'swiper/css'
import './App.scss'
// import { Navigation } from './Navigation'
import { PropsWithChildren } from 'react'
import { Header } from './components/header/Header'
export default function App({ children }: PropsWithChildren) {
	Aos.init()
	return (
		<>
			<Header />
			{children}
		</>
	)
}
{
	/* <div className='bg-no-repeat bg-cover overflow-hidden'>
<Header />
<LayoutMain>
	<MainContent />
	<MainAction />
</LayoutMain>
<LayoutBusinessStructure>
	<BusinessSwiper>
		<SwiperSlide>
			<BusinessMain />
		</SwiperSlide>
		<SwiperSlide>
			<BusinessContent />
		</SwiperSlide>
	</BusinessSwiper>
</LayoutBusinessStructure>
<LayoutAdvantage>
	<Advantage subtitle='Контекст ведения бизнеса'>
		<Swiper spaceBetween={15} slidesPerView={1.2}>
			<SwiperSlide>
				<AdvantageSlider
					title='Управление'
					subtitle='операционная деятельност'
					titleClassStyle={classesAdvantage.item__img}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<AdvantageSlider
					title='Технологии'
					subtitle='производство'
					titleClassStyle={classesAdvantage.item__img_two}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<AdvantageSlider
					title='Acсортимент'
					subtitle='потребительские предпочтения'
					titleClassStyle={classesAdvantage.item__img_three}
				/>
			</SwiperSlide>
		</Swiper>
	</Advantage>
</LayoutAdvantage>
<LayoutSustainability>
	<SustainabilityColum>
		<SustainabilityBox />
		<SustainabilityAbout />
	</SustainabilityColum>
</LayoutSustainability>
<LayoutCompanyGoal>
	<Goal title='Миссия компании'>
		<Swiper
			spaceBetween={15}
			slidesPerView={1.2}
			data-aos={'fade-left'}
			data-aos-duration={'2000'}
		>
			<SwiperSlide>
				<GoalSlider
					title='создаем качественные базопасные продукты'
					titleClassStyle={styleGoal.item__img}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<GoalSlider
					title='повышаем уровень жизни людей'
					titleClassStyle={styleGoal.item__img_two}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<GoalSlider
					title='бережно используем ресурсы земли'
					titleClassStyle={styleGoal.item__img_three}
				/>
			</SwiperSlide>
		</Swiper>
	</Goal>
</LayoutCompanyGoal>
<LayoutNews>
	<News />
</LayoutNews>
<Footer />
{/* <Navigation /> */
}
// </div> */}
