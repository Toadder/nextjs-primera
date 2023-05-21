import { slideX } from '@/src/app/styles/animations';
import { motion } from 'framer-motion';
import classes from './styles.module.scss';
import Map from '../common/Map';

const PropertyMap = () => (
	<motion.div
		variants={slideX('right')}
		initial='hidden'
		whileInView='show'
		viewport={{ once: true }}
		className={`${classes.card} `}
	>
		<div className='text-primary font-medium md:text-[22px] text-[20px] md:mb-5 mb-2'>
			Property Location
		</div>
		<div className='lg:h-[450px] md:h-[400px] h-[325px]'>
			<Map iframe='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.085414165919!2d-87.09035942524122!3d20.625375001512204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4e4310d669c239%3A0xddc421f005909f81!2sPlaza%20Palmeiras!5e0!3m2!1sru!2sru!4v1684316392020!5m2!1sru!2sru' />
		</div>
	</motion.div>
);

export default PropertyMap;
