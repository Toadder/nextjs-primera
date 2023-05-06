import { slideY } from '@/src/app/styles/animations';
import SectionTitle from '@/src/shared/SectionTitle/SectionTitle';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const VideoBlock = ({ title, url }) => {
	const videoRef = useRef(null);
	const inView = useInView(videoRef, { once: true });

	return (
		<section className='section-paddings'>
			<div className='container-sm'>
				<motion.div
					variants={slideY('down')}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true }}
				>
					<SectionTitle styles='text-primary text-center'>{title}</SectionTitle>
				</motion.div>
				<div
					className='lg:mt-8 md:mt-6 mt-5 relative pb-[56.25%] w-full overflow-hidden bg-tertiary'
					ref={videoRef}
				>
					{inView && (
						<iframe
							className='absolute w-full h-full object-cover top-0 left-0'
							src={url}
							title={title}
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							allowFullScreen
						></iframe>
					)}
				</div>
			</div>
		</section>
	);
};

export default VideoBlock;
