import Image from 'next/image';
import Link from 'next/link';

const FeaturedItem = ({ id, img, city, price, title }) => {
	return (
		<Link href={`/listings/${id}`}>
			<div className='max-w-full'>
				<Image className='object-cover w-full' src={img} width={501} height={312} alt='' />
			</div>
			<div className='bg-white'>
				<div className='uppercase lg:text-xl md:text-lg text-base text-white bg-[#9c8e75] inline-block px-4 py-0.5 leading-tight'>
					{city}
				</div>
				<div className='md:mt-3 mt-2 lg:text-xl md:text-lg text-base leading-tight'>
					{new Intl.NumberFormat('en-US', {
						style: 'currency',
						currency: 'USD',
						minimumFractionDigits: 0,
					}).format(price)}
				</div>
				<div className='md:mt-2 mt-1.5 lg:text-xl md:text-lg text-base leading-tight'>{title}</div>
			</div>
		</Link>
	);
};

export default FeaturedItem;
