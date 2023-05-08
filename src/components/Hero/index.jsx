import { slideY } from '@/src/app/styles/animations';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const Hero = ({ imgUrl }) => {
	return (
		<motion.div
			style={{
				height: '100svh',
			}}
			className='relative w-screen animated'
			variants={slideY('up')}
			initial='hidden'
			whileInView='show'
			viewport={{ once: true }}
		>
			<Image priority className='object-cover animated' fill src={imgUrl} alt='' />
		</motion.div>
	);
};

export default Hero;
