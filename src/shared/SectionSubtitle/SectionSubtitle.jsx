
const SectionSubtitle = ({ children, styles = '' }) => {
	return ( 
		<div className={`uppercase lg:text-[21px] md:text-lg text-base text-subtitle tracking-[3px] ${styles}`}>
			{children}
		</div>
	)
}

export default SectionSubtitle;