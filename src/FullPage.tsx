import 'aos'
import 'aos/dist/aos.css'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import './App.scss'
// import { Navigation } from './Navigation'
import ReactFullPage from '@fullpage/react-fullpage'
import { Footer } from './components/footer/Footer'
import { LayoutAdvantage } from './components/layout/LayoutAdvantage'
import { LayoutBusinessStructure } from './components/layout/LayoutBusinessStructure'
import { LayoutCompanyGoal } from './components/layout/LayoutCompanyGoal'
import { LayoutMain } from './components/layout/LayoutMain'
import { LayoutNews } from './components/layout/LayoutNews'
import { LayoutSustainability } from './components/layout/LayoutSustainability'
import { Advantage } from './components/layout/advantage/Advantage'
import { AdvantageSlider } from './components/layout/advantage/AdvantageSlider'
import classesAdvantage from './components/layout/advantage/advantage.module.scss'
import { BusinessContent } from './components/layout/business_structure/BusinessContent'
import { BusinessMain } from './components/layout/business_structure/BusinessMain'
import { BusinessSwiper } from './components/layout/business_structure/BusinessSwiper'
import { Goal } from './components/layout/company-goal/Goal'
import { GoalSlider } from './components/layout/company-goal/GoalSlider'
import styleGoal from './components/layout/company-goal/goal.module.scss'
import { MainAction } from './components/layout/main/MainAction'
import { MainContent } from './components/layout/main/MainContent'
import { News } from './components/layout/news/News'
import { SustainabilityAbout } from './components/layout/sustainability/SustainabilityAbout'
import { SustainabilityBox } from './components/layout/sustainability/SustainabilityBox'
import { SustainabilityColum } from './components/layout/sustainability/SustainabilityColum'

export const FullPage = () => (
	<ReactFullPage
		licenseKey={'FULL_PAGE'}
		scrollingSpeed={1000}
		scrollHorizontally={false}
		autoScrolling={true}
		scrollHorizontallyKey={'SCROLL_KEY'}
		credits={{ enabled: false }}
		render={({ fullpageApi }) => {
			return (
				<>
					<ReactFullPage.Wrapper>
						<div className='bg-no-repeat bg-cover overflow-hidden'>
							<div className='section'>
								<LayoutMain>
									<MainContent />
									<MainAction onClick={() => fullpageApi.moveSectionDown()} />
								</LayoutMain>
							</div>
							<div className='section'>
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
							</div>
							<div className='section'>
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
							</div>
							<div className='section'>
								<LayoutSustainability>
									<SustainabilityColum>
										<SustainabilityBox />
										<SustainabilityAbout />
									</SustainabilityColum>
								</LayoutSustainability>
							</div>
							<div className='section'>
								<LayoutCompanyGoal>
									<Goal title='Миссия компании'>
										<Swiper
											spaceBetween={15}
											slidesPerView={1.2}
											// data-aos={'fade-left'}
											// data-aos-duration={'2000'}
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
							</div>
							<div className='section'>
								<LayoutNews>
									<News />
								</LayoutNews>
							</div>
							<div className='section'>
								<Footer />
							</div>
							{/* <Navigation /> */}
						</div>
					</ReactFullPage.Wrapper>
				</>
			)
		}}
	></ReactFullPage>
)
