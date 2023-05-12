import { fadeIn, slideY } from '@/src/app/styles/animations';
import SectionTitle from '@/src/shared/SectionTitle/SectionTitle';
import { motion } from 'framer-motion';

const ContactForm = () => {
	return (
		<section className='section-paddings'>
			<div className='container'>
				<motion.div
					variants={slideY('down')}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true }}
					className='text-center'
				>
					<SectionTitle styles='text-primary'>Send us an email</SectionTitle>
				</motion.div>
				<form className='lg:mt-12 md:mt-10 mt-7'>
					<div className='grid md:grid-cols-2 grid-cols-1 lg:gap-12 md:gap-10 gap-6'>
						<motion.div
							variants={fadeIn()}
							initial='hidden'
							whileInView='show'
							viewport={{ once: true }}
						>
							<p className='md:text-[22px] text-xl text-primary'>Your Name</p>
							<input
								type='text'
								className='w-full border-b-[1px] border-primary md:py-1.5 py-2 md:text-xl text-lg text-primary'
							/>
						</motion.div>
						<motion.div
							variants={fadeIn()}
							initial='hidden'
							whileInView='show'
							viewport={{ once: true }}
						>
							<p className='md:text-[22px] text-xl text-primary'>Your Email</p>
							<input
								type='email'
								className='w-full border-b-[1px] border-primary md:py-1.5 py-2 md:text-xl text-lg text-primary'
							/>
						</motion.div>
						<motion.div
							variants={fadeIn()}
							initial='hidden'
							whileInView='show'
							viewport={{ once: true }}
							className='md:col-span-2'
						>
							<p className='md:text-[22px] text-xl text-primary'>
								Your Message
							</p>
							<input
								type='text'
								className='w-full border-b-[1px] border-primary md:py-1.5 py-2 md:text-xl text-lg text-primary'
							/>
						</motion.div>
					</div>
					<motion.div
						variants={slideY('up')}
						initial='hidden'
						whileInView='show'
						viewport={{ once: true }}
					>
						<button
							className='
								lg:mt-14 md:mt-12 mt-7 animated hover:bg-[#0b3e41] md:text-[22px] text-lg lg:h-[68px] md:h-[60px]
								h-[50px] text-white bg-primary flex items-center justify-center w-full md:max-w-[235px]
								mx-auto
						'
						>
							Submit
						</button>
					</motion.div>
				</form>
			</div>
		</section>
	);
};

export default ContactForm;
