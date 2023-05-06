import Cities from '../components/Cities';
import Dream from '../components/Dream';
import Exclusive from '../components/Exclusive'
import Featured from '../components/Featured';
import Hero from '../components/Hero';
import Villa from '../components/Villa'
import VideoBlock from '../components/common/VideoBlock';

const HomePage = () => (
	<>
		<Hero imgUrl='/home/hero/banner.jpg' />
		<Dream />
		<Exclusive />
		<Cities />
		<Villa />
		<Featured />
		<VideoBlock title="Our Video Presentation" url="https://www.youtube.com/embed/0mEMMxVS7_g" />
	</>
);

export default HomePage;
