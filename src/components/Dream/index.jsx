import { fadeIn, slideY } from '@/src/app/styles/animations';
import SectionTitle from '@/src/shared/SectionTitle/SectionTitle';
import { motion } from 'framer-motion';
import DreamForm from './DreamForm'

const Dream = () => {
	return (
		<section className='section-paddings'>
			<div className='container'>
				<motion.div
					variants={slideY('down')}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true }}
				>
					<SectionTitle styles='text-primary text-center'>
						Find your dream home in Mexico.
					</SectionTitle>
				</motion.div>
				<DreamForm />
			</div>
		</section>
	);
};

export default Dream;
