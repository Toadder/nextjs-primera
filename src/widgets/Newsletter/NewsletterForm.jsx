import { motion } from 'framer-motion';
import { slideX } from '@/src/app/styles/animations';

export const NewsletterForm = () => (
	<motion.form
		variants={slideX('left')}
		initial='hidden'
		whileInView='show'
		viewport={{ once: true, }}
		className='flex md:flex-row flex-col items-stretch justify-end md:gap-6 gap-4 grow xl:w-auto w-full'
	>
		<div className='w-full xl:max-w-[690px]'>
			<input
				className='w-full md:px-6 px-4 lg:h-[84px] md:h-[60px] h-[50px] md:text-[21px] text-lg placeholder:text-[#979797]'
				type='text'
				placeholder='E-mail'
			/>
		</div>
		<button
			className='animated hover:bg-[#73624f] md:text-[21px] text-lg lg:h-[84px] md:h-[60px] h-[50px] text-white bg-accent flex items-center justify-center w-full md:max-w-[250px]'
			type='submit'
		>
			Subscribe
		</button>
	</motion.form>
);

export default NewsletterForm;
