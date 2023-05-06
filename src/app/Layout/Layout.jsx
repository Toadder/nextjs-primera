import Footer from '@/src/widgets/Footer';
import Header from '@/src/widgets/Header';
import Newsletter from '@/src/widgets/Newsletter';

const Layout = ({ children, font }) => {
	return (
		<div className={`${font} layout font-spring overflow-hidden`}>
			<Header />
			<main>{children}</main>
			<Newsletter />
			<Footer />
		</div>
	);
};

export default Layout;
