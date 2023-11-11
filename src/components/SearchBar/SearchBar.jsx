import React, { useState, useRef } from 'react';
import './SearchBar.css';

function SearchBar({ searchValue, onSearchChange }) {
	const [searchQuery, setSearchQuery] = useState(searchValue);
	const debounceTimeout = useRef(null);

	function _onChange(event) {
		const query = event.target.value;
		setSearchQuery(query);

		if (debounceTimeout.current) {
			clearTimeout(debounceTimeout.current);
		}

		debounceTimeout.current = setTimeout(() => {
			onSearchChange(query);
		}, 1200);
	}

	return (
		<div className="searchContainer">
			<label htmlFor="searchBooks">Search: </label>
			<input
				id="searchBooks"
				type="text"
				value={searchQuery}
				onChange={_onChange}
			/>
		</div>
	);
}

export default SearchBar;
