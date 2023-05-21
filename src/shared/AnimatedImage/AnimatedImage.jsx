import { useState } from 'react';
import { fadeIn } from '@/src/app/styles/animations';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AnimatedImage = ({ imgUrl, styles = '' }) => {
	const [isLoaded, setIsLoaded] = useState(false);

	return (
		<motion.div
			className={`relative ${styles}`}
			variants={fadeIn()}
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
}

export default AnimatedImage