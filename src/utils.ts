import imageAI from './assets/10.png'
import imageSEO from './assets/11.png'
import imageNews from './assets/12.png'
import imageGoal from './assets/13.png'
import imagePC from './assets/14.png'

// ? Interface
export interface IBusinessInfo {
	id: number
	title: string
	text: string
}

export interface ISustainabilityBox {
	id: number
	title: string
}

export interface ISustainabilityAbout {
	id: number
	title: string
	text: string
}
export interface INews {
	id: number
	image: string
	dataTime: string
	title: string
	alt: string
}

// !data

export const businessInfo: IBusinessInfo[] = [
	{
		id: 1,
		title: 'Торговое представительстов (Российская Федерация)',
		text: `Далеко-далеко, за словесными.
		Далеко-далеко, за словесными горами в стране гласных и согласных живут рыбные тексты. Он взгляд это ведущими над выйти назад снова коварных переписали, имени алфавит заманивший обеспечивает своих рыбными парадигматическая рот правилами возвращайся рекламных знаках однажды буквоград. Запятой, знаках языком! `,
	},
]

export const sustainabilityInfoBox: ISustainabilityBox[] = [
	{
		id: 1,
		title: 'ответственное ведение бизнеса',
	},
	{
		id: 2,
		title: 'экологическая ответсвенность',
	},
	{
		id: 3,
		title: 'безопасность продукции',
	},
	{
		id: 4,
		title: 'современные технологии',
	},
]

export const sustainabilityInfoAbout: ISustainabilityAbout[] = [
	{
		id: 1,
		title: 'Устойчивое развитие',
		text: `Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Переписывается, мир! Последний ему свое одна, первую до своих он рекламных гор жаренные, это домах!`,
	},
]

export const newsInfo: INews[] = [
	{
		id: 1,
		image: imageAI,
		dataTime: '10 апреля 2024',
		alt: 'AI',
		title: `<<ЧАТ-БОТ <<КОНТРОЛЬ КАЧЕСТВА ТОВАРА>>: AI На ЗАЩИТЕ ПОТРЕБИТЕЛЯ И БИЗНЕСА`,
	},
	{
		id: 2,
		image: imageSEO,
		dataTime: '19 марта 2024',
		alt: 'SEO',
		title: `<<ЧАТ-БОТ <<КОНТРОЛЬ КАЧЕСТВА ТОВАРА>>: AI На ЗАЩИТЕ ПОТРЕБИТЕЛЯ И БИЗНЕСА`,
	},
	{
		id: 3,
		image: imageNews,
		dataTime: '31 декабря 2023',
		alt: 'News',
		title: `<<ЧАТ-БОТ <<КОНТРОЛЬ КАЧЕСТВА ТОВАРА>>: AI На ЗАЩИТЕ ПОТРЕБИТЕЛЯ И БИЗНЕСА`,
	},
	{
		id: 4,
		image: imageGoal,
		dataTime: '08 августа 2023',
		alt: 'Goal',
		title: `<<ЧАТ-БОТ <<КОНТРОЛЬ КАЧЕСТВА ТОВАРА>>: AI На ЗАЩИТЕ ПОТРЕБИТЕЛЯ И БИЗНЕСА`,
	},
	{
		id: 5,
		image: imagePC,
		dataTime: '20 марта 2023',
		alt: 'PC',
		title: `<<ЧАТ-БОТ <<КОНТРОЛЬ КАЧЕСТВА ТОВАРА>>: AI На ЗАЩИТЕ ПОТРЕБИТЕЛЯ И БИЗНЕСА`,
	},
]
