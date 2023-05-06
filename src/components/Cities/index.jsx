import { cities } from '@/src/constants/constants';
import SectionSubtitle from '@/src/shared/SectionSubtitle/SectionSubtitle';
import SectionTitle from '@/src/shared/SectionTitle/SectionTitle';
import City from './City';
import { motion } from 'framer-motion';
import { slideY } from '@/src/app/styles/animations';

const Cities = () => {
	return (
		<section className='section-paddings'>
			<div className='container'>
				<motion.div
					variants={slideY('down')}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true }}
				>
					<SectionSubtitle>Primera Properties</SectionSubtitle>
				</motion.div>
				<motion.div
					variants={slideY('down')}
					initial='hidden'
					whileInView='show'
					className='xl:mt-5 md:mt-3 m mt-2'
					viewport={{ once: true }}
				>
					<SectionTitle styles='text-primary'>
						Browse by top cities in Mexico for hot properties in 2023.
					</SectionTitle>
				</motion.div>
				<div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-9 md:gap-7 gap-6 xl:mt-9 md:mt-7 mt-5'>
					{cities.map((city, i) => (
						<City key={city.id} index={i} {...city} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Cities;
