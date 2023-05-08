import React from 'react';

const HeaderBurger = ({ isOpen, setIsOpen }) => {
	return (
		<div
			className='md:hidden block relative w-[28px] h-[24px] relative z-[2] cursor-pointer'
			onClick={() => setIsOpen(prevIsOpen => !prevIsOpen)}
		>
			<div
				className={`${isOpen ? 'rotate-45 top-[10px]' : 'top-0'}
				animated absolute w-full h-[3px] rounded-md bg-secondary  left-0`}
			></div>
			<div
				className={`${isOpen ? 'scale-0' : ''}
				animated absolute w-full h-[3px] rounded-md bg-secondary top-[11px] left-0`}
			></div>
			<div
				className={`${isOpen ? '-rotate-45 bottom-[11px]' : 'bottom-0'}
				animated absolute w-full h-[3px] rounded-md bg-secondary bottom-0 left-0`}
			></div>
		</div>
	);
};

export default React.memo(HeaderBurger);
