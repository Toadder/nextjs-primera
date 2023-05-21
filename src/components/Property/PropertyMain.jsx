import { slideX } from '@/src/app/styles/animations';
import SectionTitle from '@/src/shared/SectionTitle/SectionTitle';
import { motion } from 'framer-motion';
import Image from 'next/image';
import classes from './styles.module.scss';

const PropertyMain = () => (
	<motion.div
		variants={slideX('right')}
		initial='hidden'
		whileInView='show'
		viewport={{ once: true }}
		className={`${classes.card}`}
	>
		<div className='flex md:flex-row flex-col items-start flex-wrap justify-between gap-2'>
			<SectionTitle styles='text-primary xl:text-[40px]'>
				Villas Kaybles
			</SectionTitle>
			<div className='font-medium lg:text-[35px] md:text-[33px] text-[25px] text-primary'>
				$620,000
			</div>
		</div>
		<div className='md:mt-3 mt-2 flex flex-col gap-0.5'>
			{Array(4)
				.fill('')
				.map((_, index) => (
					<div
						key={index}
						className='flex flex-row gap-2 md:text-[20px] text-[17px]'
					>
						<div>Property:</div>
						<div>Value</div>
					</div>
				))}
		</div>
		<div className='md:mt-8 mt-6'>
			<div className='text-primary font-medium md:text-[22px] text-[20px] md:mb-5 mb-2'>
				Overview
			</div>
			<p className='md:text-[20px] text-[17px]'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
				dapibus tortor sem, sit amet sodales diam tempor in. Donec tempus tellus
				in imperdiet consequat. Nunc semper, nunc nec porta elementum, dolor
				orci dapibus magna, nec imperdiet felis elit ut mi. Sed vel convallis
				enim, lobortis consectetur lectus. Suspendisse rhoncus ultricies
				scelerisque. In blandit felis et enim luctus, et egestas odio mollis.
				Nulla iaculis ante nec tortor blandit maximus. Phasellus aliquet
				tincidunt dui, ac pellentesque turpis luctus euismod. Mauris non
				placerat nisl. Proin egestas nulla purus, sit amet scelerisque sapien
				euismod eget. Vivamus ac est placerat, mollis est ac, mattis ipsum. Sed
				justo massa, gravida ac rhoncus ut, venenatis tristique nibh. Mauris
				rutrum, nisl vel fermentum lacinia, odio leo ultricies nisl, at
				ullamcorper ante nibh sit amet nisi. Mauris non pharetra elit. Etiam
				hendrerit massa eget sollicitudin pulvinar. Sed odio ante, tincidunt nec
				convallis blandit, varius at dui. blandit felis et enim luctus, et
				egestas.
			</p>
		</div>
		<div className='md:mt-8 mt-6'>
			<div className='text-primary font-medium md:text-[22px] text-[20px] md:mb-5 mb-2'>
				Details
			</div>
			<div
				className='
				grid md:grid-cols-2 grid-cols-1 md:gap-y-4 gap-y-1.5 gap-x-8 md:text-[20px] text-[17px] text-[#525252]
			'
			>
				{Array(10)
					.fill('')
					.map((_, index) => (
						<div key={index} className='flex flex-center gap-4'>
							<div className='text-primary font-medium'>Property ID:</div>
							<div>HZ3800</div>
						</div>
					))}
			</div>
		</div>
		<div className='md:mt-8 mt-6'>
			<div className='text-primary font-medium md:text-[22px] text-[20px] md:mb-5 mb-2'>
				PDF Layout Plans
			</div>
			<div className='grid md:grid-cols-2 grid-cols-1 gap-y-4 gap-x-8'>
				{Array(2)
					.fill('')
					.map((_, index) => (
						<div key={index}>
							<a
								href=''
								className='
								inline-flex flex-row md:gap-7 gap-5 items-center animated hover:opacity-70
							'
							>
								<div
									className='
									md:w-[109px] md:h-[127px] md:flex-[0_0_109px] w-[85px] flex-[0_0_85px] h-[100px] 
									flex items-center justify-center bg-[#f7f7f7]
								'
								>
									<Image
										className='md:w-[54px] w-[47px]'
										src='/property/pdf.png'
										width={54}
										height={67}
										alt=''
									/>
								</div>
								<div className='text-[#464646] font-medium md:text-[22px] text-[19px]'>
									Download Pdf
								</div>
							</a>
						</div>
					))}
			</div>
		</div>
	</motion.div>
);

export default PropertyMain;
