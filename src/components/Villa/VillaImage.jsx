import { slideX } from '@/src/app/styles/animations';
import { motion } from 'framer-motion';
import Image from 'next/image';

const VillaImage = () => {
	return (
		<div className='lg:flex-[0_0_50%]  lg:-translate-x-full lg:mt-0 md:mt-8 mt-6'>
			<motion.div
				className='relative w-full lg:h-full md:h-[450px] h-[350px]'
				variants={slideX('left')}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true }}
			>
				<Image className='object-cover' fill alt='' src='/home/villa/01.jpg' />
				<div className='absolute lg:bottom-[45px] lg:left-0 lg:translate-x-[-25%] lg:right-auto lg:translate-y-0 translate-y-1/4 bottom-0 left-[15px] right-[15px] bg-[#faf6f0] text-center xl:py-14 xl:px-16 lg:py-10 lg:px-12 md:py-6 md:px-4 px-2 py-3'>
					<div className='xl:text-[27px] md:text-[23px] text-base uppercase tracking-[5px] text-[#907c5b]'>
						price
					</div>
					<div className='xl:text-[42px] md:text-[33px] text-xl leading-loose text-[#5a5a5a] tracking-[2px]'>
						$1,422,888
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default VillaImage;
