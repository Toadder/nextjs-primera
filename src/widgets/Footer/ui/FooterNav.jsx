import Link from 'next/link';

const FooterNav = ({ items }) => {
	return (
		<nav>
			<ul className='flex flex-col lg:gap-4 md:gap-3 gap-2'>
				{items.map(item => (
					<li key={item.id} className='text-white'>
						<Link
							className='md:text-lg text-base text-inherit animated 
							lg:before:inline-block before:hidden before:content-[">"] before:pr-4
							hover:text-secondary'
							href={item.path}
						>
							{item.name}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default FooterNav;
