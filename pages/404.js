import { fadeIn } from '@/src/app/styles/animations';
import { motion } from 'framer-motion';
import Head from 'next/head';

const Error = () => {
	return (
		<>
			<Head>
				<title>Page not found</title>
			</Head>
			<div
				className='xl:h-screen md:h-[700px] h-[600px] w-screen bg-primary text-white flex flex-col items-center justify-center text-center'
			>
				<motion.div
					variants={fadeIn()}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true }}
					className='container'
				>
					<div className='font-medium lg:text-[100px] md:text-[80px] text-[50px] leading-tight'>
						404
					</div>
					<div className='md:mt-1 mt-2 lg:text-[23px] md:text-[21px] text-[17px]'>
						The page you are looking for can't be found...
					</div>
				</motion.div>
			</div>
		</>
	);
};

export default Error;
