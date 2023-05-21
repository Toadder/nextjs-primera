import AnimatedImage from '@/src/shared/AnimatedImage/AnimatedImage';
import classes from './styles.module.scss';

const PropertyGrid = () => {
	return (
		<div className='grid grid-cols-4 xl:grid-rows-[repeat(2,_395px)] md:grid-rows-[repeat(2,_350px)] grid-rows-[repeat(2,_300px)] xl:auto-rows-[395px] md:auto-rows-[350px] auto-rows-[300px] md:gap-2 gap-1.5'>
			{Array(5)
				.fill('')
				.map((_, index) => (
					<AnimatedImage
						key={index}
						imgUrl={'/property/01.jpg'}
						styles={classes.gridItem}
					/>
				))}
		</div>
	);
};

export default PropertyGrid;
