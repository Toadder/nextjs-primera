import AnimatedImage from '@/src/shared/AnimatedImage/AnimatedImage';

const Hero = ({ imgUrl }) => (
	<AnimatedImage
		imgUrl={imgUrl}
		styles='xl:h-screen md:h-[700px] h-[600px] w-screen'
	/>
);

export default Hero;
