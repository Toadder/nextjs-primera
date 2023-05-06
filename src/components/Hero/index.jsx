import { motion } from 'framer-motion';
import Image from 'next/image';
import { slideY } from '@/src/app/styles/animations';

export const Hero = ({ imgUrl }) => {
	return (
		<motion.div 
			className='relative h-screen w-screen'
			variants={slideY('up')}
			initial='hidden'
  		whileInView='show'
			viewport={{ once: true, }}
		>
			<Image className='object-cover' fill src={imgUrl} alt='' />
		</motion.div>
	);
};

export default Hero;
