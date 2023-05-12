import { items } from '@/src/constants/constants';
import ListingsForm from '../common/ListingsForm';
import ListingsItem from './ListingsItem';
import { motion } from 'framer-motion';
import { fadeIn } from '@/src/app/styles/animations';


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
					{items.map(item => (
						<motion.div 
							key={item.id}
							variants={fadeIn()}
							initial="hidden"
							whileInView="show"
							viewport={{ once: true, }}
							className='h-full'
						>
							<div key={item.id} className='animated hover:translate-y-[-20px] h-full'>
								<ListingsItem {...item} />
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Listings;
