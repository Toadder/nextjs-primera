import React from 'react';

const ListingsRadio = ({ value, isChecked, styles = '' }) => {
	return (
		<label
			className={`
				cursor-pointer uppercase text-white lg:text-[21px] md:text-lg text-base w-full max-w-[180px]
				whitespace-nowrap lg:py-2.5 md:py-2 py-1.5 px-2 text-center animated hover:opacity-80
				relative ${styles}
			`}
		>
			{isChecked && (
				<span
					className='md:border-l-[15px] border-l-[10px] border-l-transparent
				md:border-t-[15px] border-t-[10px] border-inherit
				md:border-r-[15px] border-r-[10px] border-r-transparent absolute top-full left-2/4 -translate-x-1/2'
				></span>
			)}

			<input
				name='type'
				className='hidden'
				type='radio'
				defaultChecked={isChecked}
				value={value}
			/>
			<span>{value}</span>
		</label>
	);
};

export default React.memo(ListingsRadio);
