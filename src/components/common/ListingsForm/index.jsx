import ListingsFields from './ListingsFields'
import { motion } from 'framer-motion'
import { slideY } from '@/src/app/styles/animations'
import SectionTitle from '@/src/shared/SectionTitle/SectionTitle' 

const ListingsForm = () => {
	return (
		<div>
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
				<ListingsFields />
		</div>
	)
}

export default ListingsForm