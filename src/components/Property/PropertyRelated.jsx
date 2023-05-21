import { slideX } from '@/src/app/styles/animations';
import { motion } from 'framer-motion';
import classes from './styles.module.scss';
import ListingsItem from '../common/ListingsItem';

const PropertyRelated = () => (
	<motion.div
		variants={slideX('left')}
		initial='hidden'
		whileInView='show'
		viewport={{ once: true }}
		className={classes.card}
	>
		<div className='text-primary font-medium md:text-[22px] text-[20px] md:mb-5 mb-2'>
			Related Properties
		</div>
		<div className='grid xl:grid-cols-1 md:grid-cols-2 grid-cols-1 xl:gap-y-2 md:gap-y-6 gap-y-3 gap-x-7 '>
			{Array(3)
				.fill('')
				.map((_, index) => (
					<ListingsItem
						key={index}
						imgSize={{ width: 444, height: 254 }}
						isSmall={true}
					/>
				))}
		</div>
	</motion.div>
);

export default PropertyRelated;
