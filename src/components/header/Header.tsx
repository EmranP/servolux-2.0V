import { Codesandbox } from 'lucide-react'
import { Navbar } from './Navbar'

export const Header = () => {
	return (
		<header className=' bg-white z-50 fixed top-0 right-0 left-0'>
			<div className='max-w-[1600px] mx-auto px-5 flex justify-between items-center'>
				<div className='flex gap-3'>
					<Codesandbox />
					<h1 className='uppercase font-bold '>серволюкс</h1>
				</div>
				<Navbar />
			</div>
		</header>
	)
}
