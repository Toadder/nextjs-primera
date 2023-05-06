import { slideX } from '@/src/app/styles/animations';
import SectionTitle from '@/src/shared/SectionTitle/SectionTitle';
import { motion } from 'framer-motion';

const NewsletterContent = () => (
	<motion.div
		className='xl:max-w-[525px] xl:w-auto w-full'
		variants={slideX('right')}
		initial='hidden'
		whileInView='show'
		viewport={{ once: true, }}
	>
		<SectionTitle styles='text-accent'>Newsletter Sign up</SectionTitle>
		<p className='text-accent md:text-[21px] text-lg md:mt-3 mt-2'>
			Stay up to date on featured properties and hot deals. Sign up for our
			newsletter and receive monthly listings.
		</p>
	</motion.div>
);

export default NewsletterContent;
