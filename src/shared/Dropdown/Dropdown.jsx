import { useState } from 'react';

const Dropdown = ({ optionsData, defaultValue, selected, setSelected }) => {
	const [isActive, setIsActive] = useState(false);

	const updateDropdown = name => {
		setSelected(name);
		setIsActive(false);
	};

	return (
		<div className='dropdown'>
			<div
				className={`dropdown__btn ${isActive ? 'dropdown__btn_active' : ''} `}
				onClick={() => setIsActive(prev => !prev)}
			>
				{selected.length ? selected : defaultValue}
			</div>
			{isActive && (
				<>
					<div className='dropdown__backdrop' onClick={() => setIsActive(false)}></div>
					<div className='dropdown__content'>
						{optionsData.map(option => (
							<div
								key={option.id}
								className={`dropdown__item animated ${
									option.name === selected ? 'dropdown__item_active' : ''
								}`}
								onClick={() => updateDropdown(option.name)}
							>
								{option.name}
							</div>
						))}
					</div>
				</>
			)}
		</div>
	);
};

export default Dropdown;
