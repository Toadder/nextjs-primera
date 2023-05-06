import Layout from '@src/app/Layout/Layout';
import '@src/app/styles/global.scss';
import { poppins } from '@src/fonts';
import { AnimatePresence } from 'framer-motion';

const App = ({ Component, pageProps }) => (
	<AnimatePresence mode='wait'>
		<Layout font={poppins.className}>
			<Component {...pageProps} />
		</Layout>
	</AnimatePresence>
);

export default App;
