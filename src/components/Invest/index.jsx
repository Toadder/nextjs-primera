import { slideY } from '@/src/app/styles/animations';
import SectionSubtitle from '@/src/shared/SectionSubtitle/SectionSubtitle';
import SectionTitle from '@/src/shared/SectionTitle/SectionTitle';
import { motion } from 'framer-motion';
import InvestCard from './InvestCard';

const benefits = [
	{
		id: 1,
		img: '/about-us/invest/01.jpg',
		title: 'Lifestyle',
	},
	{
		id: 2,
		img: '/about-us/invest/02.jpg',
		title: 'Beaches & Weather',
	},
	{
		id: 3,
		img: '/about-us/invest/03.jpg',
		title: 'Culture & Cuisine',
	},
];

const Invest = () => {
	return (
		<section className='section-paddings bg-tertiary'>
			<div className='container'>
				<motion.div
					variants={slideY('down')}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true }}
					className='text-center'
				>
					<SectionSubtitle>Primera Properties</SectionSubtitle>
				</motion.div>
				<motion.div
					variants={slideY('down')}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true }}
					className='text-center mt-1'
				>
					<SectionTitle styles='text-primary'>
						Why Invest in Mexico Property?
					</SectionTitle>
				</motion.div>
				<div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-x-8 gap-x-7 md:gap-y-8 gap-y-4 lg:mt-9 md:mt-6 mt-5'>
					{benefits.map(benefit => (
						<InvestCard key={benefit.id} {...benefit} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Invest;
