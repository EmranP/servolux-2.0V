import { ChevronDown } from 'lucide-react'
import { Btn } from '../../Btn'

export const MainAction = ({ onClick }: { onClick: () => void }) => {
	return (
		<div className='flex justify-between items-center px-14 pb-10'>
			<Btn title='О кампании' />
			<div
				className='bg-slate-400 p-2 rounded-full cursor-pointer'
				onClick={onClick}
			>
				<ChevronDown color='white' />
			</div>
		</div>
	)
}
