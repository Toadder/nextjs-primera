import { slideY } from '@/src/app/styles/animations';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export const Hero = ({ imgUrl }) => {
	const [isLoaded, setIsLoaded] = useState(false);

	return (
		<motion.div
			className='relative xl:h-screen md:h-[700px] h-[600px] w-screen'
			variants={slideY('up')}
			initial='hidden'
			whileInView={isLoaded && 'show'}
			viewport={{ once: true }}
		>
			<Image 
				priority 
				className='object-cover' 
				fill 
				src={imgUrl} 
				alt=''
				onLoad={() => setIsLoaded(true)}	
			/>
		</motion.div>
	);
};

export default Hero;
