import ExclusiveContent from './ExclusiveContent';
import ExclusiveImage from './ExclusiveImage';

const Exclusive = () => {
	return (
		<section className='section-paddings lg:flex'>
			<ExclusiveContent />
			<ExclusiveImage />
		</section>
	);
};

export default Exclusive;
