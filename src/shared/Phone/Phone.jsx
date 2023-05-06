import { constants } from '@src/constants/constants';
import Image from 'next/image';
import React from 'react';

const Phone = ({ img, styles = '', hideText = false }) => (
	<div className='flex lg:justify-start justify-center'>
		<a
			href={`tel:${constants.phoneNumber}`}
			className={`relative z-[2] inline-flex items-center 
		xl:gap-3 gap-2 text-white animated hover:opacity-70
		${styles ? styles : ''}`}
		>
			<Image
				className='xl:w-[28px] xl:h-[28px] md:w-[20px] md:h-[20px] w-[23px] h-[23px]'
				src={img}
				alt=''
				width={28}
				height={28}
			/>
			<span className={`${hideText ? 'md:inline-block hidden' : ''}`}>
				{constants.phoneNumber}
			</span>
		</a>
	</div>
);

export default React.memo(Phone);
