import { slideY } from '@/src/app/styles/animations';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const Hero = ({ imgUrl }) => {
	return (
		<motion.div
			className='relative xl:h-screen h-[700px] w-screen'
			variants={slideY('up')}
			initial='hidden'
			whileInView='show'
			viewport={{ once: true }}
		>
			<Image priority className='object-cover' fill src={imgUrl} alt='' />
		</motion.div>
	);
};

export default Hero;
