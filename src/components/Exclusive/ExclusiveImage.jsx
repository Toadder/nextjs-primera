import { motion } from 'framer-motion';
import { slideX } from '@/src/app/styles/animations';
import Image from 'next/image';

const ExclusiveImage = () => {
	return (
		<div className='lg:flex-[0_0_50%]  lg:-translate-x-full'>
			<motion.div
				className='relative w-full lg:h-full md:h-[450px] h-[350px]'
				variants={slideX('left')}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true }}
			>
				<Image className='object-cover' fill alt='' src='/home/exclusive/01.jpg' />
			</motion.div>
		</div>
	);
};

export default ExclusiveImage;
