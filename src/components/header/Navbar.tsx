import { AnimatePresence, motion } from 'framer-motion'
import { Rotate as Hamburger } from 'hamburger-react'
import { useRef, useState } from 'react'
import { useClickAway } from 'react-use'
import { microRoutes, routes, routesAbout } from '../../routes'
import './navbar.scss'
import '../../App.scss'
export const Navbar = () => {
	const [isOpen, setOpen] = useState(false)
	const burgerRef = useRef(null)

	useClickAway(burgerRef, () => setOpen(false))

	return (
		<div ref={burgerRef}>
			<Hamburger toggled={isOpen} size={20} toggle={setOpen} />
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
						className='fixed left-0 right-0 top-[3.0rem] p-5 pt-0 bg-blue-300 h-full overflow-auto z-50'
					>
						<div className='max__container'>
							<div className='flex space-x-5 pl-1 pt-12 text-white'>
								<h5>RU</h5>
								<h5>EN</h5>
								<h5>CN</h5>
							</div>
							<ul className='grid gap-2 pt-10'>
								{routesAbout.map((route, idx) => {
									return (
										<motion.li
											initial={{ scale: 1, opacity: 1 }}
											animate={{ scale: 1, opacity: 1 }}
											transition={{
												type: 'spring',
												stiffness: 260,
												damping: 20,
												delay: 0.1 + idx / 10,
											}}
											key={route.title}
										>
											<a
												onClick={() => setOpen(prev => !prev)}
												href={route.href}
												className=' w-full p-5'
											>
												<span className='text-white font-bold text-2xl hover:underline'>
													{route.title}
												</span>
											</a>
										</motion.li>
									)
								})}
							</ul>
							<ul className='grid gap-2 pt-20  '>
								{microRoutes.map((route, idx) => {
									return (
										<motion.li
											initial={{ scale: 0, opacity: 0 }}
											animate={{ scale: 1, opacity: 1 }}
											transition={{
												type: 'spring',
												stiffness: 260,
												damping: 20,
												delay: 0.1 + idx / 10,
											}}
											key={route.title}
											className='w-full p-5'
										>
											<a
												href={route.href}
												onClick={() => setOpen(prev => !prev)}
											>
												<span className='text-white font-bold text-base hover:underline'>
													{route.title}
												</span>
											</a>
										</motion.li>
									)
								})}
							</ul>
							<ul className='grid gap-2 pt-10'>
								{routes.map((route, idx) => {
									return (
										<motion.li
											initial={{ scale: 0, opacity: 0 }}
											animate={{ scale: 1, opacity: 1 }}
											transition={{
												type: 'spring',
												stiffness: 260,
												damping: 20,
												delay: 0.1 + idx / 10,
											}}
											key={route.title}
											className='w-full px-5 py-2'
										>
											<a
												onClick={() => setOpen(prev => !prev)}
												href={route.href}
												className=' w-full '
											>
												<span className='text-white font-bold text-2xl hover:underline'>
													{route.title}
												</span>
											</a>
										</motion.li>
									)
								})}
							</ul>
							<div className=' text-white pt-20 space-y-5 p-5 inline-block text-sm'>
								<a href='#' type='email' className='cursor-pointer '>
									feedback@servolux.com
								</a>
								<h1>+375 29 747 37 00</h1>
							</div>
							<p className='block p-5 text-white font-extralight '>
								© 1999-2024 ГК{' '}
							</p>
							<br />
							<br />
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}
