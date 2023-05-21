import { slideX } from '@/src/app/styles/animations';
import { motion } from 'framer-motion';
import Image from 'next/image';
import classes from './styles.module.scss';

const PropertyAmenities = () => (
	<motion.div
		variants={slideX('right')}
		initial='hidden'
		whileInView='show'
		viewport={{ once: true }}
		className={`${classes.card} `}
	>
		<div className='text-primary font-medium md:text-[22px] text-[20px] md:mb-5 mb-2'>
			Amenities
		</div>
		<div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-x-6 gap-x-4 md:gap-y-4 gap-y-3'>
			{Array(9)
				.fill('')
				.map((_, index) => (
					<div
						key={index}
						className='flex flex-row md:gap-5 gap-4 items-center md:text-[20px] text-[17px] leading-tight'
					>
						<div className='md:flex-[0_0_25px] flex-[0_0_19px]'>
							<Image src='/property/check.png' width={25} height={19} alt='' />
						</div>
						<div>Air Conditioning</div>
					</div>
				))}
		</div>
	</motion.div>
);

export default PropertyAmenities;
