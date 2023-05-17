import { slideY } from '@/src/app/styles/animations';
import { contacts } from '@/src/constants/constants';
import SectionTitle from '@/src/shared/SectionTitle/SectionTitle';
import { motion } from 'framer-motion';
import ContactItem from './ContactItem';

const Contacts = () => {
	return (
		<section className='section-paddings'>
			<div className='container'>
				<motion.div
					variants={slideY('down')}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true }}
					className='text-center'
				>
					<SectionTitle styles='text-primary'>
						Get in touch with us.
					</SectionTitle>
				</motion.div>
				<div
					className='
						grid 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 items-start justify-between lg:gap-8 gap-6 lg:mt-12 md:mt-10 mt-7
					'
				>
					{contacts.map(contact => (
						<motion.div
							variants={slideY('up')}
							initial='hidden'
							whileInView='show'
							viewport={{ once: true }}
							key={contact.id}
						>
							<ContactItem {...contact} />
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Contacts;
