import { slideX } from '@/src/app/styles/animations';
import { constants } from '@/src/constants/constants';
import { motion } from 'framer-motion';
import Image from 'next/image';
import classes from './styles.module.scss';

const PropertyForm = () => (
	<motion.div
		variants={slideX('left')}
		initial='hidden'
		whileInView='show'
		viewport={{ once: true }}
		className={classes.card}
	>
		<div className='flex md:flex-row flex-col-reverse items-center justify-between md:gap-5 gap-3'>
			<p className='xl:text-[23px] md:text-[27px] text-[20px] md:text-left text-center text-primary'>
				Submit your details to speak with a broker about this listing.
			</p>
			<div className='md:flex-[0_0_143px] flex-[0_0_110px]'>
				<Image
					className='md:w-[143px] w-[110px]'
					src='/property/02.jpg'
					width={143}
					height={143}
					alt=''
				/>
			</div>
		</div>
		<form className='md:mt-8 mt-6 flex flex-col gap-4'>
			<div className='h-[52px] border-[3px] border-primary'>
				<input
					className='w-full h-full px-5 text-lg placeholder:text-[#454545]'
					type='text'
					placeholder='First Name'
				/>
			</div>
			<div className='h-[52px] border-[3px] border-primary'>
				<input
					className='w-full h-full px-5 text-lg placeholder:text-[#454545]'
					type='email'
					placeholder='Email'
				/>
			</div>
			<div className='h-[52px] border-[3px] border-primary'>
				<input
					className='w-full h-full px-5 text-lg placeholder:text-[#454545]'
					type='tel'
					placeholder='Phone'
				/>
			</div>
			<div className='h-[154px] border-[3px] border-primary'>
				<textarea
					className='w-full h-full px-5 py-3 resize-none text-lg placeholder:text-[#454545]'
					placeholder='Message'
				></textarea>
			</div>
			<button
				type='submit'
				className='md:text-[24px] text-[20px] text-white bg-primary py-3 animated hover:opacity-80'
			>
				Submit
			</button>
		</form>
		<div className='md:mt-8 mt-6 text-center'>
			<p className='text-[#454545] md:text-[20px] text-[18px] leading-tight'>
				Contact us on Whats App for immediate response and speak with a
				representative.
			</p>
			<a
				href={`tel:${constants.phoneNumber}`}
				className='
							text-[#454545] inline-flex flex-row items-center justify-center md:mt-5 mt-3 gap-3 md:text-[24px] text-[20px]
							animated hover:opacity-70
						'
			>
				<div className='md:flex-[0_0_45px] flex-[0_0_40px]'>
					<Image src='/property/whatsapp.png' width={45} height={45} alt='' />
				</div>
				<div>{constants.phoneNumber}</div>
			</a>
		</div>
	</motion.div>
);

export default PropertyForm;
