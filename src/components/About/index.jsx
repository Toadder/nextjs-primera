import SectionTitle from '@/src/shared/SectionTitle/SectionTitle';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { slideX, slideY } from '@/src/app/styles/animations';

const About = () => {
	return (
		<section className='section-paddings'>
			<div className='container'>
				<motion.div
					variants={slideY('down')}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true, }}
					className='text-center'
				>
					<SectionTitle styles='text-primary'>
						About Primera Properties
					</SectionTitle>
				</motion.div>
				<div className='flex lg:flex-row flex-col items-stretch justify-between lg:gap-10 md:gap-6 gap-5 lg:mt-9 md:mt-5 mt-4 lg:text-left text-justify'>
					<motion.div
						variants={slideX('right')}
						initial='hidden'
						whileInView='show'
						viewport={{ once: true, }}
						className='xl:text-[24px] lg:text-[21px] md:text-lg text-base text-[#595959] md:leading-normal leading-loose'>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
							nulla ligula, fringilla vel justo at, ornare volutpat turpis.
							Proin cursus urna sapien, nec blandit erat rutrum eu. Quisque
							tempor et leo vel congue. Nullam a mauris posuere leo feugiat
							maximus quis non turpis. Maecenas finibus purus ante, non mollis
							tellus interdum Igestas dignissim quam, nec iaculis justo pulvinar
							sed.
						</p>
						<p className='xl:mt-6 lg:mt-5 md:mt-3 mt-2'>
							Nullam et ex at urna commodo vulputate et sit amet mi. Duis sapien
							vitae massa commodo tincidunt. Nullam tincidunt tincidunt nibh et
							rhoncus. Curabitur vitae nisi at odio lobortis volutpat. Integer
							vel euismod orci, at cursus erat. Donec felis neque, mollis sed
							iaculis et, dignissim sit amet neque. Phasellus luctus sodales
							semper. Sed iaculis risus nec lacus pretium volutpat. Praesent nec
							ante eros. Morbi sapien lectus, dignissim vulputate libero a,
							ultricies eleifend metus. Vleo, ac varius felis. Morbi euismod
							pharetra est. Duis in ullaorper ex. Duis venenatis risus eget quam
							rutrum, id lobortis lectus eleifend. Etiam id nulla nec nunc
							mollis
						</p>
					</motion.div>
					<motion.div 
						variants={slideX('left')}
						initial='hidden'
						whileInView='show'
						viewport={{ once: true, }}
						className='relative lg:flex-[0_0_44%] lg:h-auto md:h-[450px] h-[350px]'>
						<Image
							className='object-cover'
							src='/about-us/about/01.jpg'
							alt=''
							fill
						/>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default About;
