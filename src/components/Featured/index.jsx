import { fadeIn, slideY } from '@/src/app/styles/animations';
import { items } from '@/src/constants/constants';
import SectionSubtitle from '@/src/shared/SectionSubtitle/SectionSubtitle';
import SectionTitle from '@/src/shared/SectionTitle/SectionTitle';
import { motion } from 'framer-motion';
import FeaturedItem from '../common/FeaturedItem';

const Featured = () => {
	return (
		<section className='section-paddings'>
			<div className='container'>
				<motion.div
					variants={slideY('down')}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true }}
				>
					<SectionSubtitle styles='text-center'>
						New & Hot Listings
					</SectionSubtitle>
				</motion.div>
				<motion.div
					className='mt-1'
					variants={slideY('down')}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true }}
				>
					<SectionTitle styles='text-primary text-center'>
						Featured Condos
					</SectionTitle>
				</motion.div>
				<div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-x-7 gap-x-6 lg:gap-y-12 md:gap-y-8 gap-y-6 lg:mt-10 md:mt-8 mt-5'>
					{items.map(item => (
						<motion.div
							key={item.id}
							variants={fadeIn()}
							initial='hidden'
							whileInView='show'
							viewport={{ once: true }}
							whileHover={{ y: -25, transition: { type: 'just' } }}
						>
							<FeaturedItem {...item} />
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Featured;
