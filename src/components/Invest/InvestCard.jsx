import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeIn } from '@/src/app/styles/animations'

const InvestCard = ({ img, title }) => {
	return (
		<motion.div
			variants={fadeIn()}
			initial='hidden'
			whileInView='show'
			viewport={{ once: true }}
		>
			<div className='xl:h-[596px] lg:h-[450px] md:h-[380px] h-[320px]'>
				<Image className='object-cover w-full h-full' width={501} height={600} src={img} alt=""/>
			</div>
			<div
				className='
					text-center uppercase lg:text-[30px] md:text-[24px] text-xl text-primary md:leading-tight leading-loose
					xl:mt-11 md:mt-8 mt-4
				'
			>
				{title}
			</div>
		</motion.div>
	)
}

export default InvestCard