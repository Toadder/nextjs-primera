import { fadeIn, slideY } from '@/src/app/styles/animations';
import { motion } from 'framer-motion';
import DreamRadio from './DreamRadio';
import DreamInput from './DreamInput';
import Dropdown from '@/src/shared/Dropdown/Dropdown';
import { cities } from '@/src/constants/constants';
import { useState } from 'react';

const radiosData = [
	{ id: 1, value: 'buy', styles: 'bg-primary border-primary', isChecked: true },
	{
		id: 2,
		value: 'rent',
		styles: 'bg-subtitle border-subtitle',
		isChecked: false,
	},
];

const DreamForm = () => {
	const [selected, setSelected] = useState('');

	return (
		<form className='xl:mt-14 md:mt-10 mt-7'>
			<motion.div
				variants={fadeIn()}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true }}
				className='flex flex-row items-stretch justify-center xl:gap-7 md:gap-5 gap-3'
			>
				{radiosData.map(data => (
					<DreamRadio key={data.id} {...data} />
				))}
			</motion.div>
			<motion.div
				className='
				grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 xl:gap-6 md:gap-4 gap-3 bg-tertiary
				xl:px-6 px-4 xl:py-8 md:py-6 py-4 xl:mt-16 md:mt-12 mt-9
		'
				variants={slideY('up')}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true, }}
			>
				<DreamInput placeholder='Enter Keyword' />
				<Dropdown
					optionsData={cities}
					defaultValue="City/Location"
					selected={selected}
					setSelected={setSelected}
				/>
				<DreamInput placeholder='Price/Budget' />
				<button
					className='lg:h-[64px] md:h-[55px] h-[50px] md:text-lg text-base bg-primary text-white animated hover:opacity-80'
					type='submit'
				>
					Find Property Now
				</button>
			</motion.div>
		</form>
	);
};

export default DreamForm;
