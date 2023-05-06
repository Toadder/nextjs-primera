import VillaProperty from './VillaProperty';
import SectionSubtitle from '@/src/shared/SectionSubtitle/SectionSubtitle';
import SectionTitle from '@/src/shared/SectionTitle/SectionTitle';
import { motion } from 'framer-motion';
import { slideX } from '@/src/app/styles/animations';

const VillaContent = ({ properties }) => {
	return (
		<div className='flex-[0_0_100%]'>
			<div className='container flex items-center h-full'>
				<motion.div
					className='lg:w-1/2 lg:py-5 2xl:pr-48 lg:pr-28'
					variants={slideX('right')}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true }}
				>
					<div>
						<SectionSubtitle>Primera Properties</SectionSubtitle>
					</div>
					<div className='md:mt-4 mt-3'>
						<SectionTitle styles='text-primary xl:text-[64px]'>
							Featured Villa <br className='lg:block hidden' /> in Tulum
						</SectionTitle>
					</div>
					<p className='xl:text-[21px] md:text-lg md:mt-4 text-base md:leading-relaxed leading-loose text-[#5a5a5a] mt-3'>
						An exclusive beachfront development with 28 unique Villas. The
						project is located in the Riviera Maya coast minutes away from
						Tulum. The property is surrounded by the jungle and the stunning and
						iconic Caribbean sea making this boutique development unique and one
						of the most exclusive.
					</p>
					<div className='md:mt-9 mt-5 grid grid-cols-2 text-center gap-x-4 md:gap-y-8 gap-y-7'>
						{properties.map(property => (
							<VillaProperty key={property.id} {...property} />
						))}
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default VillaContent;
