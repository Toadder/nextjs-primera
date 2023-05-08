import { navLinks } from '@src/constants/constants';
import { motion } from 'framer-motion';
import Link from 'next/link.js';
import React from 'react';

// Variants for mobile menu
const menuVariants = {
	open: {
		height: 'auto',
		transition: {
			type: 'spring',
			bounce: 0,
			duration: 0.5,
			delayChildren: 0.3,
		},
	},
	closed: {
		height: 0,
		transition: {
			type: 'spring',
			bounce: 0,
			duration: 0.4,
			delay: 0.5,
		},
	},
};

const liVariants = {
	open: {
		opacity: 1,
		y: 0,
		transition: {
			type: 'spring',
			stiffness: 300,
			damping: 24,
		},
	},
	closed: {
		opacity: 0,
		y: 20,
		transition: {
			duration: 0.1,
		},
	},
};
// Variants for mobile menu

const DesktopMenu = () => {
	return (
		<nav className='hidden md:block'>
			<ul className='flex items-center xl:gap-11 gap-6'>
				{navLinks.map(link => (
					<li key={link.id}>
						<Link
							href={link.path}
							className='
										py-0.5 xl:text-xl text-lg text-white font-light relative
										before:block before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[1.5px] before:transition-all 
										hover:before:w-full before:duration-300 before:bg-secondary'
						>
							{link.name}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

const MobileMenu = ({ isOpen, setIsOpen }) => {

	return (
		<motion.nav
			initial={false}
			animate={isOpen ? 'open' : 'closed'}
			variants={menuVariants}
			className='md:hidden block absolute top-full left-0 w-full h-full z-[1] bg-primary overflow-hidden border-t border-secondary'
		>
			<motion.ul
				variants={{
					open: { transition: { staggerChildren: 0.1 } },
					closed: {
						transition: { staggerChildren: 0.1, staggerDirection: -1 },
					},
				}}
				className='py-1.5'
			>
				{navLinks.map(link => (
					<motion.li
						key={link.id}
						variants={liVariants}
						className='text-center py-1.5'
					>
						<Link
							className='uppercase text-secondary inline-block font-semibold'
							href={link.path}
							onClick={() => setIsOpen(false)}
						>
							{link.name}
						</Link>
					</motion.li>
				))}
			</motion.ul>
		</motion.nav>
	);
};

const HeaderMenu = ({ type, isOpen, setIsOpen }) => {
	if (type === 'desktop') return <DesktopMenu />;
	return <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />;
};

export default React.memo(HeaderMenu);
