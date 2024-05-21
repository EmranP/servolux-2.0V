import { newsInfo } from '../../../utils'
import styleNews from './news.module.scss'

export const News = () => {
	return (
		<div className={styleNews.news}>
			<h1>Новости</h1>
			{newsInfo.map(news => (
				<div className={styleNews.news__items} key={news.id}>
					<img src={news.image} alt={news.alt} />
					<h2>{news.dataTime}</h2>
					<p>{news.title}</p>
				</div>
			))}
			<button className='hover:bg-sky-400 mb-5 py-2 px-4 rounded-2xl transition-colors text-black outline  outline-1 hover:outline-none outline-black/20 hover:text-white  hover:border-none'>
				Пресс-цнтр
			</button>
		</div>
	)
}
