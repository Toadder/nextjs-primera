import VillaContent from './VillaContent';
import VillaImage from './VillaImage';

const properties = [
	{
		id: 1,
		name: 'Bedroom',
		value: '2',
	},
	{
		id: 2,
		name: 'Bathroom',
		value: '2',
	},
	{
		id: 3,
		name: 'Interior Sq. Feet',
		value: '1,227',
	},
	{
		id: 4,
		name: 'Exterior Acres',
		value: '0.06',
	},
];

const Villa = () => {
	return (
		<section className='section-paddings lg:flex'>
			<VillaContent properties={properties} />
			<VillaImage />
		</section>
	);
};

export default Villa;
