import Hero from '../components/Hero';
import VideoBlock from '../components/common/VideoBlock';
import Featured from '../components/Featured';
import About from '../components/About';
import Invest from '../components/Invest';

const AboutUsPage = () => {
	return (
		<>
			<Hero imgUrl="/about-us/hero/01.jpg" />
			<About />
			<Invest />
			<VideoBlock title="Mexico Living" url="https://www.youtube.com/embed/0mEMMxVS7_g" />
			<Featured />
		</>
	)
}

export default AboutUsPage;
