import Image from 'next/image';
import Link from 'next/link';

const ListingsItem = ({
	imgSize,
	isSmall = false,
}) => {
	return (
		<Link className='flex flex-col h-full' href={`/listings/1`}>
			<div className='max-w-full'>
				<Image className='object-cover w-full' src="/items/01.jpg" {...imgSize} alt='' />
			</div>
			<div
				className={`grow ${
					!isSmall ? 'bg-tertiary lg:px-7 px-5 lg:py-6 py-5' : ' py-3'
				}`}
			>
				<div className='text-[#a5875f] lg:text-lg text-base leading-tight'>
					Condo
				</div>
				<div
					className={`lg:text-[20px] md:text-lg text-base font-medium leading-tight ${
						!isSmall ? 'lg:mt-3 mt-2' : 'md:mt-1 mt-2'
					}`}
				>
					The Village 2 Bedroom Condo
				</div>
				<div
					className={`lg:text-[20px] md:text-lg text-base leading-tight ${
						!isSmall ? 'lg:mt-1 mt-2' : 'md:mt-0 mt-0.5'
					}`}
				>
					22-05 Astoria, Tulum, Mexico
				</div>
				<div
					className={`flex flex-wrap items-center md:gap-x-5 lg:gap-y-1 gap-y-[3px] gap-x-4 ${
						!isSmall ? 'md:mt-5 mt-4' : 'md:mt-1 mt-2'
					}`}
				>
					{
					['Beds: 2', 'Bath: 2', 'Sq Feet: 1,200'].map(prop => (
						<div
							key={prop}
							className='lg:text-[20px] md:text-[18px] text-[16px] leading-tight'
						>
							{prop}
						</div>
					))}
				</div>
			</div>
		</Link>
	);
};

export default ListingsItem;
