import Image from 'next/image';
import Link from 'next/link';

const FeaturedItem = () => {
	return (
		<Link href={`/listings/1`}>
			<div className='max-w-full'>
				<Image className='object-cover w-full' src="/items/01.jpg" width={501} height={312} alt='' />
			</div>
			<div className='bg-white'>
				<div className='uppercase lg:text-xl md:text-lg text-base text-white bg-[#9c8e75] inline-block px-4 py-0.5 leading-tight'>
					Playa Del Carmen
				</div>
				<div className='md:mt-3 mt-2 lg:text-xl md:text-lg text-base leading-tight'>
					{new Intl.NumberFormat('en-US', {
						style: 'currency',
						currency: 'USD',
						minimumFractionDigits: 0,
					}).format(476932)}
				</div>
				<div className='md:mt-2 mt-1.5 lg:text-xl md:text-lg text-base leading-tight'>The Village 2 Bedroom Condo</div>
			</div>
		</Link>
	);
};

export default FeaturedItem;
