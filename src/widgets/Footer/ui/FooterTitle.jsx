import { fontspring } from '@src/fonts';

const FooterTitle = ({ children }) => {
	return (
		<div
			className={`${fontspring.className} lg:mb-5 md:mb-3.5 mb-2.5 md:text-lg 
		text-base uppercase text-white leading-tight tracking-[4px]`}
		>
			{children}
		</div>
	);
};

export default FooterTitle;
