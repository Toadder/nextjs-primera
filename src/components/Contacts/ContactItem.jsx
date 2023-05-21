import Image from 'next/image';

const ContactItem = ({ icon, iconSize, title, content }) => {
	return (
		<div className='flex md:flex-row flex-col md:items-start items-center lg:gap-4 md:gap-5 gap-3 md:text-left text-center'>
			<div className='md:flex-[0_0_77px] md:w-[77px] md:h-[77px] flex-[0_0_70px] w-[70px] h-[70px] rounded-full bg-primary flex items-center justify-center'>
				<Image src={icon} {...iconSize} alt='' />
			</div>
			<div className='md:text-[21px] text-[19px] leading-tight text-[#545454] w-full'>
				<div className='font-medium'>{title}</div>
				<div className='mt-0.5'>
					{content.map((el, i) => (
						<div key={i}>{el}</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ContactItem;
