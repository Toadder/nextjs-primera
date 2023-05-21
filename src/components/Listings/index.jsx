import ListingsForm from '../common/ListingsForm';
import { motion } from 'framer-motion';
import { fadeIn } from '@/src/app/styles/animations';
import ListingsItem from '../common/ListingsItem';

const Listings = () => {
	return (
		<section className='section-paddings'>
			<div className='container'>
				<ListingsForm />
				<div
					className='	
					grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-x-7 gap-x-6 lg:gap-y-12 md:gap-y-8 gap-y-6 xl:mt-20 md:mt-12 mt-9
					'
				>
					{Array(6).fill('').map((_, index) => (
						<motion.div 
							key={index}
							variants={fadeIn()}
							initial="hidden"
							whileInView="show"
							viewport={{ once: true, }}
							className='h-full'
						>
							<div className='animated hover:translate-y-[-20px] h-full'>
								<ListingsItem imgSize={{ width: 501, height: 312 }} />
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Listings;
