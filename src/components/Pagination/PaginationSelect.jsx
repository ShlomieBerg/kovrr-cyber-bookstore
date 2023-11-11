import { useState } from 'react';

const PaginationSelect = ({ pageOptions, size, setSize }) => {
	const [selectedValue, setSelectedValue] = useState(size);

	const _onChange = (event) => {
		const value = event.target.value;
		setSelectedValue(value);
		setSize(value);
	};
	return (
		<div className="paginationSelectContainer">
			<select
				className="paginantionSelect"
				name="pageItems"
				value={selectedValue}
				onChange={_onChange}
			>
				{pageOptions.map((option) => (
					<option key={option} value={option}>
						{String(option)}
					</option>
				))}
			</select>
		</div>
	);
};

export default PaginationSelect;
