import { fadeIn } from '@/src/app/styles/animations';
import { fontspring } from '@/src/fonts';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import classes from './Cities.module.scss';

const City = ({ name, img, path }) => {
	return (
		<motion.div
			initial='hidden'
			whileInView='show'
			variants={fadeIn()}
			viewport={{ once: true }}
			className={`${classes.city}`}
		>
			<Link href={path} className='flex flex-col h-full'>
				<div className='overflow-hidden xl:h-[598px] lg:h-[450px] md:h-[380px] h-[320px]'>
					<Image
						className='object-cover w-full animated h-full'
						width={498}
						height={598}
						src={img}
						alt=''
					/>
				</div>
				<div
					className={`bg-[#336468] leading-[1.2] flex items-center justify-center grow text-white text-center xl:text-[37px] lg:text-[30px] md:text-[26px] text-[20px] lg:py-7 md:py-5 py-4 lg:px-4 px-3 ${fontspring.className}`}
				>
					{name}
				</div>
			</Link>
		</motion.div>
	);
};

export default City;
