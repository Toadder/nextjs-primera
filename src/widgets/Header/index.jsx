import Phone from '@src/shared/Phone/Phone'
import React from 'react'
import phoneImg from '../../../public/icons/phone_beige.png'

import classes from './Header.module.scss'
import HeaderBurger from './HeaderBurger'
import HeaderLogo from './HeaderLogo'
import HeaderMenu from './HeaderMenu.jsx'

const Header = () => {
	const [isScrolled, setIsScrolled] = React.useState(false);
	const [isOpen, setIsOpen] = React.useState(false);

	const scrollChecker = () => {
		if (window.scrollY > 0) setIsScrolled(true);
		else setIsScrolled(false);
	};

	React.useEffect(() => {
		setIsScrolled(window.scrollY > 0);
		window.addEventListener('scroll', scrollChecker);

		return () => window.removeEventListener('scroll', scrollChecker);
	}, []);

	return (
		<header
			className={`${classes.header}  ${
				isScrolled ? classes.header_scrolled : ''
			}
				fixed top-0 left-0 w-full z-[20] animated`}
		>
			<div className='container flex items-center justify-between gap-3.5'>
				<HeaderLogo />
				<HeaderMenu type='desktop' />
				<Phone hideText={true} styles='xl:text-xl text-lg' img={phoneImg} />

				{/* Mobile */}
				<HeaderBurger isOpen={isOpen} setIsOpen={setIsOpen} />
				<HeaderMenu type='mobile' isOpen={isOpen} setIsOpen={setIsOpen} />
				{/* Mobile */}
			</div>
		</header>
	);
};

export default React.memo(Header);
