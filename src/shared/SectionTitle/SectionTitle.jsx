import { fontspring } from '@/src/fonts';

const SectionTitle = ({ children, styles = '' }) => {
	return (
		<h2
			className={`
			${fontspring.className}	xl:text-[47px] md:text-[38px] text-[27px] leading-tight ${styles}
		`}
		>
			{children}
		</h2>
	);
};

export default SectionTitle;
