import FooterCopyright from './FooterCopyright';
import FooterMain from './FooterMain';

const Footer = () => {
	return (
		<footer className='footer bg-primary'>
			<div className='container'>
				<FooterMain />
				<FooterCopyright />
			</div>
		</footer>
	);
};

export default Footer;
