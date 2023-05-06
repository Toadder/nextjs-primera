import { slideX } from '@/src/app/styles/animations';
import SectionTitle from '@/src/shared/SectionTitle/SectionTitle';
import { motion } from 'framer-motion';

const ExclusiveContent = () => {
	return (
		<div className='flex-[0_0_100%]'>
			<div className='container flex h-full'>
				<motion.div
					className='lg:w-1/2'
					variants={slideX('right')}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true }}
				>
					<div className='lg:pr-14 lg:pt-4'>
						<SectionTitle styles='text-primary xl:text-[55px]'>
							Exclusive and Select Real Estate Properties in Mexcio.
						</SectionTitle>
					</div>
					<div
						className='
							xl:mt-9 lg:mt-6 md:mt-5 mt-4 xl:text-[28px] lg:text-[21px] md:text-lg text-base text-[#595959] md:leading-normal leading-loose xl:pr-24 lg:pr-14 xl:py-12 md:py-6 py-4 relative
							before:content-[""] before:absolute lg:before:w-[calc(100vw-50%)] before:w-[calc(100vw+32px)] before:h-full before:bg-[#faf5f1]
							lg:before:right-0 before:right-[-16px] before:top-0 before:z-[-1]
						'
					>
						<p>
							Primera Properties features select villas and condos for sale in
							Mexico.
						</p>
						<p className='xl:mt-6 lg:mt-5 md:mt-3 mt-2'>
							Whether you are looking for a vacation rental, or to invest in
							your own property we feature the best and exclusive listsings
							available. Narrow your search in our website search bar, or browse
							through the website to see all the current listings.
						</p>
						<p className='xl:mt-6 lg:mt-5 md:mt-3 mt-2'>
							If you’re looking for something unique or want to build your own
							custom home, contact us. We have over 15+ years of experince
							helping people find their dream homes.
						</p>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default ExclusiveContent;
