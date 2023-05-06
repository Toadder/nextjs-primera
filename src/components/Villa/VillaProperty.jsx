import { fontspring } from '@/src/fonts';

const VillaProperty = ({ name, value }) => {
	return (
		<div>
			<div className={`${fontspring.className} xl:text-7xl md:text-5xl text-3xl text-[#907c5b]`}>{value}</div>
			<div className='md:mt-2 mt-1 xl:text-[21px] md:text-lg text-base leading-normal text-[#5a5a5a]'>{name}</div>
		</div>
	);
};

export default VillaProperty;
