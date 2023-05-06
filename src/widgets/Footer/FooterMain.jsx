import Image from 'next/image';
import Link from 'next/link';
import FooterNav from './ui/FooterNav';
import FooterTitle from './ui/FooterTitle';

import { cities, constants, navLinks } from '@src/constants/constants';
import Phone from '@src/shared/Phone/Phone';

import phoneImg from '../../../public/icons/phone_white.png';

const FooterMain = () => {
	return (
		<div
			className='
			flex items-start justify-around lg:text-left text-center lg:gap-8 md:gap-10 gap-9 
			xl:py-16 md:py-12 py-8 lg:flex-row flex-col
		'
		>
			<Link href='/' className='lg:mx-0 mx-auto'>
				<Image
					className='md:w-[198px] md:h-[109px] w-[149px] h-[72px]'
					src='/logo.png'
					alt=''
					width={198}
					height={109}
				/>
			</Link>

			<div className='lg:mt-14 mt-0 lg:w-auto w-full'>
				<FooterTitle>Company Info</FooterTitle>
				<FooterNav items={navLinks} />
			</div>

			<div className='lg:mt-14 mt-0 lg:w-auto w-full'>
				<FooterTitle>Listings</FooterTitle>
				<FooterNav items={cities} />
			</div>

			<div className='lg:max-w-[310px] max-w-full lg:mt-14 mt-0 lg:w-auto w-full'>
				<FooterTitle>Get In Touch</FooterTitle>
				<div className='flex flex-col lg:gap-4 md:gap-3 gap-2'>
					<div className='text-white md:text-lg text-base'>
						{constants.address}
					</div>
					<Phone img={phoneImg} styles='md:text-lg text-base' />
					<div>
						<a
							className='md:text-lg text-base text-white animated hover:opacity-70'
							href={`mailto:${constants.email}`}
						>
							{constants.email}
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FooterMain;
