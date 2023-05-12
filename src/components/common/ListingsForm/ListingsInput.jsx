import React from 'react';

const ListingsInput = ({ placeholder }) => {
	return (
		<input
			className='lg:h-[64px] md:h-[55px] h-[50px] md:text-lg text-base text-primary placeholder:text-inherit md:px-6 px-4'
			type='text'
			placeholder={placeholder}
		/>
	);
};

export default React.memo(ListingsInput);
