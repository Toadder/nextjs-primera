import Head from 'next/head';
import HomePage from '@/src/pages/HomePage';

const Home = () => {
	return (
		<>
			<Head>
				<title>Primera | Home</title>
			</Head>
			<HomePage />
		</>
	);
};

export default Home;
