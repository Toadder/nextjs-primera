import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import classes from './Header.module.scss';

const HeaderLogo = () => {
	return (
		<Link
			href='/'
			className='md:w-full xl:max-w-[213px] md:max-w-[183px] relative z-[3] mr-auto md:mr-0'
		>
			<Image
				className={`${classes.logo} animated xl:w-[128px] w-[100px] md:w-[120px]`}
				src='/logo.png'
				alt=''
				width={128}
				height={70}
			/>
		</Link>
	);
};

export default React.memo(HeaderLogo);
