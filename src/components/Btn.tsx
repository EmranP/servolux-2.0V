export interface IBtn {
	title: string
}

export const Btn = ({ title }: IBtn) => {
	return (
		<>
			<button className='hover:bg-sky-400 py-2 px-4 rounded-2xl transition-colors text-white outline outline-1 hover:outline-none outline-white/20'>
				{title}
			</button>
		</>
	)
}
