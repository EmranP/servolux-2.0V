// ! link
import {
	BriefcaseBusiness,
	Factory,
	Goal,
	Home,
	Mailbox,
	Recycle,
} from 'lucide-react'
import { Link } from 'react-scroll'
import './App.scss'
// export interface INavigation {
// 	Link: LinkProps
// 	Navigation: () => JSX.Element
// }

export const Navigation = () => {
	return (
		<nav className='fixed bottom-2 mx-auto lg:bottom-8 w-full z-10 overflow-hidden'>
			<div className='container mx-auto px-2'>
				{/* nav inner */}
				<div className='w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex items-center justify-between text-white/50'>
					<Link
						to='home'
						className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
						activeClass='active'
						smooth={true}
						spy={true}
					>
						<Home />
					</Link>
					<Link
						to='business'
						className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
						activeClass='active'
						smooth={true}
						spy={true}
					>
						<BriefcaseBusiness />
					</Link>
					<Link
						to='advantage'
						className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
						activeClass='active'
						smooth={true}
						spy={true}
					>
						<Factory />
					</Link>
					<Link
						to='sustainability'
						className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
						activeClass='active'
						smooth={true}
						spy={true}
					>
						<Recycle />
					</Link>
					<Link
						to='goal'
						className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
						activeClass='active'
						smooth={true}
						spy={true}
					>
						<Goal />
					</Link>
					<Link
						to='news'
						className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
						activeClass='active'
						smooth={true}
						spy={true}
					>
						<Mailbox />
					</Link>
				</div>
			</div>
		</nav>
	)
}
